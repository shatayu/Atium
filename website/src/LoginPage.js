
$( "#complete" ).click(function() {
  console.log("clicked");
  firebase.auth().signInWithEmailAndPassword(document.getElementById('email').value, document.getElementById('password').value)
    .then((response) => {
      if (response.hasOwnProperty("user")) {

        //alert("logged in");
         window.open("./Main.html", "_self");
      }
    })
    .catch(function(error, user) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  
    if (errorCode === 'auth/wrong-password') {
     alert('Wrong password.');
      console.log(error);
    }  else if (errorCode === 'auth/invalid-email'){
     alert(errorMessage);
     console.log(error);
    } 

  }
);

});

