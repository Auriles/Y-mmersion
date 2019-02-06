
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import t from '../../utils/locales/Locales';

class SidebarLinkComponent extends Component {
    render() {
        const {link, label, icon, minified} = this.props
        return (
            <NavLink exact to={link} className="navlink flex-row flex-center" activeClassName="navlink-selected">
                <i className={"icon-sidebar-top " + icon}></i>
                {!minified && <span>{t(label)}</span>}
            </NavLink>
        );
    }
}

SidebarLinkComponent.propTypes = {
    link:PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    minified: PropTypes.bool.isRequired
};

function mapStateToProps(state){
    return{
        lang:state.app.language,
    }
}

export default connect(mapStateToProps, {t})(SidebarLinkComponent);