import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import {Appbar} from 'react-native-paper';


import Agendamento from '../Components/Agendamento'

const agendamentos = [
    {empresa: "Márcia Financeira ME", data: "26/06/2019", hora:"14:00", status: "Aguardando", endereco:"Praça Jaime Antas de Abreu, 554"}, 
    {empresa: "João Doe", data: "30/06/2019", hora:"09:00",  status: "Confirmado", endereco:"Rua Silveira Bueno, 728"}, 
    {empresa: "Marina e Filipe Doces & Salgados ME", data: "14/06/2019", hora:"10:00", status: "Confirmado", endereco:"Rua das Margaridas, 344"},
    {empresa: "Clara Fotografias", data: "17/06/2019", hora: "14:00", status: "Confirmado", endereco: "Avenida Santos Dumont, 679"}
]
export default class Cliente extends Component {
    // static navigationOptions = {
    //     title: "Home",
    //     tabBarIcon: "home",
    //     tabBarLabel: "Home"
    // }
    renderItem = ({item}) => (
        <Agendamento key={item.empresa} agendamento={item} />
    )
    render() {
        return(
            <View style={styles.container}>
                <Appbar>
                    <Appbar.Content title={"Marca Fácil"} />
                </Appbar>
                {/* <Text style={styles.welcome}>Você não tem nenhum agendamento</Text> */}
                <FlatList
                    data={agendamentos}
                    keyExtractor={item => item}
                    renderItem={this.renderItem} />
            </View>

        )
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',

      backgroundColor: '#FBFFF1',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
});
  


