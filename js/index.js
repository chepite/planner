//database shit
var config = {
    apiKey: "AIzaSyCj1mCRNiAWSbfMTiqLdgcYyZJJt8xPS3Y",
    authDomain: "planner-e36e7.firebaseapp.com",
    databaseURL: "https://planner-e36e7-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "planner-e36e7.appspot.com"
};
var database = firebase.database();
//end database shit



/*structure = {date:2020-05-18,
water: int} 

Meals:{  selector van een meal is de data
    2020-05-18:{
    ont: ...
    ts1: ...
    mid: ...
    ts2: ...
    avo: ...
    ts3: ...
    }
}
*/
function handlesubmitform(e) {
    e.preventDefault();
    //wat moet submit doen:
    /*
    1. de data weergeven in een lijst die je kan editen
    2. de data updaten in de databse
    3. (optioneel) de data ondereen weergeven in een tabel
    */


}
function watermin(e) {
    e.preventDefault();
    const $date = document.querySelector(`.datePicker`);
    let datum = $date.value.toString();
    let amount;
    //get current value
    let amountURL = firebase.database().ref(`/Days/${datum}/waterAmount`); /*later testday veranderen met datum uit datepicker*/
    amountURL.on(`value`, (snapshot) => {
        const data = snapshot.val();
        amount = data;
        console.log(amount);
        $location.textContent = amount;
    })
    if (amount > 0) {
        //edit curent value
        amount--;
        //update value
        var updates = {};
        updates[`/Days/${datum}/waterAmount`] = amount;
        return firebase.database().ref().update(updates);
    } else {
        console.error(`je water amount is ${amount}, je kan geen negatief amount bekomen`);
    }
}
function waterplus(e) {
    e.preventDefault();
    const $date = document.querySelector(`.datePicker`);
    let datum = $date.value.toString();
    let amount;
    let amountURL = firebase.database().ref(`/Days/${datum}/waterAmount`);
    amountURL.on(`value`, (snapshot) => {
        const data = snapshot.val();
        amount = data;
    })
    amount++
    var updates = {};
    updates[`/Days/${datum}/waterAmount`] = amount;
    return firebase.database().ref().update(updates);
}

function loadData(e) {
    e.preventDefault();
    const $date = document.querySelector(`.datePicker`);
    let datum = $date.value.toString();
    //date format: 2020-12-29
    //gets amount of water
    const $locationWater = document.querySelector(`#waterTeller`);
    let amount;
    let amountURL = firebase.database().ref(`/Days/${datum}/waterAmount`);
    amountURL.on(`value`, (snapshot) => {
        const data = snapshot.val();
        //als nog niet bestaat maak nieuw record aan met water 0
        if (data == null) {
            var updates = {};
            updates[`/Days/${datum}/waterAmount`] = 0;
            $locationWater.textContent = 0;
            return firebase.database().ref().update(updates);
        }
        else {
            //als record al bestaat pass de data gewoon
            amount = data;
            $locationWater.textContent = amount.toString();
        }
    });
    //fetch ontbijtdata
    const $locationOverviewOntbijt = document.querySelector(`.overviewOntbijt`);
    let overviewOntbijtURL = firebase.database().ref(`/Meals/${datum}/ont`);
    overviewOntbijtURL.on(`value`, (snapshot) => {
        const data = snapshot.val();
        //als nog niet bestaat maak nieuw record aan met water 0
        if (data == null) {
            var updates = {};
            updates[`/Meals/${datum}/ont`] = `spacefiller`;
            $li.textContent = `spacefiller`;
            $locationOverviewOntbijt.appendChild($li);
            return firebase.database().ref().update(updates);
        }
        else {
            //als record al bestaat pass de data gewoon
            let dataArray = data.toString().split(`,`);
            console.log(dataArray);
            for (i = 0; i < dataArray.lenght; i++) {
                const $li = document.createElement(`li`);
                const $p = document.createElement(`p`);
                $p.innerHTML = dataArray[i];
                $li.appendChild($p);
                $locationOverviewOntbijt.appendChild($li);
            }
        }
    });


}

const init = () => {
    //buttons shit
    const $loadbutton = document.querySelector(`#load`);
    $loadbutton.addEventListener(`click`, loadData);
    const $minbutton = document.querySelector(`#min`);
    $minbutton.addEventListener(`click`, watermin) /*waterMin was og*/;
    const $plusbutton = document.querySelector(`#plus`);
    $plusbutton.addEventListener(`click`, waterplus);
}
init();