//Counter.js

import React, { Component } from 'react';

class Counter extends Component {

    state = {
        counter: 0,
        fixed: 1,
    }

    handleDecrease = () => {
        this.setState(state => ({
            counter: state.counter + 1
        }))
    }

    handleIncrease = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleDecrease}>+1</button>
                <button onClick={this.handleIncrease}>-1</button>
                <span>{this.state.fixed}</span>
            </div>
        )
    }
}

export default Counter;