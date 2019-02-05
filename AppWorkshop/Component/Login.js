import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ImageBackground
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class Login extends Component {
    constructor(props){
        super(props)
    }


    _displaySignupPage = () => {
        this.props.navigation.navigate("Signup")
    }

    _displayHomePage = () => {
        this.props.navigation.navigate("Home")
    }


  render() {
    const Divider = (props) => {
      return <View {...props}>
        <View style={styles.line}></View>
        <Text style={styles.textOR}>OR</Text>
        <View style={styles.line}></View>
      </View>
    }
    return (
      <ImageBackground source={require('../assets/img/background.jpg')} style={{flex:1, resizeMode: 'center', position: 'relative'}}>
            <View style={styles.container}>
          <View style={styles.up}>
            <Ionicons
              name = "ios-finger-print"
              size={100}
              color={'white'}>
              
            </Ionicons>
          </View>
          <View style={styles.down}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                textContentType='emailAddress'
                keyboardType='email-address'
                placeholder="Enter your email"
                placeholderTextColor={'white'}
              >
              </TextInput>
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                secureTextEntry={true}
                placeholderTextColor={'white'}
              >
              </TextInput>
            </View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonTitle} onPress={() => this._displayHomePage()}>LOGIN</Text>
            </TouchableOpacity>
            <Divider style={styles.divider}></Divider>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonTitle} onPress={() => this._displaySignupPage()}>SIGNUP</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },  
  up: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  down: {
    flex: 7,//70% of column
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    textAlign: 'center',
    width: 400,
    fontSize: 23,
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: 'rgba(300,300,300,0.3)',//a = alpha = opacity
  },
  textInput: {
    width: 280,
    height: 45,
  },
  loginButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#2057AA'

  },
  loginButtonTitle: {
    fontSize: 18,
    color: 'white'
  },
  facebookButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
  },
  line: {
    height: 1,
    flex: 2,
    backgroundColor: 'white'
  },
  textOR: {
    flex: 1,
    textAlign: 'center',
    color: 'white'
  },
  divider: {
    flexDirection: 'row',
    height: 40,
    width: 298,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
