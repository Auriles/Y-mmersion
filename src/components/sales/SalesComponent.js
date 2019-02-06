import React, { Component } from "react";
import { connect } from "react-redux";
import { getMySales } from "../../redux/actions/sales";
import SaleComponent from "./SaleComponent";
import SaleInfosComponent from "./SaleInfosComponent";
import TableOfSellsComponent from "../commons/TableOfSellsComponent";
import Modal from "../commons/Modal";
class SalesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sales: [],
            toggleDialog: false,
            saleIndex: 0
        };
        this.toggleConfirmDialog = this.toggleConfirmDialog.bind(this);
        this.showSaleInfos = this.showSaleInfos.bind(this);
    }
    toggleConfirmDialog = index => {
        this.setState({
            toggleDialog: !this.state.toggleDialog,
            saleIndex: index
        });
    };
    showSaleInfos() {
        const { sales, saleIndex } = this.state;
        let sale = sales[saleIndex];
        return (
            <Modal title={sale.name} closeAction={this.toggleConfirmDialog}>
                <SaleInfosComponent sale={sale} />
            </Modal>
        );
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.sales.sales.data)
            this.setState({ sales: nextProps.sales.sales.data });
    }
    componentDidMount() {
        this.props.getMySales(this.props.user._id);
    }

    render() {
        const { sales, toggleDialog } = this.state;
        return (
            <div className="sales-list flex-column flex-center">
                {toggleDialog && this.showSaleInfos()}
                <TableOfSellsComponent
                    headerValues={[
                        "#",
                        "Nom du produit",
                        "N° de facture",
                        "Client",
                        "Prix TTC"
                    ]}
                    values={sales}
                    valuesToShow={[
                        "name",
                        "receipeNumber",
                        "client",
                        "totalTTC"
                    ]}
                    rowClickEvent={this.toggleConfirmDialog}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    sales: state.sales,
    user: state.auth.user
});
export default connect(
    mapStateToProps,
    { getMySales }
)(SalesComponent);
