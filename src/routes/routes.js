import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';



import Login from '../Login/Login'
import CadastroRoutes from './CadastroRoutes'
import ClienteRoutes from './ClienteRoutes'
import EmpresaRoutes from './EmpresaRoutes'




const AppStack = createSwitchNavigator({ Cliente: ClienteRoutes, Empresa: EmpresaRoutes }) // ,{headerMode: "none"}
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