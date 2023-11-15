import React from "react";

//all of our JSX converts to react createemelent calls so we need to import React

const Option = (props) => {
  return (
    <div>
      {props.option}
      <button
        className="button button--link"
        onClick={(e) => {
          props.handleDeleteOption(props.option);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Option;
