import firebase from 'react-native-firebase'

const firestore = firebase.firestore()

export async function novoAgendamento(agendamento) {
    //const { cliente, empresa} = agendamento
    try {
        let docRef = await firestore.collection("agendamentos").add(agendamento)
        console.log(docRef.id)
        await agendamentoCliente(docRef.id, agendamento)
        await agendamentoEmpresa(docRef.id, agendamento)
    } catch (error) {
        console.error("Error adding document: ", error);
    }
    
    

}


async function agendamentoEmpresa(agendamentoId, dados) {
    const { empresaId } = dados
    await firestore.collection("empresas").doc(empresaId).collection("Agendamentos").doc(agendamentoId).set(dados)
}



async function agendamentoCliente(agendamentoId, dados) {
    const {clienteId } = dados
    await firestore.collection("clientes").doc(clienteId).collection("Agendamentos").doc(agendamentoId).set(dados)
}
