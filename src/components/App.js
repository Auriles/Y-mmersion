import React, { Component } from "react";
import { connect } from "react-redux";
import { StripeProvider } from "react-stripe-elements";
import "../css/style.css";
import t from "../utils/locales/Locales";
import HeaderComponent from "./partials/HeaderComponent";
import DescriptionComponent from "./description/DescriptionComponent";
import DetailsComponent from "./description/DetailsComponent";
import FormComponent from "./modules/FormComponent";
import FooterComponent from "./partials/FooterComponent";
import { getTexts } from "../redux/actions/texts";
import Elements from "react-stripe-elements/lib/components/Elements";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { stripe: null };
    }
    componentWillMount() {
        this.props.getTexts();
    }
    componentDidMount = () => {
        if (window.Stripe) {
            this.setState({
                stripe: window.Stripe("pk_test_EaK1qCsfvxEhY5LSwUFj7JBE")
            });
        } else {
            document
                .querySelector("#stripe-js")
                .addEventListener("load", () => {
                    // Create Stripe instance once Stripe.js loads
                    this.setState({
                        stripe: window.Stripe(
                            "pk_test_EaK1qCsfvxEhY5LSwUFj7JBE"
                        )
                    });
                });
        }
    };

    render() {
        return (
            <div className="App">
                <HeaderComponent />
                <DescriptionComponent />
                <DetailsComponent />
                <StripeProvider stripe={this.state.stripe}>
                    <Elements>
                        <FormComponent stripe={this.state.stripe} />
                    </Elements>
                </StripeProvider>
                <FooterComponent />
            </div>
        );
    }
}

export default connect(
    null,
    { t, getTexts }
)(App);
