import firebase from 'react-native-firebase'

const firestore = firebase.firestore()

export async function CriarColecaoDeHorariosEmEmpresa(empresaDoc, data, listaDeHorarios = []) {
    
    await firestore.collection("empresas").doc(empresaDoc).collection('Horarios').doc(data).set({ListaDeHorarios: listaDeHorarios})
    // .then(()=>{
    //     console.log("Data Adicionada")
    // })
    console.log("Data Adicionada")
}

export async function AdicionarNovoHorarioEmDataDoc(empresaDoc, horario, dataDoc) {
    await firestore.collection("empresas").doc(empresaDoc).collection('Horarios').doc(dataDoc).update({
        ListaDeHorarios: firebase.firestore.FieldValue.arrayUnion(horario)
    })
    //.then(() => console.log("data adicionada com sucesso"))
    console.log("data adicionada com sucesso")
}

export function RemoverHorarioEmDataDoc(empresaDoc, horario, dataDoc) {
    firestore.collection("empresas").doc(empresaDoc).collection('Horarios').doc(dataDoc).update({
        ListaDeHorarios: firebase.firestore.FieldValue.arrayRemove(horario)
    }).then(() => console.log("data removida com sucesso"))
}

export async function ObterDatas(empresaDoc) {
    const datas = []
    const querySnapshot =  await firestore.collection("empresas").doc(empresaDoc).collection('Horarios').get()
    querySnapshot.forEach(doc => {
        datas.push(doc.id)
        console.log(datas)
    })
    // .then(querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //        datas.push(doc.id)
    //        console.log(datas)
    //     })
    // })
    console.log(datas)
    return datas
}


export async function ObterHorariosDeData(empresaDoc, data) {
    const horarios = await firestore.collection("empresas").doc(empresaDoc).collection('Horarios').doc(data).get()
    let listaDeHorarios = horarios.data().ListaDeHorarios
    console.log(listaDeHorarios)
    return listaDeHorarios
}