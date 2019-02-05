import { createStackNavigator, createAppContainer } from 'react-navigation';
import Signup from '../Component/Signup'
import Login from '../Component/Login'
import Home from '../Component/Home'

const SearchStackNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Signup: {
        screen: Signup
    },
    Home: {
        screen: Home
    }
})


export default createAppContainer(SearchStackNavigator)