import React, { Component } from "react";
import { connect } from "react-redux";
import t from "../../utils/locales/Locales";
import TextFieldGroup from "../commons/TextFieldGroup";
import { getUser, editUser } from "../../redux/actions/users";
import { ToastContainer, ToastStore } from "react-toasts";
import Modal from "../commons/Modal";
import PasswordManagerComponent from "./PasswordManagerComponent";

class UserInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.getUserInfo = this.getUserInfo.bind(this);
        this.togglePasswordManager = this.togglePasswordManager.bind(this);
        this.onChange = this.onChange.bind(this);
        this.edit = this.edit.bind(this);
        this.state = {
            user: {},
            togglePasswordManager: false
        };
    }

    componentWillMount() {
        this.getUserInfo();
    }

    getUserInfo() {
        getUser(this.props.userId).then(user => {
            this.setState({ user: user });
        });
    }

    onChange(e) {
        e.preventDefault();
        let user = Object.assign(this.state.user, {
            [e.target.name]: e.target.value
        });
        this.setState(user);
    }

    toggleCheckBox(e){
        let user = Object.assign(this.state.user, {[e.target.name]: !this.state.user.pigeon})
        this.setState(user);
    }

    edit(e){
        e.preventDefault();
        const {firstname, lastname, email, siret, company, tel, pigeon} = this.state.user
        editUser(this.props.userId, { firstname, lastname, email, siret, company, tel, pigeon }).then(res =>{
            ToastStore.success(t("AccountCreated"))
        }).catch(err =>{
            ToastStore.error(t("MissingFieldOrEmailExists"))
        })
            .then(res => {
                console.log(res);
                ToastStore.success("Votre profil a bien été mis à jour ");
            })
            .catch(err => {
                ToastStore.error(
                    "Un champ est manquant ou l'adresse email ou le siret sont deja utilisés"
                );
            });
    }

    setValue(value){
        //method use to prevent undefined at first render
        return value?value:""
    }

    togglePasswordManager(e) {
        e.preventDefault();
        this.setState({
            togglePasswordManager: !this.state.togglePasswordManager
        });
    }

    render() {
        const { user, togglePasswordManager } = this.state;
        return (
            <div id="user-info" className="flex-column flex-center">
                <ToastContainer
                    store={ToastStore}
                    position={ToastContainer.POSITION.TOP_RIGHT}
                />
                {togglePasswordManager && (
                    <Modal
                        title={"Changer mot de passe"}
                        closeAction={this.togglePasswordManager}
                    >
                        <PasswordManagerComponent />
                    </Modal>
                )}
                <div className="flex-center flex-column container-user-info">
                    <form
                        onSubmit={this.edit}
                        className="form-content flex-center"
                    >
                        <div className="label-form flex-row flex-space-between">
                                <TextFieldGroup
                                    field="lastname"
                                    label={t("lastname")}
                                    value={this.setValue(user.lastname) }
                                    onChange={this.onChange}
                                />
                                <TextFieldGroup
                                    field="firstname"
                                    label={t("firstname")}
                                    value={this.setValue(user.firstname)}
                                    onChange={this.onChange}
                                />
                        </div>

                        <div className="label-form flex-row flex-space-between">
                                <TextFieldGroup
                                    field="company"
                                    label={t("company")}
                                    value={this.setValue(user.company)}
                                    onChange={this.onChange}
                                />
                                <TextFieldGroup
                                    field="siret"
                                    label="Siret"
                                    value={this.setValue(user.siret)}
                                    onChange={this.onChange}
                                />
                        </div>

                        <div className="label-form flex-row flex-space-between">
                                <TextFieldGroup
                                    field="email"
                                    label="Email"
                                    value={this.setValue(user.email)}
                                    onChange={this.onChange}
                                />
                                <TextFieldGroup
                                    field="tel"
                                    label={t("tel")}
                                    value={this.setValue(user.tel)}
                                    onChange={this.onChange}
                                />
                        </div>

                        <div className="change-password flex-row flex-center">
                            <p onClick={this.togglePasswordManager}>{t("ChangePassword")}</p>
                        </div>
                        <div className="form-group" onClick={ this.toggleCheckBox.bind(this) }>
                                <input name="pigeon" id="html" type="checkbox" defaultChecked={user.pigeon}/>
                            <label htmlFor="html">
                                {t('pigeon')} <span className="span">WeAreData</span>
                            </label>
                        </div>

                        <div className="text-center">
                            <button className="btn btn--green">{t("Edit")}</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language,
        userId: state.auth.user._id
    };
};

export default connect(
    mapStateToProps,
    { t }
)(UserInfoComponent);
