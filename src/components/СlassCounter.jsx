import React, { Component } from 'react'

export default class СlassCounet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.countStonks = this.countStonks.bind(this)
        this.countDebaff = this.countDebaff.bind(this)
    }

    countStonks() {
        this.setState({count: this.state.count + 1})
    }

    countDebaff() {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1>Значение : {this.state.count}</h1>
                <button onClick={this.countStonks}>Тык и он вырос на 1</button>
                <button onClick={this.countDebaff}>Тык и он уменьшился на 1</button>
            </div>
        )
    }
}
