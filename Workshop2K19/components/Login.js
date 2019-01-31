import React, { Component } from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native'


import {Button, Input, Icon, SocialIcon} from 'react-native-elements';


const styles = StyleSheet.create({
    login: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        borderColor: 'black',

        backgroundColor: '#ffff'
    },
});

export default class Login extends Component {
    constructor(props){
        super(props);

        this.state ={
            user: 'Username',
            password: 'Password'
        }
    }
    render(){
        return (
            <View>
                <View>

                    <Icon
                        raised
                        name='fingerprint'
                        color='red'
                        containerStyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 100,

                        }}
                    />

                </View>
                <View style={styles.login}>
                    <Input
                        placeholder={this.state.user}
                        shake={true}
                        containerStyle={{marginVertical: 10, height: 50, width: 250}}
                    />

                    <Input
                        placeholder={this.state.password}
                        shake={true}
                        containerStyle={{marginVertical: 10, height: 50, width: 250}}
                    />

                    <Button
                        title="Sign In"
                        buttonStyle={{
                            backgroundColor: '#051F85',
                            borderWidth: 2,
                            borderColor: 'white',
                            borderRadius: 30,

                        }}
                        containerStyle={{ marginVertical: 10, height: 50, width: 250}}
                        titleStyle={{ fontWeight: 'bold' }}
                    />

                    <Button
                    title="Sign Up"
                    buttonStyle={{
                        backgroundColor: '#051F85',
                        borderWidth: 2,
                        borderColor: 'white',
                        borderRadius: 30,
                    }}
                    containerStyle={{ marginVertical: 10, height: 50, width: 250}}
                    titleStyle={{ fontWeight: 'bold' }}
                    />
                </View>

                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 150,
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontStyle: 'italic'
                    }}>Copyright Y-mmersion</Text>
                </View>
            </View>

        )
    }
}