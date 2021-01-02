function logout(e){
e.preventDefault();
firebase.auth().signOut().then(() => {
    window.open(`index.html`, `_self`);
  }).catch((error) => {
    window.alert(`there was an error signing out`);
  });
}

function init(){
 const $buttonLogout = document.querySelector(`#logout`);
 $buttonLogout.addEventListener(`click`, logout);
}
init();