import React from "react";
import Option from "./Option.js";

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove all options</button>
      {props.options.length === 0 && <p>PLease add option to get started!</p>}
      {props.options.map((option, index) => (
        <Option
          key={index}
          option={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

export default Options;
