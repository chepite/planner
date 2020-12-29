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
    $locationWater.innerHTML="";
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
    $locationOverviewOntbijt.innerHTML="";
    let overviewOntbijtURL = firebase.database().ref(`/Meals/${datum}/ont`);
    overviewOntbijtURL.on(`value`, (snapshot) => {
        const data = snapshot.val();
        //als nog niet bestaat maak nieuw record aan met water 0
        if (data == null) {
            var updates = {};
            updates[`/Meals/${datum}/ont`] = ``;
            return firebase.database().ref().update(updates);
        }
        else {
            //als record al bestaat pass de data gewoon
            let dataArray = data.toString().split(`,`);
            console.log(dataArray);
            dataArray.forEach(element => {
                const $li = document.createElement(`li`);
                const $p = document.createElement(`p`);
                $p.textContent = element;
                $li.appendChild($p);
                $locationOverviewOntbijt.appendChild($li);
            });
        }
    });
    const $locationOverviewTs1 = document.querySelector(`.overviewTs1`);
    $locationOverviewTs1.innerHTML="";
    let overviewTs1URL = firebase.database().ref(`/Meals/${datum}/ts1`);
    overviewTs1URL.on(`value`, (snapshot) => {
        const data = snapshot.val();
        //als nog niet bestaat maak nieuw record aan met water 0
        if (data == null) {
            var updates = {};
            updates[`/Meals/${datum}/ts1`] = ``;
            return firebase.database().ref().update(updates);
        }
        else {
            //als record al bestaat pass de data gewoon
            let dataArray = data.toString().split(`,`);
            console.log(dataArray);
            dataArray.forEach(element => {
                const $li = document.createElement(`li`);
                const $p = document.createElement(`p`);
                $p.textContent = element;
                $li.appendChild($p);
                $locationOverviewTs1.appendChild($li);
            });
        }
    });
    const $locationOverviewMid = document.querySelector(`.overviewMid`);
    $locationOverviewMid.innerHTML="";
    let overviewMidURL = firebase.database().ref(`/Meals/${datum}/mid`);
    overviewMidURL.on(`value`, (snapshot) => {
        const data = snapshot.val();
        //als nog niet bestaat maak nieuw record aan met water 0
        if (data == null) {
            var updates = {};
            updates[`/Meals/${datum}/mid`] = ``;
            return firebase.database().ref().update(updates);
        }
        else {
            //als record al bestaat pass de data gewoon
            let dataArray = data.toString().split(`,`);
            console.log(dataArray);
            dataArray.forEach(element => {
                const $li = document.createElement(`li`);
                const $p = document.createElement(`p`);
                $p.textContent = element;
                $li.appendChild($p);
                $locationOverviewMid.appendChild($li);
            });
        }
    });
    const $locationOverviewTs2 = document.querySelector(`.overviewTs2`);
    $locationOverviewTs2.innerHTML = "";
    let overviewTs2URL = firebase.database().ref(`/Meals/${datum}/ts2`);
    overviewTs2URL.on(`value`, (snapshot) => {
        const data = snapshot.val();
        //als nog niet bestaat maak nieuw record aan met water 0
        if (data == null) {
            var updates = {};
            updates[`/Meals/${datum}/ts2`] = ``;
            return firebase.database().ref().update(updates);
        }
        else {
            //als record al bestaat pass de data gewoon
            let dataArray = data.toString().split(`,`);
            console.log(dataArray);
            dataArray.forEach(element => {
                const $li = document.createElement(`li`);
                const $p = document.createElement(`p`);
                $p.textContent = element;
                $li.appendChild($p);
                $locationOverviewTs2.appendChild($li);
            });
        }
    });
    const $locationOverviewAvo = document.querySelector(`.overviewAvo`);
    $locationOverviewAvo.innerHTML = "";
    let overviewAvoURL = firebase.database().ref(`/Meals/${datum}/avo`);
    overviewAvoURL.on(`value`, (snapshot) => {
        const data = snapshot.val();
        //als nog niet bestaat maak nieuw record aan met water 0
        if (data == null) {
            var updates = {};
            updates[`/Meals/${datum}/avo`] = ``;
            return firebase.database().ref().update(updates);
        }
        else {
            //als record al bestaat pass de data gewoon
            let dataArray = data.toString().split(`,`);
            console.log(dataArray);
            dataArray.forEach(element => {
                const $li = document.createElement(`li`);
                const $p = document.createElement(`p`);
                $p.textContent = element;
                $li.appendChild($p);
                $locationOverviewAvo.appendChild($li);
            });
        }
    });3
    const $locationOverviewTs3 = document.querySelector(`.overviewTs3`);
    $locationOverviewTs3.innerHTML = "";
    let overviewTs3URL = firebase.database().ref(`/Meals/${datum}/ts3`);
    overviewTs3URL.on(`value`, (snapshot) => {
        const data = snapshot.val();
        //als nog niet bestaat maak nieuw record aan met water 0
        if (data == null) {
            var updates = {};
            updates[`/Meals/${datum}/ts3`] = ``;
            return firebase.database().ref().update(updates);
        }
        else {
            //als record al bestaat pass de data gewoon
            let dataArray = data.toString().split(`,`);
            console.log(dataArray);
            dataArray.forEach(element => {
                const $li = document.createElement(`li`);
                const $p = document.createElement(`p`);
                $p.textContent = element;
                $li.appendChild($p);
                $locationOverviewTs3.appendChild($li);
            });
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