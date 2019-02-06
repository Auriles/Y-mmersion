import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

//This component is based on HOC and it used like middleware to check is user isAuthenticated before to access to protected route
export default ComposedComponent => {
    class RequireAuth extends Component {
        render() {
            if (!localStorage.jwtToken || !this.props.isAuthenticated) {
                return <Redirect to="/" push />;
            } else {
                return <ComposedComponent {...this.props} />;
            }
        }
    }

    RequireAuth.propTypes = {
        isAuthenticated: PropTypes.bool.isRequired
    };

    const mapStatetoProps = state => {
        return {
            isAuthenticated: state.auth.isAuthenticated,
            user: state.auth.user
        };
    };

    return connect(mapStatetoProps)(RequireAuth);
};
