import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomNavigation, Text, TextInput } from 'react-native-paper';

class Empresa extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>Esta é a tela principal da Empresa</Text>
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
  

export default Empresa