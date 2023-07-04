var buttons = document.querySelectorAll("button");

var x="";
var idx=0;
getStory().then(printStory);
async function getStory(){
    const response = await fetch('https://shortstories-api.onrender.com/');
    const data = await response.json();
    x = data.story;
    if(x.indexOf('"')!=-1) {
        x=removeNonAlphabetic(x);
    }
    x=x.trim();
}
function removeNonAlphabetic(str) {
    return str.replace(/[^a-zA-Z\s]/g, '');
  }
function printStory(){
    var newStory=document.createElement('div');
    newStory.id="text";
    newStory.textContent=window.x;
    newStory.classList.add("story");
    document.body.appendChild(newStory);
    let x=document.getElementById("text");
    let xx=x.textContent;
    let highlighted=xx.substring(0,idx)+ `<span class="highlight">${xx[idx]}</span>`+xx.substring(idx+1);
    idx++;
    text.innerHTML = highlighted;
}
function addColor(button ){
    button.classList.add("pressed");
    setTimeout(function() {
        button.classList.remove("pressed");
      }, 100);
}

document.addEventListener("keypress",check);

function highlightNext(){
    var text=document.getElementById("text");
    var xx=text.textContent;
    var highlighted=xx.substring(0,idx)+ `<span class="highlight">${xx[idx]}</span>`+xx.substring(idx+1);
    idx++;
    text.innerHTML = highlighted;
    return xx[idx-2];
}   

var correct=new Audio("correct.mp3");
var wrong=new Audio("wrong.mp3");

var score=1;
var temp=0;
function check(event){
    var key = event.key;
    let wordWas=highlightNext();
    if(key==wordWas) {
      temp++;
      correct.play();
    }else{
      wrong.play();
    }
    if(wordWas.trim() === ''){
        let tmp=idx;
        if(temp>=1) score++;
        temp=0;
    }
     console.log(score);
    // console.log(wordWas);
    // console.log(key);
    var keys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
            'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
            'z', 'x', 'c', 'v', 'b', 'n', 'm', ',','.',' '];

    keys.forEach(ch => {
        if(ch==key) addColor(buttons[keys.indexOf(ch)]);  
    });
}
// clock
window.addEventListener("load", startStopwatch);

// Start the stopwatch function
function startStopwatch() {
  var startTime = new Date().getTime();
  var stopwatchElement = document.getElementById("stopwatch");
  
  // Update the stopwatch time every second
  var timer = setInterval(updateStopwatch, 1000);
  
  function updateStopwatch() {
    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - startTime;
    
    // Convert elapsed time to minutes and seconds
    var minutes = Math.floor(elapsedTime / 60000);
    var seconds = Math.floor((elapsedTime % 60000) / 1000);
    
    // Display the stopwatch time
    stopwatchElement.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    
    // Stop the stopwatch after 30 seconds
    if (elapsedTime >= 30000) {
      clearInterval(timer);
      alert("Score: " + score);
    }
  }
}