var addedProjectIndicator = document.querySelector("#local-storage-indicator")
var str = "\u2713"
var saveBtnNineEl = document.querySelector("#saveBtnNine")
var saveBtnTenEl = document.querySelector("#saveBtnTen")
var saveBtnElevenEl = document.querySelector("#saveBtnEleven")
var saveBtnNoonEl = document.querySelector("#saveBtnNoon")
var saveBtnOneEl = document.querySelector("#saveBtnOne")
var saveBtnTwoEl = document.querySelector("#saveBtnTwo")
var saveBtnThreeEl = document.querySelector("#saveBtnThree")
var saveBtnFourEl = document.querySelector("#saveBtnFour")
var saveBtnFiveEl = document.querySelector("#saveBtnFive")
var userinputNineSpan = document.querySelector(".span-nine")
//var x = day.getHours()
//console.log(x)


//update day and date when application is opened
var currentDayEl = moment().format("dddd, MMMM Do")
$("#currentDay").text(currentDayEl);
//console.log(currentDayEl)

//retrieval of project info from local storage so they remain on page after page is refreshed/closed-reopened
    //function renderLastRegistered(inputNineEl){
    //  var exsistingInputNine = localStorage.getItem("9am");
    //userinputNineSpan.textContent = inputNineEl;
    //}
var updateInfo= localStorage.getItem("9am");
console.log(updateInfo);

var updateInfoTen= localStorage.getItem("10am");
console.log(updateInfoTen);

var updateInfoEleven= localStorage.getItem("11am");
console.log(updateInfoEleven);

var updateInfoNoon= localStorage.getItem("12pm");
console.log(updateInfoNoon);

var updateInfoOne= localStorage.getItem("1pm");
console.log(updateInfoOne);

var updateInfoTwo= localStorage.getItem("2pm");
console.log(updateInfoTwo);

var updateInfoThree= localStorage.getItem("3pm");
console.log(updateInfoThree);

var updateInfoFour= localStorage.getItem("4pm");
console.log(updateInfoFour);

var updateInfoFive= localStorage.getItem("5pm");
console.log(updateInfoFive);
//userinputNineSpan.textContent= updateInfo
//}

//Completed=button to save user input into local storage
//Completed-check indicator to alert user to when a new project has been saved
//addedProjectIndicator needs to revert back to original text to after time inteval
saveBtnNineEl.addEventListener("click", function (event) {
    event.preventDefault();
    addedProjectIndicator.textContent = ("Project added" + str);
    var inputNineEl = document.querySelector(".inputNine").value;
    localStorage.setItem("9am", inputNineEl);
    console.log(inputNineEl)
});

saveBtnTenEl.addEventListener("click", function (event) {
    event.preventDefault();
    addedProjectIndicator.textContent = ("Project added" + str)
    var inputTenEl = document.querySelector(".inputTen").value;
    localStorage.setItem("10am", inputTenEl);
    console.log(inputTenEl)

});
saveBtnElevenEl.addEventListener("click", function (event) {
    event.preventDefault();
    addedProjectIndicator.textContent = ("Project added" + str);
    var inputElevenEl = document.querySelector(".inputEleven").value;
    localStorage.setItem("11am", inputElevenEl);
    console.log(inputElevenEl)

});
saveBtnNoonEl.addEventListener("click", function (event) {
    event.preventDefault();
    addedProjectIndicator.textContent = ("Project added" + str);
    var inputNoonEl = document.querySelector(".inputNoon").value;
    localStorage.setItem("12pm", inputNoonEl);
    console.log(inputNoonEl)
});
saveBtnOneEl.addEventListener("click", function (event) {
    event.preventDefault();
    addedProjectIndicator.textContent = ("Project added" + str);
    var inputOneEl = document.querySelector(".inputOne").value;
    localStorage.setItem("1pm", inputOneEl);
    console.log(inputOneEl)
});
saveBtnTwoEl.addEventListener("click", function (event) {
    event.preventDefault();
    addedProjectIndicator.textContent = ("Project added" + str);
    var inputTwoEl = document.querySelector(".inputTwo").value;
    localStorage.setItem("2pm", inputTwoEl);
    console.log(inputTwoEl)
});
saveBtnThreeEl.addEventListener("click", function (event) {
    event.preventDefault();
    addedProjectIndicator.textContent = ("Project added" + str);
    var inputThreeEl = document.querySelector(".inputThree").value;
    localStorage.setItem("3pm", inputThreeEl);
    console.log(inputThreeEl)
});
saveBtnFourEl.addEventListener("click", function (event) {
    event.preventDefault();
    addedProjectIndicator.textContent = ("Project added" + str);
    var inputFourEl = document.querySelector(".inputFour").value;
    localStorage.setItem("4pm", inputFourEl);
    console.log(inputFourEl)
});
saveBtnFiveEl.addEventListener("click", function (event) {
    event.preventDefault();
    addedProjectIndicator.textContent = ("Project added" + str);
    var inputFiveEl = document.querySelector(".inputFive").value;
    localStorage.setItem("5pm", inputFiveEl);
    console.log(inputFiveEl)
});

//rows to change color to indicate if time slot is past/present/future
    //if, else if, else argument?