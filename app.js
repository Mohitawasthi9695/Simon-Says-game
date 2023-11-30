let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","green","purple"];     
let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function()
{ 
    if(started==false){
    console.log("game started");
    started=true; 
    levelup();
}   
});
function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
    {
        btn.classList.remove("flash");
    },100);

}
function userFlash(btn)
{
    btn.classList.add("Userflash");
    setTimeout(function()
    {
        btn.classList.remove("Userflash");
    },100);

}
function levelup()
{ 
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randcol=btns[randIdx];
    gameSeq.push(randcol);
    console.log(gameSeq);
    let seldiv=document.querySelector(`.${randcol}`);
    
    gameFlash(seldiv);

}
function checkAns(idx)
{
    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length)
        {
           setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over Level - <b>${level}</b> </br> Press any key to start.`;
        
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor="white";
        },300);
        reset();
    }
}
function btnpress()
{
 let btn=this;
 userFlash(btn);
 userColor=btn.getAttribute("id");
 userSeq.push(userColor);    
 checkAns(userSeq.length-1);

}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}
function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}