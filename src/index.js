import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = document.getElementById("root");
const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(<App />, root);
// const render = Component => {
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     document.getElementById("root")
//   );
// };

// render(App);
// // webpack Hot Module Replacement API
// if (module.hot) {
//   // keep in mind - here you are configuring HMR to accept CHILDREN MODULE
//   // while `hot` would configure HMR for the CURRENT module
//   module.hot.accept("./App", () => {
//     // if you are using harmony modules ({modules:false})
//     render(App);
//     // in all other cases - re-require App manually
//     render(require("./App"));
//   });
// }
