import React, { Component } from 'react';
import { View, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

class Signup extends Component {
    constructor(props){
        super(props)
    }

    _displayHomePage = () => {
        this.props.navigation.navigate('Home')
    }
    render() {
        return (
            <ImageBackground source={require('../assets/img/background.jpg')} style={styles.container}>
                <Ionicons 
                    name='ios-add-circle'
                    size={100}
                    color={'white'}
                    style={{marginTop:80}}>
                </Ionicons>
                <View style={styles.container_blockInput}>
                        <TextInput 
                        placeholder={'Email'}
                        placeholderTextColor={'white'}
                        style={[styles.container_textInput, styles.TextInput]}
                        >
                        </TextInput>
                        <TextInput 
                        placeholder={'Nom'}
                        placeholderTextColor={'white'}
                        style={[styles.container_textInput, styles.TextInput]}
                        >
                        </TextInput>
                        <TextInput 
                        placeholder={'Password'}
                        placeholderTextColor={'white'}
                        style={[styles.container_textInput, styles.TextInput]}>
                            
                        </TextInput>
                </View>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonTitle} onPress={() => this._displayHomePage()}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'center',
        // justifyContent: 'center',
        alignItems: 'center',
        
    },
    container_blockInput:{
        marginTop: '10%' 
    },
    container_textInput: {
        paddingHorizontal: 10,
        borderRadius: 6,
        marginBottom: 20,
    },
    TextInput: {
        width: 280,
        height: 45,
        paddingHorizontal: 10,
        borderRadius: 6,
        backgroundColor: 'rgba(300,300,300,0.3)',//a = alpha = opacity
    }, 
    loginButtonTitle: {
        fontSize: 18,
        color: 'white',
        paddingTop: 10
    },
})

export default Signup