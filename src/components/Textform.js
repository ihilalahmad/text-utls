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
        <h2 className={`text-${props.mode == "light" ? "dark" : "light"}`}>
          {props.heading}
        </h2>
        <div className="mb-3">
          <textarea
            className="form-control mt-3"
            value={text}
            id="myTextBox"
            rows="8"
            onChange={onTextChange}
            style={{
              backgroundColor: props.mode == "light" ? "red" : "green",
            }}
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
        <h2 className={`text-${props.mode == "light" ? "dark" : "light"}`}>
          Your text summary:
        </h2>
        <p className={`text-${props.mode == "light" ? "dark" : "light"}`}>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p className={`text-${props.mode == "light" ? "dark" : "light"}`}>
          {0.008 * text.split(" ").length} minutes read
        </p>
        <h2 className={`text-${props.mode == "light" ? "dark" : "light"}`}>
          Preview
        </h2>
        <p className={`text-${props.mode == "light" ? "dark" : "light"}`}>
          {text}
        </p>
      </div>
    </>
  );
}
