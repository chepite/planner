function login(e) {
    e.preventDefault();
    console.log(`werkt`)
    
    const user = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(user, password)
        .then((user) => {
           window.open(`./app.html`, `_self`);
            
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert(`${errorCode}: ${errorMessage}`)
        });
}

const init = () =>{
    const $loginbutton = document.querySelector(`.Inlogbutton`);
    $loginbutton.addEventListener(`click`, login);
}
init();

