import { Circle } from "./class/circle.js";



for(let i = 0; i < 20; i ++){
    new Circle(i)
}


setInterval(function(){
    new Circle()
},500)

const btn = document.getElementById("btn")

btn.onclick = function(){
    new Circle(4)
}