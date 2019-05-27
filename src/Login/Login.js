import React, {Component} from 'react';

import {View, StyleSheet} from 'react-native';
import {Button, Text, TextInput, Provider as PaperProvider } from 'react-native-paper';
import BarraInferior from '../Components/BarraInferior'



class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }
    
    render() {
        return(
            <PaperProvider >
                <View style={styles.container}>
                    <Text style={styles.text}>Assistente de Agendamento</Text>
                    <TextInput style={styles.fields}
                        placeholder="email"
                        underlineColor="#6B52AE"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })} 
                    />
                    <TextInput style={styles.fields}
                        placeholder="password"
                        underlineColor="#6B52AE"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })} 
                    />

                    <Button style={styles.button} mode="contained" onPress={() => console.log("Pressed")}>Entrar</Button>
                </View>
                
            </PaperProvider>
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#3F51B5',
      marginBottom: "10%"
      
    },
    text: {
        fontSize: 32,
        color: "white",
        alignSelf: "center",
        textAlign: "center",

    },
    fields: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        width: "90%"
    },
    button: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      alignSelf: "center",
      width: "80%"
    },
});
  

export default Login