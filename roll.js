let interval
let start=document.getElementById("startButton")
let stopp=document.getElementById("stopButton")
start.disabled=false;
stopp.disabled=true;
start.onclick= function(){
   start.disabled=true;
   stopp.disabled=false;
   var Maxx=Number(document.getElementById("maxNumber").value)
    function dice()
    {
        let x=Math.ceil(Math.random()*Maxx)
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
