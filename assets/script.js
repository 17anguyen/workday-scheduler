// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



// var saveButton = $('#hour-1 .saveBtn');
// var textArea1 = $('#hour-1 textarea');


// saveButton1.on('click', function(event) {
//   event.preventDefault();
//   var text = textArea1.val();
//   localStorage.setItem('text1', JSON.stringify(text));
//   console.log(text);
//   retrieved('text1');
// });

// div1.removeClass('future').addClass('present');
 var userInput = ""
var currentTime = dayjs().format('MMMM D, YYYY');
$('#3a').text(currentTime);


$(document).ready(function () {
  console.log("first output working")

  $(".saveBtn").on("click", function () {

    var timeIdx = $(this).parent()[0].id;
    var textArea = $(this).siblings("textarea")[0].value;

    localStorage.setItem('textArea', JSON.stringify(textArea));

    var retrievedText = JSON.parse(localStorage.getItem('textArea'));
    
    $('#userInput').text(retrievedText);
    console.log(retrievedText);

    console.log(timeIdx);
    console.log(textArea);


  })


  console.log(dayjs().format("HH"));
  $("#currentDay").text(dayjs().format("dddd, MMMM D"))
});





function retrieved() {
  var retrievedText = JSON.parse(localStorage.getItem('textArea'));
 
  // textArea.val(retrievedText);
}
retrieved('textArea');





  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
