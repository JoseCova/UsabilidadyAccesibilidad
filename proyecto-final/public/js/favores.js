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

document.addEventListener("DOMContentLoaded", (event) => {

    const list = document.querySelector("#personas");
    list.innerHTML = "";
    
    database.collection("datos").get().then((snapshot) => {
        snapshot.forEach( (doc) => {
            list.innerHTML += `<a href="#!" class="collection-item azul"> <i class="material-icons circle blue">folder</i> 
            Nombre: ` + doc.data().name + " <br> Favor que desea realizar: "+ doc.data().favor + " <br> Horas disponible: " + doc.data().hours + `</a>`; 
        });
    })
});