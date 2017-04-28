import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
];
class mfChart extends Component {
    render() {
        let data = this.props.schools;
        if(!data){
            return <p>Loading...</p>
        }
        data = data[0];
        let male = data.UGDS_MEN * 100;
        male = Math.round(parseFloat(male));
        let female = data.UGDS_WOMEN * 100;
        female = Math.round(parseFloat(female));
        let chart = [
            {name: 'ratio of male to female', m: male, f: female}
        ];
        return (
            <div>
                <h3 className="titleMenWomanChart">Percentage of Men To Women </h3>
                <BarChart className="mfChart"  width={500} height={300} data={chart}
                          margin={{top: 5, right: 25, left: 0, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid />
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="m" fill="blue"/>
                    <Bar dataKey="f" fill="pink"/>
                </BarChart>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        schools: state.schools.single,
    };
}

export default connect(mapStateToProps)(mfChart);