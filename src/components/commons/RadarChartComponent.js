import React, { Component } from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    Legend,
    PolarAngleAxis,
    PolarRadiusAxis
} from "recharts";
import PropTypes from "prop-types";
class RadarChartComponent extends Component {
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
        // console.log(this.props.salesByMonth);
        const { salesByMonth } = this.state;
        const months = [
            "Janvier",
            "Février",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "Août",
            "Septembre",
            "Octobre",
            "Novembre",
            "Décembre"
        ];
        const data = [
            { subject: "Janvier", A: 0 },
            { subject: "Février", A: 0 },
            { subject: "Mars", A: 0 },
            { subject: "Avril", A: 0 },
            { subject: "Mai", A: 0 },
            { subject: "Juin", A: 0 },
            { subject: "Juillet", A: 0 },
            { subject: "Août", A: 0 },
            { subject: "Septembre", A: 0 },
            { subject: "Octobre", A: 0 },
            { subject: "Novembre", A: 0 },
            { subject: "Décembre", A: 0 }
        ];

        const maxCA = 0;
        if (salesByMonth.length > 0) {
            data.map((dataToCheck, index) => {
                salesByMonth.map(sale => {
                    if (
                        dataToCheck.subject === months[parseInt(sale.month) - 1]
                    ) {
                        dataToCheck.A = sale.ca;
                    }
                });
            });
        }
        console.log(maxCA);

        return (
            <RadarChart
                cx={300}
                cy={250}
                outerRadius={150}
                width={600}
                height={500}
                data={data}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar
                    name="Mike"
                    dataKey="A"
                    stroke="#2ECC71"
                    fill="#2ECC71"
                    fillOpacity={0.9}
                />
            </RadarChart>
        );
    }
}

RadarChartComponent.propTypes = {
    salesByMonth: PropTypes.array
};
export default RadarChartComponent;
