import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import TextFieldGroup from '../commons/TextFieldGroup';
import {login} from '../../redux/actions/authentication';
import t from '../../utils/locales/Locales';
import {NavLink} from 'react-router-dom';
import {ToastStore, ToastContainer} from 'react-toasts';

class Login extends Component {
    constructor(props){
        super(props)
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: "",
            password:"",
            redirect: false
        }
    }


    onSubmit(e){
        e.preventDefault();
        this.props.login({email:this.state.email, password:this.state.password}).then(res=>{
            this.setState({redirect:true})
        }).catch(err =>{
            ToastStore.error(t('"MissingFieldOrEmailExists'));
            
        })

    }

    onChange(e){
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        if(this.state.redirect){
            return(
                <Redirect to="/dashboard" push />
            )
        }

        const {email, password} = this.state;
        return (
            <div className = "flex-column flex-center login-form">
                <ToastContainer store={ToastStore} position={ToastContainer.POSITION.TOP_RIGHT}/>
                <div className="login-wrapper flex-column flex-center">
                    <div className="login-header">
                        <NavLink to="/">
                            <img src={require("../../images/logo-big.svg")} alt="logo"/>
                        </NavLink>
                    </div>
                    <div className="login-content">
                        <form onSubmit={this.onSubmit}>
                            <div className="input-field">
                                <TextFieldGroup
                                    field="email"
                                    label="Email"
                                    value={email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="input-field">
                                <TextFieldGroup
                                    field="password"
                                    type="password"
                                    label={t("Password")}
                                    value={password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button className="btn btn--green">{t("Login")}</button>
                            <p className="not-account"><NavLink to="/#signup-form">I don't have an account</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {t, login})(Login);