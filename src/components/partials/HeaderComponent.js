import React, { Component } from 'react';
import t from '../../utils/locales/Locales';
import { setLanguage } from '../../redux/actions/app';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import EditableTextComponent from '../commons/EditableTextComponent';


class HeaderComponent extends Component {
    render() {
        const {texts, auth} = this.props;
        return (
            <div className="header-component">
                <div className="transparence-header"></div>
                <NavLink to={auth.isAuthenticated?"/dashboard":"/login"}>
                    <button className="btn btn--rounded btn--transparent btn-login">
                        {auth.isAuthenticated? t('DashBoard'):t('Login')}
                        <i className="fas fa-angle-down"></i>
                    </button>
                </NavLink>
                <div className="content-header flex-column flex-center">
                    <EditableTextComponent textId="heroTitle" class="second-font" rows={1}>
                        <p>{texts.heroTitle}</p>
                    </EditableTextComponent>
                    {/* <img src={require("../../images/logo-ymmersion.png")} className="logo-header" alt="logo header"/> */}
                    <EditableTextComponent textId="heroSlogan" class="main-font" rows={1}>
                        <p>{texts.heroSlogan}</p>
                    </EditableTextComponent>
                    <div className="btn-margin">
                        <button className="btn btn--rounded btn--violet btn-shadow">soyez les premiers !</button>
                    </div>
                </div>
                <div className="social-header flex-row flex-space-between">
                    <div className="social-icons-header flex-row flex-space-between">
                        <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                        <NavLink to="#"><i className="fab fa-linkedin-in"></i></NavLink>
                    </div>
                    <button className="btn btn--rounded btn--transparent">explore <i className="fas fa-angle-down"></i></button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        lang: state.app.language,
        auth: state.auth,
        texts:state.texts
    }
}

export default connect(mapStateToProps, { t, setLanguage })(HeaderComponent);

