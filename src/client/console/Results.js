import React, { Component } from 'react'

class Results extends Component {

    render() {
        return (
            <div className="container">
                <div className="container1">
                    <span >{this.props.state}</span>
                    <span >Results Status</span>
                </div>
                <div className="container2">
                    <span >Status known for Assembly Elections</span>
                </div>
                <table id="students1">

                    <thead >
                        <tr >
                            <th>Party</th>
                            <th>Won</th>
                            <th>Leading</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            this.props.stateData.map((state, id) => (
                                <tr key={state.party}>
                                    <td>{state.party}</td>
                                    <td>{state.won}</td>
                                    <td>{state.leading}</td>
                                    <td>{state.total}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Results
