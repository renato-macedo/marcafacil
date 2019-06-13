import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import React from 'react'

import Cliente from '../Cliente/ClienteMain'
//import Agendar from '../Cliente/Buscar'
import Agendar from './AgendarComEmpresa'



const Cl = () => <Cliente />
const Ag = () => <Agendar />


const BottomNavigator = createMaterialBottomTabNavigator({
    Cliente: {screen: Cl, navigationOptions: {
        tabBarLabel: "Home",
    }},
    Agenda: {screen: Ag, navigationOptions: {
        tabBarLabel: "Agendar"
    }}
}, {
    initialRouteName: "Cliente",
    activetTintColor: 'white',
    inactiveTintColor: '#ddd',
    labeled: true,
})

export default BottomNavigator