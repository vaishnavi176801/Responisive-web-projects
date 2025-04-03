let boxes=document.querySelectorAll('.box');
let resetBtn=document.querySelector('#reset-btn');
let turnO = true;
let winner=document.querySelector('#winner');
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


boxes.forEach((box)  =>{
    box.addEventListener('click',()  =>{
        console.log("box was clicked");
        if(turnO){
            box.innerText='O';

            turnO=false;
        }
        else{
            box.innerText='X';
            turnO=true;
        }
        box.disabled =true;
        checkWinner();
    });
});


let check=false;
const checkWinner=()=>{
    for(let pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]) ;
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText);

        let pos1=  boxes[pattern[0]].innerText;
        let pos2=  boxes[pattern[1]].innerText;
        let pos3=  boxes[pattern[2]].innerText;


        if(pos1!=='' && pos2!=='' && pos3!==''){

            if(pos1===pos2 && pos2===pos3 && pos1===pos3){


                if(pos1==='O'){
                    console.log('winner player1');
                    winner.innerText='Winner: Player 1';
                    boxes.forEach(box => {
                        box.disabled =true;
                    });
                }

                else if(pos1==='X'){
                    console.log('winner player2');
                    winner.innerText='Winner: Player 2';
                    winner.style.textAlign='center';
                    boxes.forEach(box => {
                        box.disabled =true;
                    });
                }

            }

        }
    }
}


resetBtn.addEventListener('click',()  =>{
    boxes.forEach((box)  =>{
        box.innerText='';
        box.disabled =false;
        winner.innerText='Who will Win?';
    });

});