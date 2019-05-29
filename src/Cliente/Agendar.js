import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

import { Text, Button } from 'react-native-paper';
import Pesquisa from '../Components/SearchBar'
class Agendar extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.pesquisa}>
                 <Pesquisa  />

                </View>

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
      //justifyContent: "space-around",
      //alignItems: 'stretch',
      backgroundColor: '#F5FCFF',
    },
    pesquisa: {
        marginTop:"10%",
        alignItems: "baseline",
        alignSelf: "center",
        width: "90%",  

    },
    welcome: {
        //alignContent: "center", 
        fontSize: 20,
        //textAlign: 'center',
        margin: 10,
    },

});
  
export default Agendar