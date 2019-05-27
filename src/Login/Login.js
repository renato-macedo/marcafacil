import React, {Component} from 'react';

import {View, StyleSheet} from 'react-native';
import {Button, Text, TextInput, Provider as PaperProvider } from 'react-native-paper';
import BarraInferior from '../Components/BarraInferior'

import firebase from 'react-native-firebase'



class Login extends React.Component {
    state = {
        email: '',
        password: '',
        isAuthenticated: false,
    }

    login = async () => {
        const { email, password } = this.state;

        try {
            firebase.auth().signInWithEmailAndPassword(email, password)

            this.setState({ isAuthenticated: true })
            console.log(user)

        }catch (err) {
            console.log(err)
        }
    }
    
    render() {
        return(
            <PaperProvider >
                <View style={styles.container}>
                    <Text style={styles.text}>Assistente de Agendamento</Text>
                    <TextInput style={styles.fields}
                        placeholder="Digite seu email"
                        underlineColor="#6B52AE"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })} 
                    />
                    <TextInput style={styles.fields}
                        placeholder="Senha"
                        underlineColor="#6B52AE"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })} 
                    />

                    <Button style={styles.button} mode="contained" onPress={this.login}>Entrar</Button>

                    { this.state.isAuthenticated ? <Text>Logado com sucesso</Text> : null }
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
      
      
    },
    text: {
        fontSize: 32,
        color: "white",
        alignSelf: "center",
        textAlign: "center",
        marginBottom: "5%"
    },
    fields: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
       
        alignSelf:"stretch",
        marginBottom: 10

    },
    button: {
      fontSize: 20,
      justifyContent: "center",
      alignItems: "center",
      textAlign: 'center',
      margin: 10,
      alignSelf: "center",
    },
});
  

export default Login