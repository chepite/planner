//database shit

var config = {
    apiKey: "AIzaSyCj1mCRNiAWSbfMTiqLdgcYyZJJt8xPS3Y",
    authDomain: "planner-e36e7.firebaseapp.com",
    databaseURL: "https://planner-e36e7-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "planner-e36e7.appspot.com"
};
var database = firebase.database();
//end database shit
let userEmail=``;
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
//splits de submitforms op omdat je anders elke keer de onaangepaste data ook weer update wat data kost ==> limited server data met free plan
function handlesubmitformOntbijt(e) {
    e.preventDefault();
    const $date = document.querySelector(`.datePicker`);
    let datum = $date.value.toString();
    //fetch previous data
    if (datum !== ``) {
        const $locationOverviewOntbijt = document.querySelector(`.overviewOntbijt`);
        $locationOverviewOntbijt.innerHTML = "";//please no hackerino
        let overviewOntbijtURL = firebase.database().ref(`/Meals/${datum}${userEmail}/ont`);
        overviewOntbijtURL.once(`value`, (snapshot) => {
            const data = snapshot.val();
            //als record al bestaat pass de data gewoon
            console.log(data);
            let ontValue = document.getElementById("descriptionOntbijt").value;
            if (data == ``) {
                let newData = data;
                newData = `${ontValue}`;
                console.log(newData);
                var updates = {};
                updates[`/Meals/${datum}${userEmail}/ont`] = newData;
                return firebase.database().ref().update(updates);
            } else {
                let newData = `${data},${ontValue}`;
                console.log(newData);
                var updates = {};
                updates[`/Meals/${datum}${userEmail}/ont`] = newData;
                return firebase.database().ref().update(updates);
            }
        });
    }
}
function handlesubmitformts1(e) {
    e.preventDefault();
    const $date = document.querySelector(`.datePicker`);
    let datum = $date.value.toString();
    //fetch previous data
    if (datum !== ``) {
        const $locationOverviewOntbijt = document.querySelector(`.overviewTs1`);
        $locationOverviewOntbijt.innerHTML = "";//please no hackerino
        let overviewts1URL = firebase.database().ref(`/Meals/${datum}${userEmail}/ts1`);
        overviewts1URL.once(`value`, (snapshot) => {
            const data = snapshot.val();
            //als record al bestaat pass de data gewoon
            console.log(data);
            let ts1Value = document.getElementById("descriptionTs1").value;
            if (data == ``) {
                let newData = `${ts1Value}`;
                console.log(newData);
                var updates = {};
                updates[`/Meals/${datum}${userEmail}/ts1`] = newData;
                return firebase.database().ref().update(updates);
            } else {
                let newData = `${data},${ts1Value}`;
                console.log(newData);
                var updates = {};
                updates[`/Meals/${datum}${userEmail}/ts1`] = newData;
                return firebase.database().ref().update(updates);
            }
        });
    }
}
function handlesubmitformmid(e) {
    e.preventDefault();
    const $date = document.querySelector(`.datePicker`);
    let datum = $date.value.toString();
    //fetch previous data
    if (datum !== ``) {
        const $locationOverviewMid = document.querySelector(`.overviewMid`);
        $locationOverviewMid.innerHTML = "";//please no hackerino
        let overviewmidURL = firebase.database().ref(`/Meals/${datum}${userEmail}/mid`);
        overviewmidURL.once(`value`, (snapshot) => {
            const data = snapshot.val();
            //als record al bestaat pass de data gewoon
            console.log(data);

            if (data == ``) {
                let midValue = document.getElementById("descriptionMid").value;
                let newData = `${midValue}`;
                console.log(newData);
                var updates = {};
                updates[`/Meals/${datum}${userEmail}/mid`] = newData;
                return firebase.database().ref().update(updates);
            } else {
                let midValue = document.getElementById("descriptionMid").value;
                let newData = `${data},${midValue}`;
                console.log(newData);
                var updates = {};
                updates[`/Meals/${datum}${userEmail}/mid`] = newData;
                return firebase.database().ref().update(updates);
            }
        });
    }

}
function handlesubmitformts2(e) {
    e.preventDefault();
    const $date = document.querySelector(`.datePicker`);
    let datum = $date.value.toString();
    //fetch previous data
    if (datum !== ``) {
        const $locationOverviewOntbijt = document.querySelector(`.overviewTs2`);
        $locationOverviewOntbijt.innerHTML = "";//please no hackerino
        let overviewts2URL = firebase.database().ref(`/Meals/${datum}${userEmail}/ts2`);
        overviewts2URL.once(`value`, (snapshot) => {
            const data = snapshot.val();
            //als record al bestaat pass de data gewoon
            console.log(data);
            if (data == ``) {
                let ts2Value = document.getElementById("descriptionTs2").value;
                let newData = `${ts2Value}`;
                console.log(newData);
                var updates = {};
                updates[`/Meals/${datum}${userEmail}/ts2`] = newData;
                return firebase.database().ref().update(updates);
            }
            else {
                let ts2Value = document.getElementById("descriptionTs2").value;
                let newData = `${data},${ts2Value}`;
                console.log(newData);
                var updates = {};
                updates[`/Meals/${datum}${userEmail}/ts2`] = newData;
                return firebase.database().ref().update(updates);
            }
        });
    }
}
function handlesubmitformavo(e) {
    e.preventDefault();
    const $date = document.querySelector(`.datePicker`);
    let datum = $date.value.toString();
    //fetch previous data
    if (datum !== ``) {
        const $locationOverviewAvo = document.querySelector(`.overviewAvo`);
        $locationOverviewAvo.innerHTML = "";//please no hackerino
        let overviewavoURL = firebase.database().ref(`/Meals/${datum}${userEmail}/avo`);
        overviewavoURL.once(`value`, (snapshot) => {
            const data = snapshot.val();
            //als record al bestaat pass de data gewoon
            console.log(data);
            let avoValue = document.getElementById("descriptionAvo").value;
            if (data == ``) {
                let newData = `${avoValue}`;
                console.log(newData);
                var updates = {};
                updates[`/Meals/${datum}${userEmail}/avo`] = newData;
                return firebase.database().ref().update(updates);
            } else {
                let newData = `${data},${avoValue}`;
                console.log(newData);
                var updates = {};
                updates[`/Meals/${datum}${userEmail}/mid`] = newData;
                return firebase.database().ref().update(updates);
            }
        });
    }
}
function handlesubmitformts3(e) {
    e.preventDefault();
    const $date = document.querySelector(`.datePicker`);
    let datum = $date.value.toString();
    //fetch previous data
    if (datum !== ``) {
        const $locationOverviewOntbijt = document.querySelector(`.overviewTs3`);
        $locationOverviewOntbijt.innerHTML = "";//please no hackerino
        let overviewts3URL = firebase.database().ref(`/Meals/${datum}${userEmail}/ts3`);
        overviewts3URL.once(`value`, (snapshot) => {
            const data = snapshot.val();
            //als record al bestaat pass de data gewoon
            console.log(data);
            if (data == ``) {
                let ts3Value = document.getElementById("descriptionTs3").value;
                let newData = `${ts3Value}`;
                console.log(newData);
                var updates = {};
                updates[`/Meals/${datum}${userEmail}/ts3`] = newData;
                return firebase.database().ref().update(updates);
            } else {
                let ts3Value = document.getElementById("descriptionTs3").value;
                let newData = `${data},${ts3Value}`;
                console.log(newData);
                var updates = {};
                updates[`/Meals/${datum}${userEmail}/ts3`] = newData;
                return firebase.database().ref().update(updates);
            }
        });
    }
}
function watermin(e) {
    e.preventDefault();
    const $date = document.querySelector(`.datePicker`);
    let datum = $date.value.toString();
    let amount;
    //get current value
    let amountURL = firebase.database().ref(`/Days/${datum}${userEmail}/waterAmount`);
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
        updates[`/Days/${datum}${userEmail}/waterAmount`] = amount;
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
    let amountURL = firebase.database().ref(`/Days/${datum}${userEmail}/waterAmount`);
    amountURL.on(`value`, (snapshot) => {
        const data = snapshot.val();
        amount = data;
    })
    amount++
    var updates = {};
    updates[`/Days/${datum}${userEmail}/waterAmount`] = amount;
    return firebase.database().ref().update(updates);
}

