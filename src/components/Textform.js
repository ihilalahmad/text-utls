import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter text here");
  //   setText("Hilal ahmad is MERN Stack developer");

  const onHandleUpClick = () => {
    setText("You clicked on convert to uppercase");
  };

  const onTextChange = (event) => {
    console.log("Text changing....");
    setText(event.target.value);
  };

  return (
    <div>
      <div className="mb-3">
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          value={text}
          id="myTextBox"
          rows="3"
          onChange={onTextChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={onHandleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
