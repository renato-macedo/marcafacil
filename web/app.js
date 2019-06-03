const firebaseConfig = {
    apiKey: "AIzaSyBP1L9ebuPSW8BFsZVY7fuKM5_RChV9SuU",
    authDomain: "projetoada-d1872.firebaseapp.com",
    databaseURL: "https://projetoada-d1872.firebaseio.com",
    projectId: "projetoada-d1872",
    storageBucket: "projetoada-d1872.appspot.com",
    messagingSenderId: "13176040312",
    appId: "1:13176040312:web:22ee1c69bc3d2b84"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = app.auth()
  const firestore = firebase.firestore()
  console.log(firestore)

function Registrar() {
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const tipo = document.getElementById('tipo').value
    console.log(tipo)
    newUser = {
        firstName,
        lastName,
        email,
        password,
        tipo
    }

    auth.createUserWithEmailAndPassword(email, password).then(user => {
        const uid = user.user.uid
        let collection = ''
        console.log(user)
        tipo === "cliente" ? collection = "clientes" : collection = "empresas"
        firestore.collection(collection).doc(uid).set(newUser)
        .then(() => alert("Cadastro Feito Com Sucesso"))
        .catch((err) => alert("Ocorreu um erro"))


        
    })

}

function lerdados() {
    firestore.collection("clientes").doc("aaZ9mWiRxXg00jmx7FDeu0nV8492").get().then(doc => {
        console.log(doc.data())
    })
}