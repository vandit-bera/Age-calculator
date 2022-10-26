/* Create variable and store value */
const container = document.querySelector(".container");
const error = document.querySelector(".error");

let dob = document.querySelector("#dob");
/* Give input eventlistener to input */
dob.addEventListener("input", displayAge);

/* Create current date and store in variable */
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();

/* gateAge function */
function getAge(){
    return dob.value;
}

/* calcAge function */
function calcAge(){
    let age = getAge();
    const ageArr = age.split("-");
    return {
        years: year - ageArr[0],
        months: month - ageArr[1],
        days: day - ageArr[2]
    }
}

/* displayAge function */
function displayAge(){
    let age = calcAge();
    for(e in age){
        if(age[e] < 0){
            error.style.display = "block";
        } else {
            error.style.display = "none";
            container.querySelector(".age span").innerText = age[e];
        }
    }
    container.querySelector("#years").innerText = age.years;
    container.querySelector("#months").innerText = age.months;
    container.querySelector("#days").innerText = age.days;
}