//

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handledToggleVisibility = this.handledToggleVisibility.bind(this);
    this.state = {
      isVisible: false,
    };
  }

  handledToggleVisibility() {
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handledToggleVisibility}>
          {this.state.isVisible ? "Hide details" : "Show details"}
        </button>
        {this.state.isVisible && <p>This is some random text</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// const appRoot = document.getElementById("app");

// let isVisible = false;
// const toggleVisibility = () => {
//   isVisible = !isVisible;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {isVisible ? "Hide details" : "Show details"}
//       </button>
//       {isVisible && <p>This is some random text</p>}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// render();
