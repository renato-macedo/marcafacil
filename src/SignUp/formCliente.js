import React, {Component} from 'react';
import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper'
//import registrar from '../services/registrar'
import firebase from 'react-native-firebase'



export default class formCliente extends Component {


    state = {
        erro: false
    }
    render() {
      return (
        <View style={styles.container}>

          <View style={styles.content}>
            <Formik 
              initialValues={{ firstName: '',lastName:'', email: '', password: '' }} 
              onSubmit={values => {
                firebase.auth().createUserWithEmailAndPassword(values.email, values.password).then(user => {
                    const uid = user.user.uid
                    let collection = ''
                    console.log(user)
                    // tipo === "cliente" ? collection = "clientes" : collection = "empresas"
                    firebase.firestore().collection("clientes").doc(uid).set(values)
                    .then(() => this.props.navigation.navigate('Login'))
                    .catch((err) => console.log(err))
                }).catch(err => this.setState({erro: true}))
                
                }
              }>
              {({ handleChange, handleSubmit, values }) => (
                <View>
                <TextInput
                  onChangeText={handleChange('firstName')}
                  value={values.firstName}
                  label="Nome"
                />
                <TextInput
                  onChangeText={handleChange('lastName')}
                  value={values.lastName}
                  label="Sobrenome"
                />
                <TextInput
                  onChangeText={handleChange('email')}
                  value={values.email}
                  label="Email"
                />
                <TextInput
                  onChangeText={handleChange('password')}
                  value={values.password}
                  label="Senha"
                />
                <TextInput
                  onChangeText={handleChange('telefone')}
                  value={values.telefone}
                  label="Telefone"
                />
                <Button onPress={handleSubmit} style={styles.button}>Submit</Button>
                </View>
              )}
            </Formik>
            {this.state.erro && <Text style={styles.erro}>Este usuario já existe</Text>}
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {

    //   backgroundColor: '#ecf0f1',
      justifyContent: "center",
      //alignItems: "center",

    },
    content: {
      padding: 16,
    },
    button: {
      marginTop: 16,
    },
    erro: {
        color: "red",
        alignSelf: "center"
    }
  });