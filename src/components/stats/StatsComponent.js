import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllSales } from "../../redux/actions/sales";
class StatsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sales: {}
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.sales.sales)
            this.setState({ sales: nextProps.sales.sales });
    }
    componentDidMount() {
        this.props.getAllSales();
    }
    render() {
        return (
            <div>
                <h1>Stats</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    sales: state.sales
});
export default connect(
    mapStateToProps,
    { getAllSales }
)(StatsComponent);
