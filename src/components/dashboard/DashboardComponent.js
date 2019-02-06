import React, { Component } from "react";
import { connect } from "react-redux";
import t from "../../utils/locales/Locales";
import { Route } from "react-router-dom";
import requireAuth from "../../utils/requireAuth";
import requireAdmin from "../../utils/requireAdmin";
import SidebarComponent from "../sidebar/SidebarComponent";
import UsersListComponent from "../users-list/UsersListComponent";
import UserInfoComponent from "../user-info/UserInfoComponent";
import SalesComponent from "../sales/SalesComponent";
import DashboardHomeComponent from "../dashboard/DashboardHomeComponent";
import CguComponent from "../cgu/CguComponent";
import AboutComponent from "../about/AboutComponent";

class DashboardComponent extends Component {
    render() {
        return (
            <div id="dashboard" className="flex-row">

                <SidebarComponent />
                <div className="dashboard-component">
                    <div className="transparence-header2">
                        <Route
                            exact path="/dashboard"
                            component={requireAuth(DashboardHomeComponent)}
                        />

                        <Route
                            path="/dashboard/sales"
                            component={requireAuth(SalesComponent)}
                        />
                        <Route
                            path="/dashboard/user"
                            component={requireAuth(UserInfoComponent)}
                        />
                        <Route
                            path="/dashboard/users"
                            component={requireAdmin(UsersListComponent)}
                        />
                        <Route
                            path="/dashboard/cgu"
                            component={requireAuth(CguComponent)}
                        />
                        <Route
                            path="/dashboard/about"
                            component={requireAuth(AboutComponent)}
                        />
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        lang: state.app.language
    };
}

export default connect(
    mapStateToProps,
    { t }
)(DashboardComponent);
