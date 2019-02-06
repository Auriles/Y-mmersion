import React, { Component } from 'react';
import { connect } from 'react-redux';
import SidebarLinkComponent from './SidebarLinkComponent';
import {logout} from '../../redux/actions/authentication'


class SidebarComponent extends Component {
    constructor(props) {
        super(props)
        this.toggleSidebarState = this.toggleSidebarState.bind(this)
        this.state = {
            minified:false
        }
    }

    componentWillMount() {

    }

    toggleSidebarState(e){
        e.preventDefault();
        this.setState({minified: !this.state.minified})
    }

    render() {
        const {minified} = this.state;

        const adminNavigation = (
            <div className="flex-column flex-center">
                <SidebarLinkComponent link="/dashboard/users" icon="fas fa-users" label="Users" minified={minified}/>
            </div>
        )

        return (
            <div id="sidebar" className={minified?"flex-column minified": "flex-column"}>
                <div className="sidebar-header flex-row flex-center">
                    <div className="logo-sidebar">
                        <img src={require("../../images/logo-footer.svg")} alt="" />
                    </div>
                    <i className={minified ? "fas fa-arrow-right text-center top" : "fas fa-arrow-left"} onClick={this.toggleSidebarState}></i>
                </div>
                <SidebarLinkComponent link="/dashboard" icon="fas fa-home" label="Home" minified={minified}/>
                <SidebarLinkComponent link="/dashboard/user" icon="fas fa-user" label="Profile" minified={minified}/>
                {this.props.user.access === "user" && <SidebarLinkComponent link="/dashboard/sales" icon="fas fa-money-check-alt" label="Sales" minified={minified}/>}
                {this.props.user.access === "admin" && adminNavigation}

                <div className="sidebar-footer flex-row flex-center flex-space-between">
                    <i className="fas fa-sign-out-alt" onClick={this.props.logout}></i>
                    <i className="fas fa-cog"></i>
                </div>

            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        lang: state.app.language,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, {logout})(SidebarComponent);