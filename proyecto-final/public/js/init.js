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

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});