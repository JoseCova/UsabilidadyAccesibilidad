
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
  
  const txtemail = document.getElementById("email");
  const txtcontraseña = document.getElementById("password");
  const btnLogin = document.getElementById("btnLogin");
  const btnRegistro = document.getElementById("btnRegistro");
  const logout = document.getElementById("logout");

  // INICIO DE SESIÓN
  btnLogin.addEventListener("click", e => {
      const email = txtemail.value;
      const password = txtcontraseña.value;
      const auth = firebase.auth();
      const promise = auth.signInWithEmailAndPassword(email,password);
      promise.then(e => alert("Has iniciado sesión correctamente"));
      promise.catch(e => alert("No existe el usuario, regístrate"));
  });

  // REGISTRO
  btnRegistro.addEventListener("click", e => {
    const email = txtemail.value;
    const password = txtcontraseña.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.then(e => alert("Te has registrado correctamente"));
    promise.catch(e => alert(e.message));
  });

  logout.addEventListener("click", e => {
    alert("Has salido correctamente de la cuenta");  
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      logout.classList.remove('hide');
    } else {
      logout.classList.add('hide');
    }    
  });