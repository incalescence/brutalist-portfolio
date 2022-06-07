import React from "react";
import TypeAnimation from "react-type-animation";

const Typing = () => {
  return (
    <div className="largetext">
      <TypeAnimation
        className="type"
        // style={{ display: "flex", content: "center" }}
        wrapper="h1"
        cursor="true"
        sequence={[
          "seeking to ",
          800,
          "spark joy ",
          800,
          "through ",
          800,
          "immersive ",
          800,
          "experiences ",
          1000,
        ]}
      />
    </div>
  );
};

export default Typing;
