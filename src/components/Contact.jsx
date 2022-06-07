import React from "react";
import { ReactPainter } from "react-painter";
import { randomhex } from "../App.jsx";

const Contact = ({ randomhex }) => {
  return (
    <div>
      <ReactPainter
        width={500}
        height={300}
        initialColor={randomhex}
        initialLineWidth="8"
        onSave={(image) => console.log(image)}
        render={({ triggerSave, canvas }) => (
          <div>
            <div className="canvas">
              <p className="drawprompt">
                They say a picture speaks a thousand words right? Why don't you
                share your thoughts with me. I'll keep it a secret shhhh..
              </p>
              {canvas}
            </div>
            <button onClick={triggerSave}>Send</button>
          </div>
        )}
      />

      <form>
        <input className="textinput" type="text"></input>
        <input type="checkbox"></input>
      </form>
    </div>
  );
};

export default Contact;
