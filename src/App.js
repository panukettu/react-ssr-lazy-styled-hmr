import React from "react";
import { hot } from "react-hot-loader";
import Loadable from "react-loadable";

import Notlazy from "./components/NotLazyComponent";
import Page from "./components/Page";

const Component = Loadable({
  loader: () => import("./components/Component"),
  loading: () => <div>Loading</div>
});

const AnotherComponent = Loadable({
  loader: () => import("./components/AnotherComponent"),
  loading: () => <div>Loading</div>
});

class App extends React.Component {
  state = {
    counter: 1,
    showLazyComponent: false,
    showAnotherLazyComponent: false,
    showNormalComponent: false
  };

  decrement = () => {
    this.setState(state => ({ counter: Math.max(0, state.counter - 1) }));
  };

  increment = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  showLazyComponent = () => {
    this.setState(state => ({ showLazyComponent: !state.showLazyComponent }));
  };

  showAnotherLazyComponent = () => {
    this.setState(state => ({
      showAnotherLazyComponent: !state.showAnotherLazyComponent
    }));
  };

  showNormalComponent = () => {
    this.setState(state => ({
      showNormalComponent: !state.showNormalComponent
    }));
  };

  render() {
    const {
      counter,
      showLazyComponent,
      showAnotherLazyComponent,
      showNormalComponent
    } = this.state;
    return (
      <div>
        <button onClick={() => this.decrement()}>-</button>
        {counter}
        <button onClick={() => this.increment()}>+</button>
        <button onClick={() => this.showLazyComponent()}>Show component</button>
        <button onClick={() => this.showAnotherLazyComponent()}>
          Show another
        </button>
        <button onClick={() => this.showNormalComponent()}>
          Show not lazy
        </button>
        {showLazyComponent && <Component />}
        {showAnotherLazyComponent && <AnotherComponent />}
        {showNormalComponent && <Notlazy />}
        <Page />
      </div>
    );
  }
}

export default hot(module)(App);
