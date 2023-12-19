let interval
let start=document.getElementById("startButton")
let stopp=document.getElementById("stopButton")
start.disabled=false;
stopp.disabled=true;
start.onclick= function(){
   start.disabled=true;
   stopp.disabled=false;
    function dice()
    {
        let x=Math.ceil(Math.random()*10)
        return x
    }
    interval = setInterval(
    function()
    {
        let result = dice(); 
        console.log(result);
        document.getElementById("number").innerHTML = result;
    }, 50); 
}
stopp.onclick= function(){
    start.disabled=false;
    stopp.disabled=true;
    clearInterval(interval);
}
// let x
// document.getElementById("startButton").onclick= function(){
//      x=Math.ceil(Math.random()*10)
//     console.log(x);
//     document.getElementById("number").innerHTML = x;
// }


