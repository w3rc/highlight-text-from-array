import React, { useEffect } from "react";
import "./styles.css";

export default function App() {
  useEffect(() => {
    const arr = ["editing", "happen", "can", "magic"];
    const data = document.getElementById("replace");

    arr.forEach((item) => {
      let text = data.innerHTML;
      if (text.substring(item)) {
        let index = text.indexOf(item);
        data.innerHTML = highlight(text, item, index);
        if (index) {
          console.log("caught one " + item);
          text = text.substr(index + item.length);
          index = text.indexOf(item);
          highlight(text, item, index);
        }
      }
    });
  });

  const highlight = (content, item, index) => {
    console.log("HIGHLIGHT: " + content);
    console.log(index);
    return (
      content.substr(0, index) +
      " <mark>" +
      item +
      "</mark> " +
      content.substr(index + item.length)
    );
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2 id="replace">
        Start editing to some magic happen!
        <p>Nothing can stop these magic things to happen</p>
      </h2>
    </div>
  );
}
