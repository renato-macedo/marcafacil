
import firebase from 'react-native-firebase'

const auth = firebase.auth()
const db = firebase.firestore()

export async function LoginComEmailESenha(email, password) {
    var UserInfo = {userId: '', tipo: ''}
    console.log("ESTOU AQUI")
    try {
        const user = await auth.signInWithEmailAndPassword(email, password)
        console.log(user)
        UserInfo.userId = user.user.uid

    } catch (err) {
        console.log(`Error ${err.code}: ${err.message}`)
    }

    try {
        UserInfo.tipo =  await buscarTipoDoUsuario(UserInfo.userId)
        console.log("AAA", UserInfo)
    } catch (err) {
        console.log(`Error ${err.code}: ${err.message}`)
    }

    return UserInfo
}


async function buscarTipoDoUsuario(userId) {
    var tipo = ''
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    const docCliente = await db.collection("clientes").doc(userId).get()
    if(docCliente.exists) {
        console.log("Document Cliente :", docCliente.data())
        tipo = "Cliente"
    } else {
        const docEmpresa = await db.collection("empresas").doc(userId).get()
        if(docEmpresa.exists) {
            console.log("Document Empresa:", docEmpresa.id)
            
            tipo = "Empresa"
        }else {
            console.log("No such document!")
        }
    }
    
    console.log(tipo)
    return tipo
}