import React, { useState, useEffect } from "react";
import { SketchPicker } from "react-color";

const Color = () => {
  const [colorChange, setcolorChange] = useState("#fff");

  useEffect(() => {
    console.log(colorChange);
  }, [colorChange]);

  const changingColor = (e: any) => {
    const enteredValue = e.target.value;
    if (enteredValue.length >= 6) {
      setcolorChange("#" + enteredValue);
    } else {
      setcolorChange("");
    }
  };

  return (
    <div>
      <SketchPicker
        color={colorChange}
        onChangeComplete={(colorChange) => {
          setcolorChange(colorChange.hex);
        }}
      />
      <div
        style={{
          backgroundColor: colorChange,
          height: "200px",
          width: "200px",
          position: "relative",
          left: "600px",
          border: "1px solid black",
        }}
      />
      <input type="text" onChange={(e) => changingColor(e)} />
    </div>
  );
};

export default Color;
