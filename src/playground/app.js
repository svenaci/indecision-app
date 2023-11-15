/*
  React components are es6 classes that extends somthing react gives us and has to define render method
  to use these components just need to provide them inside a jsx

  event handler one of the instances when we lose context of 'this'. contructor with bind this

  react state: component state allow our components to manage data. when that data changes that component will auto re-render to 
  reflect those changes. state is an object with key:value pair 
*/

//props are one way stream. can be passed from parents to child
//to solve this, pass functions in as props

const obj = {
  name: "vikram",
  getName() {
    return this.name;
  },
};

//event handler one of the instances when we lose context of 'this'
const userName = obj.getName.bind(obj);

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptionSingular =
      this.handleDeleteOptionSingular.bind(this);
    this.state = {
      options: props.options,
    };
  }
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
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOptionSingular(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  }
  handlePick() {
    const randomElement = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomElement];
    alert(option);
  }
  handleAddOption(option) {
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
  }
  render() {
    const subtitle = "Put your life in the hand of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
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
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision",
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

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

const Option = (props) => {
  return (
    <div>
      {props.option}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.option);
        }}
      >
        remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
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

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
