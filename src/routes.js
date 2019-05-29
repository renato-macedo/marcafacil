import React from 'react';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import EscolherTipo from './Auxiliar/EscolherTipo'

import Login from './Login/Login'
import SignUp from './SignUp/SignUpEmpresa'
import ClienteRoutes from './Cliente/ClienteRoutes'




const AppStack = createStackNavigator({ Cliente: ClienteRoutes },{headerMode: "none"})
const AuthStack = createStackNavigator({ Login: Login, EscolherTipo: EscolherTipo });



const StartContainer = createAppContainer(createSwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack
    },
    {
        initialRouteName: 'Auth'
    }
))

const StartRoute = ()=> (
    <StartContainer />
)

 






export default StartRoute 