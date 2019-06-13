import firebase from 'react-native-firebase'
import {ObterDatas} from './ManipularDatas'
const firestore = firebase.firestore()

export async function buscarEmpresa(nome) {
    console.log("pelo amor de deus")
    const dados = []
    let docData
    let docId
    const querySnapShot = await firestore.collection("empresas").where("firstName", "==", nome).get()
    console.log(querySnapShot)
    querySnapShot.forEach(doc => {
        docData = doc.data()
        docId = doc.id
    })
    const datas = await ObterDatas(docId)
    dados.push({empresaId: docId, dados: docData, datasDisponiveis: datas})

    console.log(dados)
    return dados
}