const data = [{ date: `2020-12-28`, watervalue: 6 }];
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
    for (i = 0; i < data.length; i++) {
        if (data[i].date == datum) {
            data[i].watervalue = value;
            console.log(data[i]);
        }
    }
    $watervalue.textContent = value.toString();
}
function loadData(e) {
    e.preventDefault();
    const $date = document.querySelector(`.datePicker`);
    let datum = $date.value.toString();
    const $watervalue = document.querySelector(`#waterTeller`);
    for (i = 0; i < data.length; i++) {
        if (data[i].date == datum) {
            $watervalue.textContent = data[i].watervalue.toString();
        }
    }


}

const init = () => {
    //date
    const $date = document.querySelector(`.datePicker`);

    $date.addEventListener(`change`, loadData);
    //buttons shit
    const $minbutton = document.querySelector(`#min`);
    $minbutton.addEventListener(`click`, watermin);
    const $plusbutton = document.querySelector(`#plus`);
    $plusbutton.addEventListener(`click`, waterplus);
}
init();