let boxes = document.querySelectorAll(".box");
let resetbtn= document.querySelector("#resetbtn");
let mesgcont = document.querySelector(".mesgcont");
let mesg = document.querySelector("#mesg");

let turnO = true;

const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach(box => {
    box.addEventListener("click",()=>{
        if(turnO === true){
            box.innerText = "O";
            box.style.color = "black";
            turnO = false;
        }
        else{
            box.innerText ="X";
            turnO= true;
            box.style.color = "brown";
        }
        box.disabled = true;
        checkWinner();
    
    });
}); 


const drawn =()=>{
    let fill = false;
boxes.forEach(box => {
    if(box.innerText ==="X" || box.innerText==="O"){
        fill = true;
    }
});
if(fill){
    showDraw();
}
};


const reset =()=>{
    turnO= true;
    enalbeboxes();
    mesgcont.classList.add("hide");

};
const disabledboxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enalbeboxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWin =(winner) =>{
    mesg.innerText = `Congratulations winner is ${winner}`;
    mesgcont.classList.remove("hide");
    disabledboxes();
};

const showDraw =() =>{
    mesg.innerText = "Match drawn..!";
    mesgcont.classList.remove("hide");
    
};

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                
                showWin(pos1Val);
            }
            
        }
        
    }
    
};
drawn();


resetbtn.addEventListener("click",reset);