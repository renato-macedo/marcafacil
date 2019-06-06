import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import {Text, TextInput } from 'react-native-paper';

import Agendamento from '../Components/Agendamento'

const agendamentos = [1, 2, 3]
export default class Cliente extends Component {
    // static navigationOptions = {
    //     title: "Home",
    //     tabBarIcon: "home",
    //     tabBarLabel: "Home"
    // }
    renderItem = ({item}) => (
        <Agendamento key={item}/>
    )
    render() {
        return(
            <View style={styles.container}>
               
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

      backgroundColor: '#F1F8E9',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
});
  


