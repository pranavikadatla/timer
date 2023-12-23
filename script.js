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
 if(timeInSeconds>=3600){
    var h1=Math.floor(timeInSeconds/3600);
    var h2=timeInSeconds%3600;
    hoursOfTimer.innerText="0"+h1+":";
    var m1=Math.floor(h1/60);
    minuteOfTimer.innerText=m1+":";
    var s1=m1%60;
 secondsOfTmer.innerText=s1;
 startTimer(s1);
 }
 else{
    hoursOfTimer.innerText="00"+":";
    var m1=Math.floor(timeInSeconds/60);
    minuteOfTimer.innerText=m1+":";
    var s1=Math.floor(m1/60);
 secondsOfTmer.innerText=s1;
 startTimer(s1);
 }
  

}
function startTimer(time){
    let timerId=setInterval(()=>{
        if(time===0){
          if(minutes>0){
            minutes--;
            seconds=60;
          }
          if(hours>0){
            hours--;
            minutes++;
          }
          if(minutes==0&&hours==0&&seconds==0){
            clearInterval(timerId);
            timers.innerText="time's Up";
          }
        }

    },1000);
}
 