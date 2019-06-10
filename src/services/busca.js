import firebase from 'react-native-firebase'

const firestore = firebase.firestore()

export async function buscarEmpresa(nome) {
    const dados = []
    const querySnapShot = await firestore.collection("empresas").where("firstName", "==", nome).get()
    console.log(querySnapShot)
    querySnapShot.forEach(doc => {
        dados.push({empresaId: doc.id, dados: doc.data()})
    })

    console.log(dados)
    return dados
}