import firebase from 'react-native-firebase'

const firestore = firebase.firestore()

export async function novoAgendamento(agendamento) {
    //const { cliente, empresa} = agendamento
    try {
        let docRef = await firestore.collection("agendamentos").add(agendamento)
        console.log(docRef.id)
        await criarAgendamentoCliente(docRef.id, agendamento)
        await criarAgendamentoEmpresa(docRef.id, agendamento)
    } catch (error) {
        console.error("Error adding document: ", error);
    }
    
    

}


async function criarAgendamentoEmpresa(agendamentoId, dados) {
    const { empresaId } = dados
    await firestore.collection("empresas").doc(empresaId).collection("Agendamentos").doc(agendamentoId).set(dados)
}



async function criarAgendamentoCliente(agendamentoId, dados) {
    const {clienteId } = dados
    await firestore.collection("clientes").doc(clienteId).collection("Agendamentos").doc(agendamentoId).set(dados)
}


export async function obterAgendamentosEmpresa(empresaId) {
    let agendamentos = []
    const querySnapshot = await firestore.collection('empresas').doc(empresaId).collection("Agendamentos").get();
    querySnapshot.forEach(doc => {
        agendamentos.push(doc.data())
    })

    return agendamentos
}
export async function obterAgendamentosCliente(clienteId) {
    let agendamentos = []
    const querySnapshot = await firestore.collection('clientes').doc(clienteId).collection("Agendamentos").get();
    querySnapshot.forEach(doc => {
        agendamentos.push(doc.data())
    })

    return agendamentos
}

export function listenToUpdatesEmpresasRef(empresaId, callback) {
    firestore.collection("empresas").doc(empresaId).collection("Agendamentos").onSnapshot(callback);
}
export function listenToUpdatesClientesRef(clienteId, callback) {
    firestore.collection("clientes").doc(clienteId).collection("Agendamentos").onSnapshot(callback);
}

