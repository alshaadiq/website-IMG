import React from "react";
import style from "./style.module.scss";

const internalEvent = () => {
  const { container, containerSection, box1, box2 } = style;

  return (
    <>
      <div className={container}>
        <div className={containerSection}>
          <div>
            <h1>Internal Events in IMG-ITB</h1>
          </div>
          <div>
            <div className={box1}>asdasdasd</div>
            <div className={box2}></div>
          </div>
          <div>
            <h1>Our Internal Event Dates</h1>
            <button>click here</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default internalEvent;
