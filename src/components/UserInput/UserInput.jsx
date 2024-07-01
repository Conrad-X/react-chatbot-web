import React, { useState } from 'react';
import "./UserInput.css";

function UserInput({ sendMessage }) {
  const ENTER_KEY_ASCII = 13;
  let [message, setMessage] = useState("")

  const onKeyUp = (event) => {
    if (event.which === ENTER_KEY_ASCII) {
      sendMessage(message);
      setMessage("")
    }
  };

  return (
    <section className="user-input-container">
      <input
        className="input-textfield"
        value={message}
        placeholder="What's on your mind?"
        type="text"
        onKeyUp={(event) => onKeyUp(event)}
        onChange={(event) => { setMessage(event.target.value) }}
      />

      <button className="button" onClick={() => sendMessage(message)}>
        <span className="material-symbols-outlined"> send </span>
      </button>
    </section>
  );
}

export default UserInput;
