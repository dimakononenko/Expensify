import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/components/layouts.scss'


class Counter extends React.Component {
  state = {
    count: 0,
    totalCount: 3454
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
      totalCount: this.state.totalCount + 1
    });
  }

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
        totalCount: this.state.totalCount - 1
      })}
  }

  render() {
    return (
      <div>
        <div className="ProgressBar">
          <div className="GreenBar">
            <p>{this.state.totalCount}</p>
          </div>
          <div className="RightSide">
            <button className="ButtonMinus" onClick={this.decrement}>-</button>
            <p>{this.state.count}</p>
            <button className="ButtonPlus" onClick={this.increment}>+</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter;


ReactDOM.render(<Counter/>, document.getElementById('app'));