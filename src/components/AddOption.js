import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.options.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error: error }));

    if (!error) {
      console.log("here");
      e.target.elements.options.value = "";
    }
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.onFormSubmit}>
          <input className="add-option__input" type="text" name="options" />
          <button className="button">Add options</button>
        </form>
      </div>
    );
  }
}
