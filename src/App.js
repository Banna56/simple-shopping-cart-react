import React from "react";
import "./styles.css";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    // define a new array called counters that filter in every elements from counters array of state excepts counterId.

    const counters = this.state.counters.filter((c) => c.id !== counterId);

    // update the counters property of state object with new filtered 'counters' array;
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters: counters
    });
  };

  render() {
    return (
      <div>
        <NavBar totalCounters={this.state.counters.filter(c=> c.value > 0).length}  />
        <div className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </div>
      </div>
    );
  }
}
export default App;
