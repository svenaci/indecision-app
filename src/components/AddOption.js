import React from "react";

export default class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error: undefined,
    };
  }
  onFormSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.options.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error: error }));

    if (!error) {
      console.log("here");
      e.target.elements.options.value = "";
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="options" />
          <button>Add options</button>
        </form>
      </div>
    );
  }
}
