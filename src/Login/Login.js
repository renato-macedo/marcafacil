import React, {Component} from 'react';

import {View, StyleSheet, Image, AsyncStorage} from 'react-native';
import {Button, TextInput, Text, } from 'react-native-paper';

import { LoginComEmailESenha } from '../services/FazerLoginComEmailESenha'
// import firebase from 'react-native-firebase'

// const auth = firebase.auth()
// const db = firebase.firestore()
class Login extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        email: '',
        password: '',
        isAuthenticated: false,
    }

    storeUserIdETipo = async (userId, tipo) => {
        try {
          await AsyncStorage.setItem("userId", userId);
          await AsyncStorage.setItem("tipo", tipo);
        } catch (error) {
          // Error saving data
        }
    }

    login = async () => {
        const { email, password } = this.state;
        if(email===' ' || password === '') return
        const UserInfo = await LoginComEmailESenha(email, password)
        console.log(UserInfo)
        this.setState({ isAuthenticated: true },()=> {
            
            this.storeUserIdETipo(UserInfo.userId, UserInfo.tipo)
            if(UserInfo.tipo === "Cliente") {
                this.props.navigation.navigate("Cliente")
            } else {
                this.props.navigation.navigate("Empresa")
            }
            console.log("Userid salvo",UserInfo.userId )
            //this.props.navigation.navigate("DefinirRota")
            console.log("Indo para " + UserInfo.tipo)
        })

    }
    
    
    render() {
        return(
            <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/img/logo.png')} styles ={styles.imageStyle}/>
            </View>
            <View style={{marginBottom: "5%"}} >
                <Text style={styles.titulo}>Marca Fácil</Text>
                <TextInput 
                    style={styles.fields}
                    keyboardType="email-address"
                    placeholder="Digite seu email"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })} />
                <TextInput 
                    secureTextEntry={true}
                    style={styles.fields}
                    value={this.state.password}
                    placeholder="Digite sua senha" 
                    onChangeText={password => this.setState({ password })} />

            </View>
            
            <View style={styles.buttonContainer} placeholder="Digite sua senha" >
                <Button style={styles.button} mode="contained" onPress={this.login}>Entrar</Button>
                <Button style={styles.button} mode="contained" onPress={()=>this.props.navigation.navigate("EscolherTipo")}>Cadastrar</Button>

            </View>
            <Button mode="text"  style={styles.esqueceuSenha}>Esqueceu sua senha?</Button>
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
        backgroundColor: "#F1F8E9"
    },

    imageContainer: {
        
        alignItems: "center",
        justifyContent: "center"
    },

    imageStyle: {
    }, 

    titulo: {
        fontSize: 32,
        color: "black",
        // alignSelf: "center",
        textAlign: "center",
        marginBottom: "5%",
        fontFamily: "LuckiestGuy-Regular" 
    },

    fields: {
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: "5%",
        backgroundColor: "#F1F8E9"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",

    },
    button: {
        borderWidth: 0,
        width: "45%",
        marginBottom: "2%",

    },
    esqueceuSenha: {
        fontSize: 8
    }
});
  

export default Login