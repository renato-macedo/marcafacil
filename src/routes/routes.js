import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';



import Login from '../Login/Login'
import CadastroRoutes from './CadastroRoutes'
import ClienteRoutes from './ClienteRoutes'



const AppStack = createStackNavigator({ Cliente: ClienteRoutes },{headerMode: "none"})
const AuthStack = createStackNavigator({ Login, CadastroRoutes });



// export default createAppContainer(createSwitchNavigator(
//     {
//         App: AppStack,
//         Auth: AuthStack
//     },
//     {
//         initialRouteName: 'Auth'
//     }
// ))
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