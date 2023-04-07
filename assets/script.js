var userInput = ""

// loads the page

$(document).ready(function () {
  console.log("first output working")

  // current time output var
var currentTime = dayjs().format('MMMM D, YYYY');
$('#currentDay').text(currentTime);

  // event listener for all elements with class "saveBtn"
  $(".saveBtn").on("click", function () {

    // get the parent ID and the value of the sibling textarea
    var textArea = $(this).siblings(".description").val();
    var timeIdx = $(this).parent().attr("id");

// push to local
    localStorage.setItem(timeIdx, textArea);
    console.log(timeIdx);
    console.log(textArea);
  });

// time block
$(".time-block").each(function() {
  var timeIdx = $(this).attr("id");

// store to local
  var storedValue = localStorage.getItem(timeIdx);
// test LS 
  if (storedValue !== null)
  $(this).find(".description").val(storedValue);
});


setInterval (function() {
  $(".time-block").each(function() {

    var timeIdx = $(this).attr("id");
  // removes hour -
    var hourStr = timeIdx.slice(5);

   
    var hourNum = parseInt(hourStr);
    var timeNum = parseInt(dayjs().format("HH"));

    //Set colours for times
    if (hourNum < timeNum) {
      $(this).addClass("past");
    } else if (hourNum == timeNum) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  }, 1000);
  });
});