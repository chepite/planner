//database shit

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
    apiKey: "AIzaSyCj1mCRNiAWSbfMTiqLdgcYyZJJt8xPS3Y",
    authDomain: "planner-e36e7.firebaseapp.com",
    databaseURL: "https://planner-e36e7-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "planner-e36e7.appspot.com"
};

// Get a reference to the database service
var database = firebase.database();


//end database shit


const data = [];
/*structure = {date: datum, 
water: int} 
*/
function watermin(e) {
    e.preventDefault();
    const $date = document.querySelector(`.datePicker`);
    let datum = $date.value.toString();
    let amount;
    let amountURL = firebase.database().ref(`/Days/${datum}/waterAmount`); /*later testday veranderen met datum uit datepicker*/
    amountURL.on(`value`, (snapshot) => {
        const data = snapshot.val();
        amount = data;
        console.log(amount);
        $location.textContent = amount;
    })
    amount--;
    var updates = {};
    updates[`/Days/${datum}/waterAmount`] = amount;
    return firebase.database().ref().update(updates);

}
function waterplus(e) {
    e.preventDefault();
    const $date = document.querySelector(`.datePicker`);
    let datum = $date.value.toString();

    let amount;
    let amountURL = firebase.database().ref(`/Days/${datum}/waterAmount`); /*later testday veranderen met datum uit datepicker*/
    amountURL.on(`value`, (snapshot) => {
        const data = snapshot.val();
        amount = data;
        console.log(amount);
        $location.textContent = amount;
    })
    amount++
    var updates = {};
    updates[`/Days/${datum}/waterAmount`] = amount;
    return firebase.database().ref().update(updates);
}
/*firebase.database().ref(`/Days/${datum}/waterAmount`).set({
    waterAmount: amount
});*/


function loadData(e) {
    e.preventDefault();
    const $date = document.querySelector(`.datePicker`);
    let datum = $date.value.toString();
    //date format: 2020-12-29
    const $location = document.querySelector(`#waterTeller`);
    //gets amount of water
    let amount;
    let amountURL = firebase.database().ref(`/Days/${datum}/waterAmount`); /*later testday veranderen met datum uit datepicker*/
    amountURL.on(`value`, (snapshot) => {
        const data = snapshot.val().toString();
        amount = data;
        console.log(amount);
        $location.textContent = amount.toString();
    })
    //display new data on website
}

const init = () => {
    //load


    //buttons shit
    const $loadbutton = document.querySelector(`#load`);
    $loadbutton.addEventListener(`click`, loadData);
    const $minbutton = document.querySelector(`#min`);
    $minbutton.addEventListener(`click`, watermin) /*waterMin was og*/;
    const $plusbutton = document.querySelector(`#plus`);
    $plusbutton.addEventListener(`click`, waterplus);
}
init();