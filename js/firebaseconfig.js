// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
(function (window) {
  'use strict';
  var App = window.App || {};

  var FirebaseConfig = {

    apiKey: "AIzaSyDPYPaIxoZtv4UALDrVBHY0Kx-CDsi9axU",
    authDomain: "immaculate-ui.firebaseapp.com",
    projectId: "immaculate-ui",
    storageBucket: "immaculate-ui.appspot.com",
    messagingSenderId: "208641948772",
    appId: "1:208641948772:web:2caa611c12315d4782b371"

    // apiKey: "AIzaSyBRyHBhhcnMtzeMBv7HeWzqZFWsyi3K-Xk",
    // authDomain: "coffeerun-3ebec.firebaseapp.com",
    // databaseURL: "https://coffeerun-3ebec-default-rtdb.firebaseio.com",
    // projectId: "coffeerun-3ebec",
    // storageBucket: "coffeerun-3ebec.appspot.com",
    // messagingSenderId: "281900890743",
    // appId: "1:281900890743:web:629805bbbb8e03c24f2472",
    // measurementId: "G-BYMQ35PF1V"
  };
  App.FirebaseConfig = FirebaseConfig;
  firebase.initializeApp(App.FirebaseConfig)

  window.App = App;

})(window);