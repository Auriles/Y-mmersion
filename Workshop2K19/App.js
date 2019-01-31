import React, { Component } from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native'
// import { Header, SocialIcon, ListItem } from 'react-native-elements';

import Login from './components/Login'
import Secured from './components/Secure'


export default class LoignPage extends Component {

    state = {
        isLoggedIn: false
    }

    render() {

        if (this.state.isLoggedIn)
            return <Secured
                onLogoutPress={() => this.setState({isLoggedIn: false})}
            />;
        else
            return <Login
                onLoginPress={() => this.setState({isLoggedIn: true})}
            />;
    }

}

