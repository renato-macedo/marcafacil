import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {BottomNavigation, Text, TextInput } from 'react-native-paper';



export default class Cliente extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return(
            <View style={styles.container}>
               
                <Text style={styles.welcome}>Você não tem nenhum agendamento</Text>
                
            </View>

        )
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
});
  


