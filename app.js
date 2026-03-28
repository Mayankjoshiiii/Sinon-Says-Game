let gameseq=[];
let userseq=[];//user kis sequence me click krega

let btns=["yellow","green","red","blue"];

let started=false;//game not started yet
let level=0;//initial level when game not started

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){ // baar baar game started print nhi hoga on keypress 
        console.log("game started");
        started=true;
    }
    levelup();
})

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash")
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //random button choose
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    // console.log(randbtn);
    // console.log(randcolor);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
         if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
         }
    }else{
        h2.innerHTML=`Game Over ! Your Score was <b> ${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}

function btnpress(){
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}