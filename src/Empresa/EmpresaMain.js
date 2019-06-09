import React, {Component} from 'react';
import {StyleSheet, View, AsyncStorage} from 'react-native';
import {Button, Text, TextInput, Appbar } from 'react-native-paper';
import EscolherData from '../Components/EscolherData'
class Empresa extends Component {
    deslogar = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('DefinirRota');
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Appbar>
                    <Appbar.Content title={"Marca Fácil"} />
                </Appbar>
                <Text style={styles.welcome}>Esta é a tela principal da Empresa</Text>
                {/* <Button onPress={this.deslogar}>Deslogar</Button> */}
                <EscolherData />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
      backgroundColor: '#FBFFF1',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
});
  

export default Empresa