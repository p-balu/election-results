import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
class Admin extends Component {
    state = {
        csv: ''
    }
    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({ [name]: event.target.files[0] })
        console.log(event.target.files[0])
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Working")
        console.log(this.state.csv)
    }

    render() {
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
                <h2 style={{ textAlign: 'center' }}>GENERAL ELECTIONS TO VIDHAN SABHA TRENDS AND RESULTS "CSV_FILE" UPLOAD</h2>
                <form onSubmit={this.handleSubmit} className="fileUpload">
                    <h1>Upload CSV file</h1>
                    <input type="file" name="csv" accept="csv" onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default Admin
