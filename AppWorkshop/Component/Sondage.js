import React, { Component } from 'react';
import {StyleSheet,Button,TextInput,View,Text, Image} from 'react-native';
import MyHeader from './Header'


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={text:''}
    this.state2 ={text2:''}
    this.state4 ={text4:''}
    this.state5 ={text5:''}
    this.state6 ={text6:''}
    this.state7 ={text7:''}
    this.state8 ={text8:''}
  }
  static navigationOptions = () => {
     let drawerLabel = 'Sondage'
     let drawerIcon = () => (
         <Image
             source={require('../assets/img/sondage.png')}
             style={{width:26, height:26, tintColor:'blue'}}
             />
     );
     return { drawerLabel, drawerIcon};
 }

  render() {
    return (
     
      <View style={styles.container}>
         <MyHeader {...this.props} title="Sondage" />
        <Text style={{fontWeight:'bold'}}>Jouez vous à des jeux vidéos en ligne?</Text>
        <TextInput
        style={{borderWidth:1,width:250, margin:5}}
        onChangeText={this.onChangeText}
        value={this.state.text}
        />
        <Text style={{fontWeight:'bold'}}>À quelle fréquence jouez-vous à des jeux vidéos en ligne par semaine?</Text>
        
        <TextInput
        style={{borderWidth:1,width:250, margin:5}}
        onChangeText2={this.onChangeText2}
        value={this.state2.text}
        />

        <Text style={{fontWeight:'bold'}}>comment avez-vous trouver événement?</Text>
        <TextInput
        style={{borderWidth:1,width:250, margin:5}}
        onChangeText4={this.onChangeText4}
        value={this.state4.text}
        />

        <Text style={{fontWeight:'bold'}}>comment avez-vous trouver les services proposer par l'application?</Text>
        <TextInput
        style={{borderWidth:1,width:250, margin:5}}
        onChangeText5={this.onChangeText5}
        value={this.state5.text}
        />
        <Text style={{fontWeight:'bold'}}>comment avez-vous trouver l'application?</Text>
        <TextInput
        style={{borderWidth:1,width:250, margin:5}}
        onChangeText6={this.onChangeText6}
        value={this.state6.text}
        />
        <Text style={{fontWeight:'bold'}}>quelles améliorations voulez-vous apporter pour les prochaines compétition?</Text>
        <TextInput
        style={{borderWidth:1,width:250, margin:5}}
        onChangeText7={this.onChangeText7}
        value={this.state7.text}
        />
        <Text style={{fontWeight:'bold'}}>avez-vous une autre précision à dire sur l'évènement?</Text>
        <TextInput
        style={{borderWidth:1,width:250, margin:5}}
        onChangeText8={this.onChangeText8}
        value={this.state8.text}
        />

        <Button
        onPress={this.onPress}
        title={"valider"}
        />
      </View>
      );
  }


  onChangeText = (text) =>{
    this.setState({text})
  }
  onChangeText2 = (text) =>{
    this.setState2({text})
  }
   onChangeText4 = (text) =>{
    this.setState4({text})
  }
     onChangeText5 = (text) =>{
    this.setState5({text})
  }
     onChangeText6 = (text) =>{
    this.setState5({text})
  }
     onChangeText7 = (text) =>{
    this.setState5({text})
  }
     onChangeText8 = (text) =>{
    this.setState5({text})
  }

  onPress=()=>{
    alert('sondage valider')
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#DC143C',
    // borderWidth:1,
    // fontSize: 22,
    // padding: 10,
    // margin: 50,
    // //justifyContent: 'center',
    // borderWidth: StyleSheet.hairlineWidth,
    // color: 'black'
  }
});