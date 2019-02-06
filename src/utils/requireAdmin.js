import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

//This component is based on HOC and it used like middleware to check is user isAuthenticated before to access to protected route
export default function (ComposedComponent) {
    class RequireAdmin extends Component {
        render() {
            if (!localStorage.jwtToken || !this.props.isAuthenticated || this.props.user.access !== "admin") {
                console.log("not permitted")
                return <Redirect to="/" push />
            }else{
                return (
                    <ComposedComponent {...this.props} />
                )
            }

        }
    }

    RequireAdmin.propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
    }

    /*Authenticate.contextTypes = {
        router: PropTypes.object.isRequired
    }*/

    function mapStatetoProps(state) {
        return {
            isAuthenticated: state.auth.isAuthenticated,
            user: state.auth.user
        }
    }

    return connect(mapStatetoProps)(RequireAdmin);
}
