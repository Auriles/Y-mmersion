import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer, ToastStore } from "react-toasts";
import t from "../../utils/locales/Locales";
import TextFieldGroup from "../commons/TextFieldGroup";
import { editUser} from "../../redux/actions/users";

class PasswordManagerComponent extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            user: {},
            oldPassword: "",
            newPassword: "",
            confirmPassword: ""
        };
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        editUser(this.props.userId, {
            old_password: this.state.oldPassword,
            new_password: this.state.newPassword,
            confirm_password: this.state.confirmPassword
        })
            .then(res => {
                ToastStore.success("Password changed");
            })
            .catch(err => {
                ToastStore.error("Failed to change password");
            });
    }

    onChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { oldPassword, newPassword, confirmPassword } = this.state;

        return (
            <div className="password-manager">
                <ToastContainer
                    store={ToastStore}
                    position={ToastContainer.POSITION.TOP_RIGHT}
                />
                <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                        field="oldPassword"
                        type="password"
                        label={t("Old Password")}
                        value={oldPassword}
                        onChange={this.onChange}
                    />
                    <TextFieldGroup
                        field="newPassword"
                        type="password"
                        label={t("New Password")}
                        value={newPassword}
                        onChange={this.onChange}
                    />
                    <TextFieldGroup
                        field="confirmPassword"
                        type="password"
                        label={t("Confirm Password")}
                        value={confirmPassword}
                        onChange={this.onChange}
                    />

                    <button className="btn btn--green">{t("Send")}</button>
                </form>
            </div>
        );
    }
}

PasswordManagerComponent.propTypes = {};
const mapStateToProps = state => ({
    userId: state.auth.user._id
});
export default connect( mapStateToProps, {t})(PasswordManagerComponent);
