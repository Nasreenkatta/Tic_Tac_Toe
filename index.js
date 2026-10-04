let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let newGameBtn=document.querySelector(".new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turno=true;
const winPatterns=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
     if(turno){
        box.innerText="Nasreen";
        turno=false;
     }else{
        box.innerText="Adil";
        turno=true;
     }
     box.disabled = true;
     checkWinner();
    });
    
});
const resetGame=()=>{
    turno=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner =(winner)=>{
    msg.innerText=`congratulations  winner is ${winner} 🏆🎉🎊`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
let checkWinner=()=>{
    for(let pattern of winPatterns){
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;
    
    if(posVal1 !="" && posVal2 != "" && posVal3 != ""){
        if(posVal1==posVal2 && posVal2==posVal3){
            showwinner(posVal1);
        }
    }
}
}
let reset=resetBtn.addEventListener("click",resetGame);
let newGame=newGameBtn.addEventListener("click",resetGame);