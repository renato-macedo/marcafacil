import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import React from 'react'

import Cliente from '../Cliente/ClienteMain'
import Agendar from '../Cliente/Agendar'




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
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: {alignContent: "center"},
})

export default BottomNavigator