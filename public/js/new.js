function newUser(){
    const user = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordrepeat = document.getElementById("passwordRetype").value;
    if(password === passwordrepeat){
    firebase.auth().createUserWithEmailAndPassword(user, password)
        .then((user) => {
            var user = firebase.auth().currentUser;
            user.sendEmailVerification().then(function () {
                window.alert(`Please check your email for confirmation.`);
                window.open(`./index.html`, `_self`);
            }).catch(function (error) {
                window.alert(`We can not confirm your email adress now try again later.`);
            });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
    }
    else{
        window.alert(`The passwords don't match.`)
    }
}