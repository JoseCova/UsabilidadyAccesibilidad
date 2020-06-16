// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyB_ejoYllafjSBBE3XeQIT9BarCFEijCsQ",
    authDomain: "uya-proyecto-final.firebaseapp.com",
    databaseURL: "https://uya-proyecto-final.firebaseio.com",
    projectId: "uya-proyecto-final",
    storageBucket: "uya-proyecto-final.appspot.com",
    messagingSenderId: "1030376776101",
    appId: "1:1030376776101:web:511c39ddc9c3f3b3a8c84c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.firestore();

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  const btnSubmit = document.getElementById("btnSubmit");

  btnSubmit.addEventListener("click", () => {
    const txtname = document.querySelector("#nombre").value;
    const txtfavor = document.querySelector("#zona-texto").value;
    const number_hours = document.querySelector("#rango").value;
    console.log(txtname);
    console.log(txtfavor);
    console.log(number_hours);
  
    database.collection("datos").add({
      txtname: txtname,
      txtfavor: txtfavor,
      number_hours: number_hours
    })
    // .then((docRef) => {
    //     document.querySelector("#nombre").value = "";
    //     document.querySelector("#zona-texto").value = "";
    //     document.querySelector("#rango").value = "";
    //     const contactModal = document.querySelector("#modalContact");
    //     const instance = M.Modal.getInstance(contactModal);
    //     instance.close()
    //     M.toast({
    //         html: `Contacto añadido con éxito`,
    //         classes: "rounded blue-grey darken-2",
    //         displayLength: 50000
    //     })
    // }).catch((docRef) => {
    //     document.querySelector("#nombre").value = "";
    //     document.querySelector("#zona-texto").value = "";
    //     document.querySelector("#rango").value = "";
    //     const contactModal = document.querySelector("#modalContact");
    //     const instance = M.Modal.getInstance(contactModal);
    //     instance.close()
    //     M.toast({
    //         html: `Contacto añadido con éxito`,
    //         classes: "rounded blue-grey darken-2",
    //         displayLength: 50000
    //     })
    // })  
  });

  // Escritura de los elementos del documento
document.addEventListener("DOMContentLoaded", event => {
    database.collection("datos").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
        });
    });
    
});

 