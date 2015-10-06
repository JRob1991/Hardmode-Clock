$(function(){

  // Convert Time to Hex, add 0 if only one character
  function formatTimeHex(time) {
    return ("0" + time.toString(16)).slice(-2).toUpperCase();
  }

  // Get color from date object
  function getHexColor(date) {
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    
    return formatTimeHex(hr) + 
    formatTimeHex(min) + 
    formatTimeHex(sec);
  }

  //Starts the clock
  (function startClock() {
    var color = getHexColor(new Date());
    //set background color
    $('body').css('background', '#' + color);
    //set time
    $('#clock').html(color);  
    setTimeout(startClock, 1000);
  }());


}());

