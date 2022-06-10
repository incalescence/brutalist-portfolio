import React from "react";
import { ReactPainter } from "react-painter";
import { randomhex } from "../App.jsx";

const Contact = ({ randomhex }) => {
  return (
    <div>
      <p className="drawprompt">
        They say a picture speaks a thousand words right? Why don't you leave me
        a visual message!
      </p>
      <ReactPainter
        height={300}
        width={800}
        initialColor="white"
        initialLineWidth="2"
        onSave={(image) => console.log(image)}
        render={({ triggerSave, canvas }) => (
          <div>
            <div className="canvas">{canvas}</div>
            <button onClick={triggerSave}>Send</button>
          </div>
        )}
      />
      {/* 
      <form>
        <input className="textinput" type="text"></input>
        <input type="checkbox"></input>
      </form> */}
    </div>
  );
};

export default Contact;
