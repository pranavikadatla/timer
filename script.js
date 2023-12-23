const timers=document.getElementById("timers");
const hoursOfTimer=document.getElementById("hoursOfTimer");
const minuteOfTimer=document.getElementById("minutesOfTimer");
const secondsOfTmer=document.getElementById("secondsOfTimer");


function getTime(){
    var hour=document.getElementById("hours").value;
    var hourInsecond=hour*3600;
    var minutes=document.getElementById("minutes").value;
    var minutesinseconds=minutes*60;
    var seconds=document.getElementById("seconds").value;
    var total=hourInsecond+minutesinseconds+seconds;
    displayTimer(total);
}
function displayTimer(timeInSeconds){
    timers.style.display="block";
    timers.style.display="flex";
 const h=timeInSeconds/3600;
 if(h>0){
    hoursOfTimer.innerText=h+":";
 }
   
 const m=timeInSeconds/60;
  minuteOfTimer.innerText=m;
  

}
 