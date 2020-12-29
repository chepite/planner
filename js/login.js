function login() {
    const user = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(user, password)
        .then((user) => {
            window.open(`../index.html`, `_self`);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert(`${errorCode}: ${errorMessage}`)
        });
}

