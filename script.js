var buttons = document.querySelectorAll("button");
 
function addColor(button){
    buttons.forEach(element => {
        element.classList.remove("pressed");
    });
    button.classList.add("pressed");
}

document.addEventListener("keypress",check);

function check(event){
    var key = event.key.toLowerCase();
    var keys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
            'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
            'z', 'x', 'c', 'v', 'b', 'n', 'm', ' '];

    keys.forEach(ch => {
        if(ch==key) addColor(buttons[keys.indexOf(ch)]);
    });
}