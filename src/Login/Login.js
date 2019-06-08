import React, {Component} from 'react';

import {View, StyleSheet, Image} from 'react-native';
import {Button, TextInput, Text, } from 'react-native-paper';


import firebase from 'react-native-firebase'

const auth = firebase.auth()
const db = firebase.firestore()
class Login extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        email: 'facebook@contato.com',
        password: '123456',
        isAuthenticated: false,
    }

    login =  () => {
        const { email, password } = this.state;
        if(email===' ' || password === '') return
        //try {
            auth.signInWithEmailAndPassword(email, password).then(user => {
                console.log(user)
                const userId = user.user.uid
                console.log(userId)
                db.collection("clientes").doc(userId).get().then(docCliente => {
                    //console.log(doc.data())
                    if(docCliente.exists) {
                        console.log("Document Cliente :", docCliente.data())
                        this.setState({ isAuthenticated: true },()=> {
                            this.props.navigation.navigate('Cliente')
                            console.log("Indo para cliente")
                        })
                    }else {
                        db.collection("empresas").doc(userId).get().then(docEmpresa => {
                            if(docEmpresa.exists) {
                                console.log("Document Empresa:", docEmpresa.data())
                                this.setState({ isAuthenticated: true },()=> {
                                    this.props.navigation.navigate('Empresa')
                                    console.log("Indo para empresa")
                                })
                            }else {
                                console.log("No such document!")
                            }
                        })
                        
                    }
                }).catch(function(error) {
                    console.log("Error getting document:", error)
                })

            }).catch(err => {
                console.log(`Error ${err.code}: ${err.message}`)
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
                <Button style={styles.button} mode="contained" onPress={()=>this.props.navigation.navigate("EscolherTipo")}>Cadastro</Button>

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
        fontFamily: "Impact" 
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
});
  

export default Login