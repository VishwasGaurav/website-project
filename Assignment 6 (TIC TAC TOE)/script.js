let board = ["","","","","","","","",""];
let currentPlayer = "X";
let gameOver = false;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function play(cell,index){

    if(board[index]!=="" || gameOver) return;

    board[index]=currentPlayer;
    cell.innerText=currentPlayer;

    if(checkWinner()){
        document.getElementById("status").innerText=
        "Player "+currentPlayer+" Wins!";
        gameOver=true;
        return;
    }

    if(!board.includes("")){
        document.getElementById("status").innerText="It's a Draw!";
        gameOver=true;
        return;
    }

    currentPlayer=currentPlayer==="X"?"O":"X";
    document.getElementById("status").innerText=
    "Player "+currentPlayer+"'s Turn";
}

function checkWinner(){

    for(let pattern of winPatterns){

        let [a,b,c]=pattern;

        if(
            board[a] &&
            board[a]===board[b] &&
            board[b]===board[c]
        ){
            return true;
        }
    }

    return false;
}

function resetGame(){

    board=["","","","","","","","",""];
    currentPlayer="X";
    gameOver=false;

    document.querySelectorAll(".cell").forEach(cell=>{
        cell.innerText="";
    });

    document.getElementById("status").innerText=
    "Player X's Turn";
}
