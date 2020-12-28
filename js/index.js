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
    const $watervalue = document.querySelector(`#waterTeller`);
    let value = parseInt($watervalue.textContent);
    if (value > 0) {
        value--;
        //  data.find(data.date === datum);
        for (i = 0; i < data.length; i++) {
            if (data[i].date == datum) {
                data[i].watervalue = value;
                console.log(data[i]);
            }
        }
        $watervalue.textContent = value.toString();
    }

}
function waterplus(e) {
    e.preventDefault();
    const $date = document.querySelector(`.datePicker`);
    let datum = $date.value.toString();
    const $watervalue = document.querySelector(`#waterTeller`);
    let value = parseInt($watervalue.textContent);
    value++;
    //add value to database
    /*for (i = 0; i < data.length; i++) {
        if (data[i].date == datum) {
            data[i].watervalue = value;
            console.log(data[i]);
        }
    }*/


    //display new data on website
    $watervalue.textContent = value.toString();
}
function loadData(e) {
    e.preventDefault();
    const $date = document.querySelector(`.datePicker`);
    let datum = $date.value.toString();
    const $p = document.createElement(`p`);
    const $location= document.querySelector(`.test`);
    
    let actualData;
    let dataURL= firebase.database().ref('/Days/' + `testday` + `/Date`);
   dataURL.on(`value`, (snapshot)=>{
       const data= snapshot.val().toString();
        actualData = data;
        console.log(actualData);
   })

   

    
    $p.textContent = actualData;
    $location.appendChild($p);
    //display new data on website

}

const init = () => {
    //load
    
    
    //buttons shit
    const $minbutton = document.querySelector(`#min`);
    $minbutton.addEventListener(`click`, loadData) /*waterMin was og*/;
    const $plusbutton = document.querySelector(`#plus`);
    $plusbutton.addEventListener(`click`, waterplus);
}
init();