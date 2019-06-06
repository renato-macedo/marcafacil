import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import { Text } from 'react-native-paper';
import Pesquisa from '../Components/SearchBar'
class Agendar extends Component {
    render() {
        return(
            <View style={styles.container}>
                
                 <Pesquisa  />

                

                <View style={styles.welcome}>
                    <Text >Esta é a tela de Agendamento</Text>
                </View>

                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center", 
      backgroundColor: '#F1F8E9',
    },
    welcome: {
        //alignContent: "center", 
        fontSize: 20,
        //textAlign: 'center',
        margin: 10,
    },

});
  
export default Agendar