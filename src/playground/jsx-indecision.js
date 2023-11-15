console.log("app.js is running");

const app = {
  title: "Speed",
  subtitle: "run",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.options.value;

  if (option) {
    app.options.push(option);
    e.target.elements.options.value = "";
    renderFormApp();
  }
};

const removeAll = () => {
  app.options = [];
  renderFormApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const numbers = [55, 56, 57];

const renderFormApp = () => {
  const template = (
    <div>
      <h1>{app.title} App</h1>
      {app.subtitle && <p> {app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={removeAll}>Remove all</button>
      {/* {numbers.map((number) => {
        return <p key={number}>Number: {number}</p>;
      })} */}
      <ol>
        {app.options.map((option, index) => {
          return <li key={index}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="options" />
        <button>Add options</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};
const appRoot = document.getElementById("app");

renderFormApp();
