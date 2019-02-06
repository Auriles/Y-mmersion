import React, { Component } from "react";
import Modal from "../commons/Modal";
import SaleInfosComponent from "./SaleInfosComponent";

class SaleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleDialog: false
        };
        this.toggleConfirmDialog = this.toggleConfirmDialog.bind(this);
    }

    toggleConfirmDialog = e => {
        e.preventDefault();
        this.setState({ toggleDialog: !this.state.toggleDialog });
    };
    render() {
        const { sale } = this.props;
        return (
            <div className="user-element flex-row flex-center flex-space-between">
                {this.state.toggleDialog ? (
                    <Modal
                        title={sale.name}
                        closeAction={this.toggleConfirmDialog}
                    >
                        <SaleInfosComponent sale={sale} />
                    </Modal>
                ) : null}
                <button
                    className="view-sale-infos"
                    onClick={this.toggleConfirmDialog}
                >
                    Informations
                </button>
                <div className="user-infos grow flex-row flex-center">
                    <span>{sale.name}</span>
                    <span>{sale.receipeNumber}</span>
                    <span>{sale.client}</span>
                    <span>{sale.totalTTC} €</span>
                </div>
            </div>
        );
    }
}
export default SaleComponent;
