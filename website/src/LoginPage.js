
$( "#complete" ).click(function() {
  firebase.auth().signInWithEmailAndPassword(document.getElementById('email').value, document.getElementById('password').value)
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
});
