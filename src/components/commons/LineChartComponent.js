import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

class LineChartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salesByMonth: []
        };
    }
    componentWillReceiveProps = nextProps => {
        const { salesByMonth } = nextProps;
        if (salesByMonth) this.setState({ salesByMonth });
    };
    render() {
        const { salesByMonth } = this.state;
        const months = [
            "Jan",
            "Fév",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juil",
            "Août",
            "Sept",
            "Oct",
            "Nov",
            "Déc"
        ];
        const data = [
            { name: "Jan", uv: 0 },
            { name: "Fév", uv: 0 },
            { name: "Mars", uv: 0 },
            { name: "Avril", uv: 0 },
            { name: "Mai", uv: 0 },
            { name: "Juin", uv: 0 },
            { name: "Juil", uv: 0 },
            { name: "Août", uv: 0 },
            { name: "Sept", uv: 0 },
            { name: "Oct", uv: 0 },
            { name: "Nov", uv: 0 },
            { name: "Déc", uv: 0 }
        ];
        if (salesByMonth.length > 0) {
            data.map((dataToCheck, index) => {
                console.log(dataToCheck);
                salesByMonth.map(sale => {
                    if (dataToCheck.name === months[parseInt(sale.month) - 1]) {
                        dataToCheck.uv = sale.ca;
                    }
                });
            });
        }
        return (
            <LineChart
                width={600}
                height={300}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <XAxis interval={0} dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        );
    }
}

LineChartComponent.propTypes = {
    salesByMonth: PropTypes.object
};

export default LineChartComponent;
