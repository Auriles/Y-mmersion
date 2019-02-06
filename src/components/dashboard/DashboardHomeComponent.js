import React, { Component } from "react";
import { connect } from "react-redux";
import RadarChartComponent from "../commons/RadarChartComponent";
import TwoLevelPieChartComponent from "../commons/TwoLevelPieChartComponent";
import TableOfSellsComponent from "../commons/TableOfSellsComponent";
import { getAllSales } from "../../redux/actions/sales";
import LineChartComponent from "../commons/LineChartComponent";
class DashboardHomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sales: []
        };
    }
    componentWillReceiveProps(nextProps) {
        const { sales } = nextProps.sales;
        if (sales) this.setState({ sales });
    }
    componentDidMount = () => {
        this.props.getAllSales();
    };

    render() {
        const { sales } = this.state;
        return (
            <div className="container-dashboard">
                <div className="blur" />
                <div className="flex-row flex-space-between flex-center dashboard-graph">
                    <div className="line-chart-container">
                        <div className="line-chart-component">
                            <h1>Evolution des ventes par mois</h1>
                            <LineChartComponent salesByMonth={sales.monthly} />
                        </div>
                    </div>
                    <div className="pie-chart-container">
                        <div className="pie-chart-component">
                            <h1>
                                Répartition des ventes par secteur d'activité et
                                catégorie de produits
                            </h1>
                            <TwoLevelPieChartComponent />
                        </div>
                    </div>
                </div>
                <div className="previous-sells">
                    <h1>Ventes récentes</h1>
                    <TableOfSellsComponent
                        headerValues={[
                            "#",
                            "Nom du produit",
                            "N° de facture",
                            "Client",
                            "Prix TTC"
                        ]}
                        values={[
                            {
                                prod: "Mon produit 1",
                                fac: "0123456",
                                client: "TEST",
                                ttc: 1030
                            },
                            {
                                prod: "Mon produit 2",
                                fac: "0123456",
                                client: "TEST 2",
                                ttc: 1030
                            },
                            {
                                prod: "Mon produit 3",
                                fac: "0123456",
                                client: "TEST 3",
                                ttc: 1030
                            }
                        ]}
                        valuesToShow={["prod", "fac", "client", "ttc"]}
                        rowClickEvent={() => console.log("OK")}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sales: state.sales
    };
};
export default connect(
    mapStateToProps,
    { getAllSales }
)(DashboardHomeComponent);
