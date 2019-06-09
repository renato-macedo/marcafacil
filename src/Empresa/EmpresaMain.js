import React, {Component} from 'react';
import {StyleSheet, View, AsyncStorage} from 'react-native';
import {Button, Text, TextInput } from 'react-native-paper';

class Empresa extends Component {
    deslogar = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('DefinirRota');
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>Esta é a tela principal da Empresa</Text>
                {/* <Button onPress={this.deslogar}>Deslogar</Button> */}
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