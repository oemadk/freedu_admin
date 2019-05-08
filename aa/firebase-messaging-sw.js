importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');


firebase.initializeApp({
  'messagingSenderId': '430825408496'
});

const messaging = firebase.messaging();




// <script src="https://www.gstatic.com/firebasejs/5.8.5/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyAhXmePCfQazwTKkId3g_RQljnpDiSg74k",
//     authDomain: "klenhub-2a6b0.firebaseapp.com",
//     databaseURL: "https://klenhub-2a6b0.firebaseio.com",
//     projectId: "klenhub-2a6b0",
//     storageBucket: "klenhub-2a6b0.appspot.com",
//     messagingSenderId: "430825408496"
//   };
//   firebase.initializeApp(config);
// </script>