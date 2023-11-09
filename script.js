//get the element
var actualDate = document.getElementById("time");

function updateTime(){
    //Creates a new date
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, "0");
    var minutes = now.getMinutes().toString().padStart(2, "0");
    var seconds = now.getSeconds().toString().padStart(2, "0");
    var timeString = hours + ":" + minutes + ":" + seconds;

    //Update the content
    actualDate.textContent = timeString;
}

//Every second the time will be updated
setInterval(updateTime, 1000);

//Call the function 
updateTime();