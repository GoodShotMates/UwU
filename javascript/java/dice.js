let number;

document.getElementById("roll").onclick = function () {
    number = Math.floor(Math.random()* 6);
    
    document.getElementById("number").innerHTML = number;
}