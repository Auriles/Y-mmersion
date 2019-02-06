import React, { Component } from "react";
import PropTypes from "prop-types";
class TableOfSellsComponent extends Component {
    constructor(props) {
        super(props);
        this.getWidthCell = this.getWidthCell.bind(this);
    }
    getWidthCell() {
        return 100 / (this.props.valuesToShow.length + 1) + "%";
    }

    render() {
        const header = this.props.headerValues.map((headerValue, index) => (
            <div
                key={index}
                className="array-cell flex-row flex-center"
                style={{ width: this.getWidthCell() }}
            >
                <span>{headerValue}</span>
            </div>
        ));
        const arrayContent = this.props.values.map((arrayValue, index) => (
            <div
                key={index}
                className="array-row flex-row flex-space-between flex-center"
                onClick={() => this.props.rowClickEvent(index)}
            >
                <div
                    className="array-cell flex-row flex-center"
                    style={{ width: this.getWidthCell() }}
                >
                    <span>{index + 1}</span>
                </div>
                {this.props.valuesToShow.map((key, i) => (
                    <div
                        key={i}
                        className="array-cell flex-row flex-center"
                        style={{ width: this.getWidthCell() }}
                    >
                        <span>{arrayValue[key]}</span>
                    </div>
                ))}
            </div>
        ));
        return (
            <div className="table table-hover table-dark flex-column">
                <div className="array-row flex-row flex-space-between flex-center">
                    {header}
                </div>
                {arrayContent}
            </div>
        );
    }
}
TableOfSellsComponent.propTypes = {
    headerValues: PropTypes.array.isRequired,
    values: PropTypes.array.isRequired,
    valuesToShow: PropTypes.array.isRequired,
    rowClickEvent: PropTypes.func.isRequired
};
export default TableOfSellsComponent;
