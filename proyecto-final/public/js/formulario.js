// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB_ejoYllafjSBBE3XeQIT9BarCFEijCsQ",
  authDomain: "uya-proyecto-final.firebaseapp.com",
  databaseURL: "https://uya-proyecto-final.firebaseio.com",
  projectId: "uya-proyecto-final",
  storageBucket: "uya-proyecto-final.appspot.com",
  messagingSenderId: "1030376776101",
  appId: "1:1030376776101:web:511c39ddc9c3f3b3a8c84c",
};

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
const btnSubmit = document.querySelector("#btnSubmit");

btnSubmit.addEventListener("click", () => {
  const txtname = document.querySelector("#nombre").value;
  const txtapellido = document.querySelector("#apellidos").value;
  const txtcorreo = document.querySelector("#correo").value;
  const txtfavor = document.querySelector("#zona-texto").value;
  const number_hours = document.querySelector("#horas").value;

  // console.log(txtname);
  // console.log(txtfavor);
  // console.log(number_hours);
  
  alert("Se ha registrado correctamente");
  database.collection("datos").add({
    name: txtname,
    apellido: txtapellido,
    favor: txtfavor,
    hours: number_hours
  }).then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  }).catch(function(error) {
    console.error("Error adding document: ", error);
  }); 
});

// Escritura de los elementos del documento
document.addEventListener("DOMContentLoaded", (event) => {
  database.collection("datos").get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, " => ", doc.data());
      });
    });
});