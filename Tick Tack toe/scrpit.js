let boxes= document.querySelectorAll(".box");
let turn = true;
let player0 = document.querySelector("#player0");
let playerX = document.querySelector("#playerX");
let count = 0;
let j = true;
let k=true;
boxes.forEach((box) =>{
    const dis = () =>{
        if(box.innerText != "")
        {
            box.disabled = true;
        }
    }
})

const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) =>{
    box.addEventListener("click" , () =>{
        if(turn)
        {
            box.innerText = "0";
            turn = false;
            box.disabled = true;
        }
        else
        {
            box.innerText = "X";
            turn = true;
            box.disabled = true;  
        }
        checkWinner();
    })
})
function checkDraw() {
    for (let box of boxes) {
        if (box.innerText == "") {
            return false; // Not a draw, at least one is empty
        }
    }
    return true; // All boxes filled => draw
}

function checkWinner(){
    for(let pattern of winpattern)
    {
        
        let [a,b,c] = pattern;
        if(boxes[a]!="" && boxes[b]!="" && boxes[c]!="")
        {
            count++;
            if(boxes[a].innerText=="0" && boxes[b].innerText=="0" && boxes[c].innerText=="0")
            {
                j=false;
                console.log("Winner = ", boxes[a].innerText);
                boxes.forEach((box) =>{
                    box.disabled = true;
                    
                })
                const gameDiv = document.querySelector(".game");
                gameDiv.innerHTML = ""; // remove buttons
                gameDiv.style.display = "block";
                gameDiv.appendChild(player0); // move player0 inside
                player0.style.padding="0px 0px 0px 0px";
                player0.style.margin="10px 10px 10px 160px";
                const winner = document.querySelector(".winner");
                winner.setAttribute("id" , "heading");
                gameDiv.prepend(winner);
                winner.style.display = "block";
                const btn = document.createElement("button");
                btn.id="btn";
                btn.innerText = "New Game";
                gameDiv.appendChild(btn);
                btn.addEventListener("click", ( )=> {
                location.reload();
                });
                return;

                
            }
            else if(boxes[a].innerText=="X" && boxes[b].innerText=="X" && boxes[c].innerText=="X")
            {
                k=false;
                console.log("Winner = " , boxes[a].innerText);
                boxes.forEach((box) =>{
                    box.disabled = true;
                })
                const gameDiv = document.querySelector(".game");
                gameDiv.innerHTML = ""; // remove buttons
                gameDiv.style.display = "block";
                gameDiv.appendChild(playerX); // move player0 inside
                playerX.style.padding="0px 0px 0px 0px";
                playerX.style.margin="10px 10px 10px 160px";
                const winner = document.querySelector(".winner");
                winner.setAttribute("id" , "heading");
                gameDiv.prepend(winner);
                winner.style.display = "block";
                const btn = document.createElement("button");
                btn.id="btn";
                btn.innerText = "New Game";
                gameDiv.appendChild(btn);
                btn.addEventListener("click", ( )=> {
                location.reload();
                }); 
                return;
            }
            
        }
    }
if(checkDraw() && j && k){
                console.log("Draw");
                const gameDiv = document.querySelector(".game");
                gameDiv.innerHTML = ""; // remove buttons
                gameDiv.style.display = "block";
                const check = document.createElement("h1");
                check.setAttribute("id", "check");
                check.innerText = "Draw";
                gameDiv.prepend(check);
                const btn = document.createElement("button");
                btn.id="btn";
                btn.innerText = "New Game";
                gameDiv.appendChild(btn);
                btn.addEventListener("click", ( )=> {
                location.reload();
                });
                return;
            }
}

