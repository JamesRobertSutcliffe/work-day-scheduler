$(document).ready(function(){

    let momentDate = moment().format(('dddd MMMM Do'));
    let todayDate = $('#today-date');
    todayDate.text(momentDate);
    
    console.log(momentDate)

    //Save button event listener
    $('.saveBtn').on('click', function(){

    
let timeID = $(this).parent().attr("id");
let value = $(this).siblings('.description').val();

localStorage.setItem(timeID, value);


// Displays message to user that the task has been saved to local storage 

$(".notification").addClass('show');

setTimeout(function(){
    $('.notification').removeClass('show');
}, 4000);
});

function hourUpdate (){
    let currentHour = moment().hours();
    let hour = $(".time-block");


    for (let i = 0; i < hour.length; i++){
let hourID = hour[i].getAttribute("id");
let hourClass = hour[i];

if (hourID < currentHour){
    $(hourClass).addClass("past");
} else if (hourID == currentHour) {
    $(hourClass).removeClass("past");
    $(hourClass).addClass("present");
    console.log('working');
} if (hourID > currentHour){
    $(hourClass).removeClass("past");
    $(hourClass).addClass("present");
    $(hourClass).addClass("future")
}};

};

hourUpdate();

let interval = setInterval(hourUpdate, 15000);

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));


});

