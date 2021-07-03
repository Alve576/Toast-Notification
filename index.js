var btn = document.getElementById("btn");
var toast = document.querySelector(".toast");


var massages = [
    "Hi there!","I am Alvi","I am a web devoloper","Do you wanna hire me?"
]
var types = [
    "info","success","error"
]

btn.addEventListener("click",() => createNotification());


function createNotification(massage= null,type = null) {
    var notify = document.createElement("div");

    notify.classList.add("massage");

    notify.classList.add(type ? type : getRandoType());

    notify.innerHTML  =(massage ? massage : getRandoMsg())

    toast.appendChild(notify);

    setTimeout(() => notify.remove(),3000)
}


function getRandoMsg() {
    
    return massages[Math.floor(Math.random() * massages.length)];
}

function getRandoType() {
    
    return types[Math.floor(Math.random() * types.length)];
}