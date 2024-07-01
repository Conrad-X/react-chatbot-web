import React from 'react';
import Header from "../Header/Header";
import UserInput from '../UserInput/UserInput';
import MessagePanel from '../MessagePanel/MessagePanel';
import { useState } from 'react';
import uuid4 from 'uuid4';
import axios from 'axios';
import './ChatPanel.css';

const USER_MESSAGE_TYPE = 'user';
const ASSISTANT_MESSAGE_TYPE = 'assistant';
const ERROR_MESSAGE_TYPE = 'error';
const ERROR_MESSAGE =
  'There seems to be an issue, please try again or contact administrator.';

let timeout = false;

function ChatPanel({ minimize }) {
  let [message, setMessage] = useState([]);
  let [loading, setLoading] = useState(false);
  let [hide, setHide] = useState(false);

  const sendMessage = (message) => {
    if (!timeout) {
      if (message) {
        processMessage(message);
        timeout = true;
        setTimeout(() => (timeout = false), 2000);
      }
    }
  };

  const minimizePanel = (flag) => {
    setHide(flag);
    minimize(flag);
  };

  const processMessage = (message) => {
    if (!loading) {
      let messageObject = createMessage(message, USER_MESSAGE_TYPE);
      setMessage(messageObject);
      setLoading(true);

      let ip = localStorage.getItem('ip');
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/queryAssistant`, {
          prompt: message,
          address: ip,
        })
        .then((res) => {
          let messageObject = createMessage(
            res.data.content.replace(/【[0-9]*†source】/g, ''),
            ASSISTANT_MESSAGE_TYPE
          );
          setMessage(messageObject);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          let messageObject = createMessage(ERROR_MESSAGE, ERROR_MESSAGE_TYPE);
          setMessage(messageObject);
        });
    }
  };

  const createMessage = (content, type) => {
    return {
      id: uuid4(),
      sender: type,
      content: content,
      dateTime: new Date(),
    };
  };

  return (
    <section className={hide ? 'container-hide' : 'app-container'}>
      <Header minimizePanel={minimizePanel} />
      <MessagePanel
        className="message-panel"
        hide={hide}
        loading={loading}
        message={message}
      />
      <UserInput sendMessage={sendMessage} />
    </section>
  );
}

export default ChatPanel;
