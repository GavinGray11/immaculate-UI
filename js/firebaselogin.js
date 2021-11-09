firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    // document.getElementById("user_div").style.display = "block";
    document.getElementById("createUser_div").style.display = "none";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      //document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

      

      const state = { 'page_id': 1, 'user_id': 5 }
      const title = ''
      const url = '../index.html'

      console.log('changing history')

      //window.location = 'http://127.0.0.1:5500/CPSC349/Project1/gavinBranch/immaculate-UI/index.html'
      window.history.back();

      //document.getElementById("userAccount").innerHTML = email_id
      localStorage["userEmail"] = email_id;
      //localStorage.setItem()
    }
  } else {
    // No user is signed in.

    // document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});



firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage + " Email: " + userEmail + " Password " + userPass);

    // ...
  });

}

function unhideCreate() {

  document.getElementById("createUser_div").style.display = "block";
  document.getElementById("login_div").style.display = "none";

}

function unhideLogin() {

  document.getElementById("createUser_div").style.display = "none";
  document.getElementById("login_div").style.display = "block";

}

function logout() {
  console.log('Signing out from firebaseLogin');
  firebase.auth().signOut();
  localStorage.removeItem("userEmail");
  document.getElementById("userAccount").innerHTML = "Please Login";
}

function createUser(){

  var userEmail = document.getElementById("create_email_field").value;
  var userPass = document.getElementById("create_password_field").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage + " Email: " + userEmail + " Password " + userPass);

    // ...
  });

}
