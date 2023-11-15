/*
  //jsx does not have a built in data binding
  //need to re-render template

  //react uses some virtual dom algorithms in javascrip. so it calcualtes to determine the minimal number of changes that
  //need to be made to correctly render the new application
*/

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    const count = parseInt(localStorage.getItem("count"));

    if (count) {
      this.setState(() => ({ count: count }));
    }
  }
  componentDidUpdate(prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
    console.log("handleAddOne");
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
    console.log("handleMinusOne");
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
    console.log("handleReset");
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0,
};

ReactDOM.render(<Counter />, document.getElementById("app"));
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count} </h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
