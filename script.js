var buttons = document.querySelectorAll("button");
 
function addColor(button){
    button.classList.add("pressed");
    setTimeout(function() {
        button.classList.remove("pressed");
      }, 100);
}

document.addEventListener("keypress",check);

function check(event){
    var key = event.key.toLowerCase();
    var keys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
            'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
            'z', 'x', 'c', 'v', 'b', 'n', 'm', ',','.',' '];

    keys.forEach(ch => {
        if(ch==key) addColor(buttons[keys.indexOf(ch)]);
        
    });
}