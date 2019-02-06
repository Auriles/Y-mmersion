import React from 'react';
import { View, Text, Image} from 'react-native';

import MyHeader from './Header';

export default class Cart extends React.Component {
   static navigationOptions = () => {
       let drawerLabel = 'Panier'
       let drawerIcon = () => (
           <Image
               source={require('../assets/img/panier.png')}
               style={{width:26, height:26, tintColor:'violet'}}
               />
       );
       return { drawerLabel, drawerIcon};
   }

   render() {
       return (<View style={{
           flex: 1,
           flexDirection: 'column',
       }}>
       <MyHeader {...this.props}  title="Panier"/>
           <View style={{
               flex: 1,
               backgroundColor: 'violet',
               alignItems: 'center',
               justifyContent: 'center'
           }}>
               <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                   This is Panier
               </Text>

           </View>
       </View>);
   }
}