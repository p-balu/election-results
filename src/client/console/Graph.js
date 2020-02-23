import React, { Component } from 'react'
import PieChart from 'react-minimal-pie-chart';
class Graph extends Component {

    render() {
        return (
            <div className="graphValue">
                <h3 style={{ textAlign: 'center', fontFamily: "Verdana" }}>Partywise Vote Share</h3>

                <div className="graph">
                    <div className="value">
                        <p className="textt"><span style={{ backgroundColor: '#E38627' }} className="border"></span>AAP (53.57%)</p>
                        <p className="textt"><span style={{ backgroundColor: '#C13C37' }} className="border"></span>BJP (38.51%)</p>
                        <p className="textt"><span style={{ backgroundColor: '#a5fa5d' }} className="border"></span>INC (4.26%)</p>
                        <p className="textt"><span style={{ backgroundColor: '#feda36' }} className="border"></span>BSP (0.71%)</p>
                        <p className="textt"><span style={{ backgroundColor: '#5dfa9d' }} className="border"></span>CPI (0.02%)</p>
                        <p className="textt"><span style={{ backgroundColor: '#5d96fa' }} className="border"></span>CPIM (0.01%)</p>
                        <p className="textt"><span style={{ backgroundColor: '#e95dfa' }} className="border"></span>JD(U) (0.91%)</p>
                        <p className="textt"><span style={{ backgroundColor: '#f14099' }} className="border"></span>OTHER (1.53%)</p>
                        <p className="textt"><span style={{ backgroundColor: '#6A2135' }} className="border"></span>NOTA (0.46%)</p>
                    </div>
                    <PieChart className="piechart"
                        data={[
                            { title: 'AAP (53.57%)', value: 53.57, color: '#E38627' },
                            { title: 'BJP (38.51%)', value: 38.51, color: '#C13C37' },
                            { title: 'INC (4.26%', value: 4.26, color: '#a5fa5d' },
                            { title: 'BSP (0.71%)', value: 0.71, color: '#feda36' },
                            { title: 'CPI (0.02%)', value: 0.02, color: '#5dfa9d' },
                            { title: 'CPIM (0.01%)', value: 0.01, color: '#5d96fa' },
                            { title: 'JD(U) (0.91%)', value: 0.91, color: '#e95dfa' },
                            { title: 'OTHER (1.53%)', value: 1.53, color: '#f14099' },
                            { title: 'NOTA  (0.46%)', value: 0.46, color: '#6A2135' },
                        ]}
                    />
                </div>
            </div>
        )
    }
}
export default Graph
