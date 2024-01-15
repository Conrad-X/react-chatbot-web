import { useState } from "react";
import "./App.css";
import ChatPanel from "./components/ChatPanel/ChatPanel";

function App() {
  let [hide, setHide] = useState(true);

  const minimize = (flag) => {
    setHide(flag)
  }

  return (
    <section className="chat-container">
      Host Application
      <div className={ hide? "chat-panel hidden": "chat-panel"}>
        <ChatPanel minimize={(flag) => minimize(flag)} />
      </div>
    </section>
  );
}

export default App;
