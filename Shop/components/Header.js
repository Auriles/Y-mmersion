import React, { Component } from 'react';
import {Header, Icon} from 'react-native-elements';

export default class MyHeader extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return(
            <Header
      leftComponent={<Icon
        name="menu"
        color='#fff'
        onPress={() => { this.props.navigation.toggleDrawer() }}
      />}
      centerComponent={{
        text: this.props.title,
        style: { color: "#fff", fontWeight: "bold" }
      }}
      rightComponent={
        <Icon 
            name="add-shopping-cart"
            color='#fff'
            onPress={() => navigate('Cart')}
           />
      }
      statusBarProps={{ barStyle: "light-content" }}
    />
        );
    }
}
