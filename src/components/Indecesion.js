import React from "react";

import AddOption from "./AddOption.js";
import Options from "./Options.js";
import Header from "./Header.js";
import Action from "./Action.js";
import OptionModal from "./OptionModal.js";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOptionSingular = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };

  handlePick = () => {
    const randomElement = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomElement];
    this.setState(() => ({
      selectedOption: option,
    }));
  };

  handleCloseModal = () => {
    this.setState(() => ({
      selectedOption: undefined,
    }));
  };
  handleAddOption = (option) => {
    //not using push since we dont want to directly manipulate the this.state.object (prevState)
    //concat method is going to allow to merge prevstate array with smt new array without affecting prevState. returns new array

    //add conditional logic
    //check if there is an empty string passing in
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return " this option already exists";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
      //Do nothing at all
    }
  }
  componentDidUpdate(prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  render() {
    const subtitle = "Put your life in the hand of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOptionSingular}
          />
          <AddOption handleAddOption={this.handleAddOption} />
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};
