import { useState } from "react";
import "./Header.css"

function Header({ minimizePanel }) {
  let [toggle, setToggle] = useState(false);

  const hide = () => {
    minimizePanel(!toggle)
    setToggle(!toggle)
  };

  return (
    <section className="header-outer-container" onClick={hide}>
      <section className="header-container">
        <img src="./assets/conrad-labs-logo.png" alt="" />
        <div className="heading">Policy Bot</div>
        <div className="beta">BETA</div>
      </section>

      <div className="minimize-container">
        {!toggle ? (
          <span
            id="minimize"
            className="minimize-icon material-symbols-outlined"
          >
            minimize
          </span>
        ) : (
          <span
            id="minimize-add"
            className="add-icon minimize-icon material-symbols-outlined"
          >
            add
          </span>
        )}
      </div>
    </section>
  );
}

export default Header;
