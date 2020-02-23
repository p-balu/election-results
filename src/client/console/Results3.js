/* eslint-disable react/style-prop-object */
import React, { Component } from 'react'
function searchingFor(search) {
    return function (x) {
        return x.constituency.toLowerCase().includes(search.toLowerCase()) || !search
    }
}
class Results3 extends Component {
    state = {
        search: "",
        searchData: []
    }
    handleChange = (event) => {
        this.setState({ search: event.target.value });
        fetch(`http://localhost:4000/trends?constituency=${this.state.search}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                if (res.code === 200) {
                    console.log("state in")
                    this.setState({
                        searchData: res.data
                    })
                    console.log(this.state.searchData)
                }
                else {
                    console.log("state Unsuccessfull")
                    this.setState({
                        errors: "Error from server End"
                    })
                }
            })
    }
    render() {
        const { search } = this.state
        return (
            <div className="tableContainer" >
                <div className="container12">
                    <span >{this.props.state}</span>
                    <span>Result Status</span>
                </div>
                <input type="text" className="searchField" placeholder="Search by Constituency" value={this.state.search} onChange={this.handleChange} name="search" />

                <tr> <td colSpan="8" align="center" width="74%">
                    <b><div style={{ fontSize: "14px" }} className="divStatus"> Status Known For Assembly Elections</div></b>
                </td>
                    <td colSpan="4" align="center"  >
                        <b><div style={{ fontSize: "14px" }} className="divStatus">
                            ----------------------Previous Assembly Election Result----------------------</div></b>
                    </td>
                </tr>
                <table id="students">
                    <thead >
                        <tr >
                            <th>Constituency</th>
                            <th>Const. No.</th>
                            <th>Leading Candidate</th>
                            <th>Leading Party</th>
                            <th>Trailing Candidate</th>
                            <th>Trailing Party</th>
                            <th>Margin</th>
                            <th>Status</th>
                            <th >Winning Candidate</th>
                            <th>Winning Party</th>
                            <th>Margin</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            this.props.stateData.filter(searchingFor(search)).map((state, id) => (
                                <tr key={state.constituency}>
                                    <td>{state.constituency}</td>
                                    <td>{state.const_no}</td>
                                    <td>{state.leading_candidate}</td>
                                    <td>{state.leading_party}</td>
                                    <td>{state.trailing_candidate}</td>
                                    <td>{state.trailing_party}</td>
                                    <td>{state.margin}</td>
                                    <td>{state.status}</td>
                                    <td style={{ backgroundColor: "lightgray" }}>{state.winning_candidate}</td>
                                    <td style={{ backgroundColor: "lightgray" }}>{state.winning_party}</td>
                                    <td style={{ backgroundColor: "lightgray" }}>{state.margin1}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div >
        )
    }
}
export default Results3
