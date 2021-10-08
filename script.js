const add = function(a,b){
    return a+b;
}
const subtract = function(a,b){
    return a - b;
}
const multiply = function(a,b) {
    return a*b;
}
const divide = function(a,b){
    if(b==0){
        return "ERROR";
    }
    else {
        return a/b;
    }
}

const operate = function() {

}
document.documentElement.style.height="100%";
const keys = document.getElementById("keys");
for(let i = 1 ; i<10 ; i++){
    let button = document.createElement('button');
    let buttonID=i;
    button.id="button" + buttonID;
    button.textContent=i;
    button.style.fontSize="20px";
    
    keys.append(button);
}
const buttonEnter = document.createElement('button');
keys.append(buttonEnter);
buttonEnter.id = "buttonEnter";
buttonEnter.style.width = "40%";