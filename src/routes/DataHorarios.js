import React, {Component} from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation'

import DatasDisponiveis from '../Empresa/DatasDisponiveis'
import Horarios from '../Empresa/HorariosDaData'

const DataHorariosStack = createStackNavigator({
    DatasDisponiveis: DatasDisponiveis,
    Horarios: Horarios
},{
    initialRouteName: "DatasDisponiveis",
    headerMode: "none"
})

export default createAppContainer(DataHorariosStack)