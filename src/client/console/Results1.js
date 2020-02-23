import React, { Component } from 'react'

class Results1 extends Component {

    render() {
        return (
            <div className="container3">
                <div className="container1">
                    <span >{this.props.state}-{this.props.constituency}</span>

                </div>
                <div className="container2">
                    <span >Results Status</span>
                </div>
                <table id="students1">

                    <thead >
                        <tr >
                            <th>O.S.N</th>
                            <th>Candidate</th>
                            <th>Party</th>
                            <th>EVM Votes</th>
                            <th>Postal Votes</th>
                            <th>Total Votes</th>
                            <th>% of Votes</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            this.props.constituencyData.map((state, id) => (
                                <tr key={state.osn}>
                                    <td>{state.osn}</td>
                                    <td>{state.candidate}</td>
                                    <td>{state.party}</td>
                                    <td>{state.EVMvotes}</td>
                                    <td>{state.postalvotes}</td>
                                    <td>{state.totalvotes}</td>
                                    <td>{state.percentageofvotes}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Results1
