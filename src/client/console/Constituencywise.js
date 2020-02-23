import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Results1 from './Results1'
class Constituencywise extends Component {
    state = {
        state: "",
        constituencyData: [],
        stateData: [],
        constituency: '',
        submitted: false
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        console.log(value)
        fetch(`http://localhost:4000/trends?state=${value}`, {
            method: 'POST',
        })
            .then(res => res.json())
            .then(res => {
                if (res.code === 200) {
                    console.log("state in")
                    this.setState({
                        stateData: res.data
                    })
                    console.log(this.state.stateData)
                }
                else {
                    console.log("state Unsuccessfull")
                    this.setState({
                        errors: "Error from server End"
                    })
                }
            })
    }
    handleChange1 = (event) => {
        const target = event.target;
        const value1 = target.value;
        const name1 = target.name;
        this.setState({
            [name1]: value1,
            submitted: true
        });
        fetch(`http://localhost:4000/election?state=${this.state.state}&constituency=${value1}`, {
            method: 'POST',
        })
            .then(res => res.json())
            .then(res => {
                if (res.code === 200) {
                    console.log("constituency in")
                    this.setState({
                        constituencyData: res.data
                    })
                    console.log(this.state.constituencyData)
                }
                else {
                    console.log("constituency Unsuccessfull")
                    this.setState({
                        errors: "Error from server End"
                    })
                }
            })
    }
    render() {
        const { submitted } = this.state
        return (
            <div className="App">
                <div className="header">
                    <Link exact to="/" className="link"><b>GET.<span className="headerText">RESULTS</span></b></Link>
                    <div className="navLinks">
                        <NavLink to="/home" className="navLink" activeStyle={{ borderBottom: "1px solid white", fontWeight: "bolder", color: 'white' }}>Home
                        <ul className="sub-menu">
                                <li className="Link1"> <Link exact to="/home/party-wise" style={{ textDecoration: 'none', color: "whitesmoke", fontWeight: "lighter" }}>Party Wise</Link></li>
                                <li className="Link1">  <Link to="/home/constituency-wise" style={{ textDecoration: 'none', color: "whitesmoke", fontWeight: "lighter" }}>Constituencywise -All Candidates</Link></li>
                                <li className="Link1"> <Link to="/home/constituency-wise-trends" style={{ textDecoration: 'none', color: "whitesmoke", fontWeight: "lighter" }}>Constituencywise Trends</Link></li>
                            </ul></NavLink>

                        <NavLink to="/admin" className="navLink" activeStyle={{ borderBottom: "1px solid white", fontWeight: "bolder", color: 'white' }}>Admin</NavLink>
                    </div>
                </div>
                <h2 style={{ textAlign: 'center' }}>GENERAL ELECTIONS TO VIDHAN SABHA TRENDS AND RESULTS</h2>
                <div className="subContainer1">
                    <h3 className="text">Constituencywise-All Candidates</h3>
                    <form className="Form_Fields">
                        <label htmlFor="select" className="Form_Label" name="state" onChange={this.handleChange}>Select State</label>
                        <select className="Input_Field" name="state"
                            value={this.state.state} onChange={this.handleChange} required >
                            <option value=''>Select State</option>
                            <option value="NCT OF Delhi">NCT OF Delhi</option>
                        </select>
                        <label htmlFor="select" className="Form_Label" name="constituency" onChange={this.handleChange}>Select Constituency</label>
                        <select className="Input_Field" name="constituency"
                            value={this.state.constituency} onChange={this.handleChange1} required>
                            {
                                this.state.stateData.map((state, id) => (
                                    <option value={state.constituency} key={state.constituency}>{state.constituency}</option>
                                ))}

                        </select>
                    </form>
                </div>
                {submitted === false ? '' :
                    <div>
                        <Results1
                            constituencyData={this.state.constituencyData}
                            state={this.state.state}
                            constituency={this.state.constituency} />
                        <div className="footerText">
                            <b style={{ fontSize: "20px", fontFamily: "Verdana" }}>Disclaimer</b>
                            <p className="diclaimerText">Data is extracted from ECI and data in the ECI is filled by the Returning Officers from their respective Counting Centers</p>
                        </div>
                    </div>
                }

            </div>
        )
    }
}
export default Constituencywise