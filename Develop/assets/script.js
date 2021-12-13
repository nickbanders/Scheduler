var currentDay = moment().format('dddd, MMMM Do');

$("#currentDay").text(currentDay);


function hourStatus(){
    var currentTime = moment().hour();

    $(".time-block").each(function(){
    var timeBlock = parseInt($(this).attr("id"));
   

    if(timeBlock < currentTime){
     $(this).addClass("past");
     $(this).removeClass("future");
     $(this).removeClass("present");
    }

    else if(timeBlock === currentTime){
     $(this).addClass("present");
     $(this).removeClass("past");
     $(this).removeClass("future");
    }

    else{
     $(this).addClass("future");
     $(this).removeClass("past");
     $(this).removeClass("present");
     }
    });


};


function loadTasks(){
    for(var i = 9; i < 18; i++){
        $("#" + i + " .text").val(localStorage.getItem(i));
    }
};



$(".saveBtn").on("click", function(){
var hour = $(this).parent().attr("id");

    var inputText = $(this).siblings(".text").val();

    localStorage.setItem(hour, inputText);
});

loadTasks();

hourStatus();

setInterval(function() {
    hourStatus();
}, 60000);