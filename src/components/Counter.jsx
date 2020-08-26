import React from "react";

class Counter extends React.Component {
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-large m-2"
        >
          Add Product
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-warning btn-large m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
