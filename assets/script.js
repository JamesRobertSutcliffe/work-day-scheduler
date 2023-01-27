$(document).ready(function(){



    //Save button event listener
    $('.saveBtn').on('click', function(){

    
let timeID = $(this).parent().attr("id");
let value = $(this).siblings('.description').val();

localStorage.setItem(timeID, value);

$(".notification").addClass('show');

setTimeout(function(){
    $('.notification').removeClass('show');
}, 4000);
});

function hourUpdate (){
    let currentHour = moment().hours();
    console.log(currentHour);
for (let i = 0; i < $('.time-block').length; i++){
    
} 

}

hourUpdate();


});

