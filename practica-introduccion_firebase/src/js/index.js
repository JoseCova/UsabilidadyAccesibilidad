// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyClpKnNKhEkr9LKTJcBz7-S8nyr9C_Tpqw",
  authDomain: "fir-informe.firebaseapp.com",
  databaseURL: "https://fir-informe.firebaseio.com",
  projectId: "fir-informe",
  storageBucket: "fir-informe.appspot.com",
  messagingSenderId: "888548857205",
  appId: "1:888548857205:web:ef486fd62939488def6f3c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// get database 
let bdd = firebase.database();

// Crear nueva entrada entrada en la base de datos 
let bddref = bdd.ref("usuarios");


// Objeto que se va a insertar en la base de datos
let usuario = {
  nombre: "José Javier Caraballo Cova",
  alu: "alu0101023663",
  edad: 21,
  AprobaraUYA: true
};

let usuario2 = {
  nombre: "Néstor Torres Díaz",
  alu: "alu0101021768",
  edad: 22,
  AprobaraUYA: true
};

let usuario3 = {
  nombre: "Edgar Figueroa González",
  alu: "alu0101043838",
  edad: 21,
  AprobaraUYA: true
};

let usuarios = { usuario, usuario2, usuario3 };

bddref.set(usuarios)
  .then(() => console.log("Se ha introducido correctamente"))
  .catch(error => console.log(`Ups, ha habido un error: ${error}`));

let bddref2 = bdd.ref("Another");

bddref2.set({
  data: "Esto es otra referencia en la base de datos"
}).then(() => console.log("Se ha introducido correctamente"))
  .catch(error => console.log(`Ups, ha habido un error: ${error}`));