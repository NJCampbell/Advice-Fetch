
import { StrictMode } from "react";

import { createRoot } from "react-dom/client";


import App from "./app";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


// //import react into the bundle
// import React from "react";
import ReactDOM from "react-dom";

// // include your styles into the webpack bundle
// import "../styles/index.css";

// //import your own components
// import Home from "./component/home.jsx";

// //render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));
