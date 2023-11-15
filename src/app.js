import React from "react";
import { createRoot } from "react-dom/client";
import IndecisionApp from "./components/Indecesion.js";

//use same style for all browsers instead of their default style
import "normalize.css/normalize.css";

import "./styles/styles.scss";
/*
  React components are es6 classes that extends somthing react gives us and has to define render method
  to use these components just need to provide them inside a jsx

  event handler one of the instances when we lose context of 'this'. contructor with bind this

  react state: component state allow our components to manage data. when that data changes that component will auto re-render to 
  reflect those changes. state is an object with key:value pair 
*/

//props are one way stream. can be passed from parents to child
//to solve this, pass functions in as props

// ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

const root = createRoot(document.getElementById("app"));
root.render(<IndecisionApp />);