function loadData(e) {
    e.preventDefault();
    const $date = document.querySelector(`.datePicker`);
    let datum = $date.value.toString();
    //date format: 2020-12-29
    //gets amount of water
    const $locationWater = document.querySelector(`#waterTeller`);
    $locationWater.innerHTML = "";//please no hackerino
    let amount;
    let amountURL = firebase.database().ref(`/Days/${datum}${userEmail}/waterAmount`);
    amountURL.on(`value`, (snapshot) => {
        const data = snapshot.val();
        //als nog niet bestaat maak nieuw record aan met water 0
        if (data == null) {
            var updates = {};
            updates[`/Days/${datum}${userEmail}/waterAmount`] = 0;
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
    $locationOverviewOntbijt.innerHTML = "";//please no hackerino
    let overviewOntbijtURL = firebase.database().ref(`/Meals/${datum}${userEmail}/ont`);
    overviewOntbijtURL.on(`value`, (snapshot) => {
        const data = snapshot.val();
        //als nog niet bestaat maak nieuw record aan met water 0
        if (data == null) {
            var updates = {};
            updates[`/Meals/${datum}${userEmail}/ont`] = ``;
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
            /*let dataArray = data.toString().split(`,`);
            console.log(dataArray);
            dataArray.forEach(element => {
                const $div = document.createElement(`div`);

                $div.innerHTML = `
                <li class="divFlex">
                <input type="checkbox" id="checkbox${element}">
                <label for="checkbox${element}">${element}</label>
                </li>`;
                $locationOverviewOntbijt.appendChild($div);
            });*/
        }
    });
    const $locationOverviewTs1 = document.querySelector(`.overviewTs1`);
    $locationOverviewTs1.innerHTML = "";//please no hackerino
    let overviewTs1URL = firebase.database().ref(`/Meals/${datum}${userEmail}/ts1`);
    overviewTs1URL.on(`value`, (snapshot) => {
        const data = snapshot.val();
        //als nog niet bestaat maak nieuw record aan met water 0
        if (data == null) {
            var updates = {};
            updates[`/Meals/${datum}${userEmail}/ts1`] = ``;
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
    $locationOverviewMid.innerHTML = ""; //please no hackerino
    let overviewMidURL = firebase.database().ref(`/Meals/${datum}${userEmail}/mid`);
    overviewMidURL.on(`value`, (snapshot) => {
        const data = snapshot.val();
        //als nog niet bestaat maak nieuw record aan met water 0
        if (data == null) {
            var updates = {};
            updates[`/Meals/${datum}${userEmail}/mid`] = ``;
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
    $locationOverviewTs2.innerHTML = "";//please no hackerino
    let overviewTs2URL = firebase.database().ref(`/Meals/${datum}${userEmail}/ts2`);
    overviewTs2URL.on(`value`, (snapshot) => {
        const data = snapshot.val();
        //als nog niet bestaat maak nieuw record aan met water 0
        if (data == null) {
            var updates = {};
            updates[`/Meals/${datum}${userEmail}/ts2`] = ``;
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
    $locationOverviewAvo.innerHTML = "";//please no hackerino
    let overviewAvoURL = firebase.database().ref(`/Meals/${datum}${userEmail}/avo`);
    overviewAvoURL.on(`value`, (snapshot) => {
        const data = snapshot.val();
        //als nog niet bestaat maak nieuw record aan met water 0
        if (data == null) {
            var updates = {};
            updates[`/Meals/${datum}${userEmail}/avo`] = ``;
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
    }); 3
    const $locationOverviewTs3 = document.querySelector(`.overviewTs3`);
    $locationOverviewTs3.innerHTML = "";//please no hackerino
    let overviewTs3URL = firebase.database().ref(`/Meals/${datum}${userEmail}/ts3`);
    overviewTs3URL.on(`value`, (snapshot) => {
        const data = snapshot.val();
        //als nog niet bestaat maak nieuw record aan met water 0
        if (data == null) {
            var updates = {};
            updates[`/Meals/${datum}${userEmail}/ts3`] = ``;
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
/*function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[id="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.textContent);
    });
    return values;
}
function deleteData() {
    
   
}*/

const init = () => {
    //getting current user
    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          userEmail = user.email;
          userEmail= userEmail.substring(0, userEmail.lastIndexOf(`@`));
          if(userEmail.indexOf(`.`) !==-1){
            userEmailfirstHalf= userEmail.substring(0,userEmail.indexOf(`.`)); 
            userEmailsecondHalf = userEmail.substring(userEmail.indexOf(`.`)+1);
            userEmail = `${userEmailfirstHalf}${userEmailsecondHalf}`;
          }
        } else {
         window.alert(`please contact the maker of the webapp, your email is not valid in our current system`);
        }
    });

    //form submits
    const $ontbijtform = document.querySelector(`.ontbijt-form`);
    $ontbijtform.addEventListener(`submit`, handlesubmitformOntbijt);
    const $ts1form = document.querySelector(`.ts1-form`);
    $ts1form.addEventListener(`submit`, handlesubmitformts1);
    const $midform = document.querySelector(`.Mid-form`);
    $midform.addEventListener(`submit`, handlesubmitformmid);
    const $ts2form = document.querySelector(`.Ts2-form`);
    $ts2form.addEventListener(`submit`, handlesubmitformts2);
    const $avoform = document.querySelector(`.Avo-form`);
    $avoform.addEventListener(`submit`, handlesubmitformavo);
    const $ts3form = document.querySelector(`.Ts3-form`);
    $ts3form.addEventListener(`submit`, handlesubmitformts3);
    //buttons shit
    /*const $deletebutton = document.querySelector(`#delete`);
    $deletebutton.addEventListener(`click`, deleteData);*/
    const $loadbutton = document.querySelector(`#load`);
    $loadbutton.addEventListener(`click`, loadData);
    const $minbutton = document.querySelector(`#min`);
    $minbutton.addEventListener(`click`, watermin) /*waterMin was og*/;
    const $plusbutton = document.querySelector(`#plus`);
    $plusbutton.addEventListener(`click`, waterplus);
}
init();