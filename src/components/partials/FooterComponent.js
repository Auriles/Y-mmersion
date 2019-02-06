import React, { Component } from 'react';
import t from '../../utils/locales/Locales';
import { setLanguage } from '../../redux/actions/app';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom'


class FooterComponent extends Component {
    render() {
        return (
            <div className="footer-component flex-row flex-center flex-space-between">
                    <div className="footer-logo"></div>
                    <div className="footer-copyright">
                        <p>copyright Y-mmersion 2018</p>
                    </div>
                    <div className="footer-social flex-row flex-space-between">
                        <div className="footer-social-icons flex-row flex-space-between">
                            <NavLink to="#"><i className="fab fa-facebook-f fab2"></i></NavLink>
                            <NavLink to="#"><i className="fab fa-twitter fab2"></i></NavLink>
                            <NavLink to="#"><i className="fab fa-linkedin-in fab2"></i></NavLink>
                        </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        lang: state.app.language
    }
}

export default connect(mapStateToProps, { t, setLanguage })(FooterComponent);

