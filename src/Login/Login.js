import React, {Component} from 'react';

import {View, StyleSheet, Image} from 'react-native';
import {Button, Text, TextInput, Provider as PaperProvider } from 'react-native-paper';
//import BarraInferior from '../Components/BarraInferior'

import firebase from 'react-native-firebase'



class Login extends React.Component {
    static navigationOptions = {
        header: null
    }
    state = {
        email: '',
        password: '',
        isAuthenticated: false,
    }

    login = async () => {
        const { email, password } = this.state;

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)

            this.setState({ isAuthenticated: true },()=> {
                this.props.navigation.navigate('Cliente')
            })
            


        }catch (err) {
            console.log(err)
        }
    }
    
    render() {
        return(
            <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/img/spider.png')} styles ={styles.imageStyle}/>
            </View>
            <View style={{marginBottom: "5%"}} >

                <TextInput 
                    style={styles.fields}

                    placeholder="Digite seu email"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })} />
                <TextInput 
                    style={styles.fields}
                    value={this.state.password}
                    placeholder="Digite sua senha" 
                    onChangeText={password => this.setState({ password })} />

            </View>
            
            <View style={styles.buttonContainer} placeholder="Digite sua senha" >
                <Button style={styles.button} mode="contained" onPress={this.login}>Entrar</Button>
                <Button style={styles.button} mode="contained" onPress={()=>this.props.navigation.navigate('EscolherTipo')}>Cadastro</Button>

            </View>
           
            </View>       

                   
          
                
        
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
        //flexDirection: "column",
        flex: 1, 
        justifyContent: "center",
        //alignItems: "center",
        alignContent: 'center',
        backgroundColor: "#effce0"
    },

    imageContainer: {
        
        alignItems: "center",
        justifyContent: "center"
    },

    imageStyle: {
    }, 

    text: {
        fontSize: 32,
        color: "white",
        // alignSelf: "center",
        textAlign: "center",
        marginBottom: "5%",
    },

    fields: {
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: "5%",
        backgroundColor: "#daf7bb"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",

    },
    button: {
        borderWidth: 0,
        width: "45%",
        marginBottom: "2%",
        tintColor: "red"

    },
});
  

export default Login