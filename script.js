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
}
function removeNonAlphabetic(str) {
    return str.replace(/[^a-zA-Z\s]/g, '');
  }
function printStory(){
    var newStory=document.createElement('div');
    newStory.id="text";
    newStory.textContent=x;
    newStory.classList.add("story");
    document.body.appendChild(newStory);
}
function addColor(button ){
    button.classList.add("pressed");
    setTimeout(function() {
        button.classList.remove("pressed");
      }, 100);
}

document.addEventListener("keypress",check);



function check(event){
    var key = event.key;
    highlightNext();
    var keys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
            'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
            'z', 'x', 'c', 'v', 'b', 'n', 'm', ',','.',' '];

    keys.forEach(ch => {
        if(ch==key) addColor(buttons[keys.indexOf(ch)]);  
    });
}


function highlightNext(){
    var text=document.getElementById("text");
    var xx=text.textContent;
    var highlighted=xx.substring(0,idx)+ `<span class="highlight">${xx[idx]}</span>`+xx.substring(idx+1);
    idx++;
    text.innerHTML = highlighted;
}   