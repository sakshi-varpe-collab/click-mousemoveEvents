document.querySelector('.box').addEventListener("mousemove",(event)=>{
var dot=document.createElement('div');
dot.className="dot";
dot.style.top=event.clientY +"px";
dot.style.left=event.clientX + "px";
document.querySelector('.box').appendChild(dot);
setInterval(()=>{
    dot.remove()
},500)
})

