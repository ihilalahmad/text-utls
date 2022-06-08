import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  //   setText("Hilal ahmad is MERN Stack developer");

  const convertToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const convertToLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const onTextChange = (event) => {
    console.log("Text changing....");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control mt-3"
            value={text}
            id="myTextBox"
            rows="8"
            onChange={onTextChange}
          ></textarea>
        </div>
        <button className="btn btn-primary me-2" onClick={convertToUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary me-2" onClick={convertToLowerCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger me-2" onClick={clearText}>
          Clear text
        </button>
        <button className="btn btn-success me-2" onClick={copyText}>
          Copy text
        </button>
        <button className="btn btn-warning " onClick={removeExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div className="contianer mt-5">
        <h2>Your text summary:</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
