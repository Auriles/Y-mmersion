import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastStore, ToastContainer } from "react-toasts";
import { signUp } from "../../redux/actions/users";
import TextFieldGroup from "../commons/TextFieldGroup";
import t from "../../utils/locales/Locales";
import axios from "axios";
import { CardElement } from "react-stripe-elements";
import { injectStripe } from "react-stripe-elements";
class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.signUp = this.signUp.bind(this);
        this.state = {
            lastname: "",
            firstname: "",
            company: "",
            siret: "",
            email: "",
            tel: "",
            password: "",
            pigeon: false
        };
    }

    signUp(e) {
        e.preventDefault();
        const { lastname, firstname, email } = this.state;
        let paymentsData = {
            stripeEmail: email,
            stripeToken: "",
            stripeTokenType: ""
        };
        this.props.stripe
            .createToken({ name: lastname + " " + firstname })
            .then(({ token }) => {
                console.log("Received Stripe token:", token);
                paymentsData.stripeToken = token.id;
                paymentsData.stripeTokenType = token.card.object;
                return axios.post("/api/payments", paymentsData).then(res => {
                    signUp(this.state)
                        .then(res => {
                            //define what we do after signUp
                            ToastStore.success(
                                "Votre compte a été créé avec succés"
                            );
                        })
                        .catch(err => {
                            ToastStore.error(
                                "Un champ est manquant ou l'adresse email est deja utilisé"
                            );
                        });
                });
            })
            .catch(err => console.log(err));
        // return axios.post("/api/payments", paymentsData).then(res => {
        //     signUp(this.state)
        //         .then(res => {
        //             //define what we do after signUp
        //             ToastStore.success("Votre compte a été créé avec succés");
        //         })
        //         .catch(err => {
        //             ToastStore.error(
        //                 "Un champ est manquant ou l'adresse email est deja utilisé"
        //             );
        //         });
        // });
    }

    toggleCheckBox(e) {
        console.log(e.target.name);
        this.setState({ [e.target.name]: !this.state[e.target.name] });
    }

    onChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const {
            lastname,
            firstname,
            company,
            siret,
            tel,
            email,
            pigeon
        } = this.state;
        // console.log(this.props.stripe);
        return (
            <div
                id="signup-form"
                className="form-component flex-column flex-center"
            >
                <ToastContainer
                    store={ToastStore}
                    position={ToastContainer.POSITION.TOP_RIGHT}
                />
                <div className="form">
                    <div className="flex-center flex-column">
                        <p className="title-form">offre de lancement</p>
                        <p className="description-form">
                            inscrivez-vous et recevez prochainement <br /> un
                            accès premium à l'application Y-mmersion
                        </p>
                    </div>
                    <div className="flex-center flex-column">
                        <form
                            onSubmit={this.signUp}
                            className="form-content flex-center"
                        >
                            <div className="label-form flex-row flex-space-between">
                                <TextFieldGroup
                                    field="lastname"
                                    label={t("lastname")}
                                    value={lastname}
                                    onChange={this.onChange}
                                />
                                <TextFieldGroup
                                    field="firstname"
                                    label={t("firstname")}
                                    value={firstname}
                                    onChange={this.onChange}
                                />
                            </div>



                            <div className="label-form flex-row flex-space-between">
                                <TextFieldGroup
                                    field="email"
                                    label="Email"
                                    value={email}
                                    onChange={this.onChange}
                                />
                                <TextFieldGroup
                                    field="tel"
                                    label={t("tel")}
                                    value={tel}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="card-payement">
                                <label>
                                    <p>Card details : </p>
                                    <CardElement style={{ base: { fontSize: "18px" } }} />
                                </label>
                            </div>


                            <div
                                className="form-group"
                                onClick={this.toggleCheckBox.bind(this)}
                            >
                                <input
                                    name="pigeon"
                                    type="checkbox"
                                    id="html"
                                    defaultChecked={pigeon}
                                />
                                <label htmlFor="html">
                                    {t("pigeon")}{" "}
                                    <span className="span">Y-mmersion</span>
                                </label>
                            </div>

                            <div className="text-center">
                                <button className="btn btn--violet2">
                                    {t("signUp")}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    null,
    { t }
)(injectStripe(FormComponent));
