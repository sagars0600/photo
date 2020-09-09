$(document).ready(function(){
    $('#myModel').modal('show');
});

$(window).on('load',function(){
    setTimeout(function(){
        $('#myModal').modal('hide');
        
},3000);
});

function lockScroll() {
    document.body.classList.toggle('lock-scroll');
};



var twentyFourHoursInMs = 24 * 60 * 60 * 1000;
var lastTimestamp = Number(localStorage.getItem("last-showed-at"));
var currentTimestamp = Date.now();
if ((currentTimestamp - lastTimestamp) >= twentyFourHoursInMs) {
    localStorage.setItem("last-showed-at", currentTimestamp);
    $("#myModal").modal("show");
    
}


// if (window.location.href.indexOf('reload')==-1) {
//     window.location.replace(window.location.href+'?reload');
// }

function navbutton() {
    document.getElementById("slider").style.width = "100%";
  }
  
  function navbutton() {
    document.getElementById("slider").style.width = "0%";
  }


    