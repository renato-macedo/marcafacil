import React, {Component} from 'react';

import {StyleSheet} from 'react-native';
import {BottomNavigation, Text, TextInput, Provider as PaperProvider } from 'react-native-paper';
import BarraInferior from '../Components/BarraInferior'



class Login extends React.Component {
    render() {
        return(
            <PaperProvider>
                <BarraInferior />
            </PaperProvider>
            
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
  

export default Login