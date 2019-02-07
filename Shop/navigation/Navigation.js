import { createDrawerNavigator, createAppContainer } from "react-navigation";

import Home from '../components/Home';
import Category from '../components/Category';
import Cart from '../components/Cart';
import Profil from '../components/Profil';


const AppNavigator = createDrawerNavigator (
    {
      Home:{
        screen:Home
      },
      Profil:{
        screen:Profil
      },
      Category:{
        screen:Category
      },
      Cart:{
        screen:Cart
      }, 
    },{
        initialRouteName:'Home',
        drawerPosition: 'left',
        contentOptions:{
            activeTintColor:'red',
        }
    }
)
const App = createAppContainer(AppNavigator);
export default App;

