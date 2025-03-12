let gameseq=[]
let userseq=[]
let started=false;
let colour=["red","blue","yellow","green"];
let level=0;
let h2=document.querySelector("#a");
document.addEventListener("keypress",function (){
    if(started==false){
        console.log("game started")
        started=true;
        levelup();
    }
})
function checkans(idx){
    if(userseq[idx]==gameseq[idx]){
       if(userseq.length==gameseq.length){
        setTimeout(levelup,1000)
       }
    }
    else{
        h2.innerText=`Game over !! incorrect sequence`
        reset();
    }
}

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },200);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },200);
}
function levelup(){
    userseq=[]
    level++;
    h2.innerText=`level ${level}`;
    let rand=Math.floor(Math.random()*3);
    let randcolour=colour[rand];
    let randbtn=document.querySelector(`.${randcolour}1`);
   gameseq.push(randcolour);
    btnflash(randbtn);
}
function buttons(){
    let btn=this;
    userflash(btn);
    usercolour=btn.getAttribute("id");
    userseq.push(usercolour);
    checkans(userseq.length-1 );
}
function reset(){
    started=false;
    gameseq=[]
    userseq=[]
    level=0;
}

let allbtns=document.querySelectorAll("div");
for(bts of allbtns){
    bts.addEventListener("click",buttons)
}