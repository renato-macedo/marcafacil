import firebase from 'react-native-firebase'


export default registrar = (data, tipo) => {
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(user => {
        const uid = user.user.uid
        let collection = ''
        console.log(user)
        tipo === "cliente" ? collection = "clientes" : collection = "empresas"
        firebase.firestore().collection(collection).doc(uid).set(data)
        .then(() => console.log("Cadastro Feito Com Sucesso"))
        .catch((err) => console.log(err))
    })
    this.props.navigation.navigate('Login')
}