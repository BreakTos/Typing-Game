var buttons = document.querySelectorAll("button");
var x="";
getStory().then(printStory);
async function getStory(){
    const response = await fetch('https://shortstories-api.onrender.com/');
    const data = await response.json();
    x = data.story;
}
function printStory(){
    var newStory=document.createElement('div');
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
    var keys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
            'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
            'z', 'x', 'c', 'v', 'b', 'n', 'm', ',','.',' '];

    keys.forEach(ch => {
        if(ch==key) addColor(buttons[keys.indexOf(ch)]);  
    });
}