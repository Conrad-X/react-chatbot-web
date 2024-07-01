import React, { useEffect, useRef, useState } from "react";
import "./MessagePanel.css";

function MessagePanel({ message, loading, hide }) {
  const scrollFrame = useRef(null);
  const audio = useRef(null);
  const audioToggle = useRef(null);
  const messagesEndRef = useRef(null)
  let [data, setData] = useState([]);

  const USER_MESSAGE_TYPE = "user";
  const ASSISTANT_MESSAGE_TYPE = "assistant";

  let userPath = "./assets/user-path.png";
  let avatarPath = "./assets/bot-path.png";

  const scrollToBottom = () => {
    //messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    setData([...data].concat(message));
    if (message.sender === USER_MESSAGE_TYPE) {
      audio.current.play();
    } else if (message.sender === ASSISTANT_MESSAGE_TYPE) {
      audioToggle.current.play();
    }
  }, [data, message]);

  useEffect(() => {
    scrollToBottom();
  }, [data]);

  return (
    <section className="message-panel-container" ref={scrollFrame}>
      {data.length > 0 ? (
        data.map((message) => {
          return message.sender === USER_MESSAGE_TYPE ? (
            <div
              key={message.id}
              className="message-inner-container"
              style={{ justifyContent: "flex-start" }}
            >
              <div className="message-container">
                <div
                  className="avatar"
                  style={{ backgroundImage: `url('${userPath}')` }}
                ></div>
                <div className="message">{message.content}</div>
              </div>
            </div>
          ) : (
            <div
              key={message.id}
              className="message-inner-container"
              style={{ justifyContent: "flex-start" }}
            >
              <div className={ message.sender === ASSISTANT_MESSAGE_TYPE? "message-container": "message-container error"}>
                <div className="message assistant-message-style">
                  {message.content}
                </div>
                <div
                  className="avatar"
                  style={{ backgroundImage: `url('${avatarPath}')` }}
                ></div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="no-message-container">No Messages</div>
      )}

      <audio
        ref={audio}
        src="https://assets.mixkit.co/active_storage/sfx/2358/2358-preview.mp3"
      ></audio>
      
      <audio
        ref={audioToggle}
        src="https://assets.mixkit.co/active_storage/sfx/2925/2925-preview.mp3"
      ></audio>
      <div ref={messagesEndRef} />

      { loading && !hide ? (
        <div className="loading-icon">
          <img src="./assets/loading.svg" width="70" alt="" />
        </div>
      ) : null}
    </section>
  );
}

export default MessagePanel;
