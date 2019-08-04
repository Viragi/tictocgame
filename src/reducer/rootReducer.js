let initialState={
    board:[[null,null,null],[null,null,null],[null,null,null]],
    P1:"O",
    P2:"X",
    currentPlayer:"P1",
    gameover:false
};

let rootReducer=(state=initialState, action)=>{
    if(action.type=="click" && state.gameover==false){
        let newBoard= [...state.board];
        newBoard[action.col] =[...newBoard[action.col]];
        newBoard[action.col][action.row]= state[action.player];
        let gameStatus= checkWin(newBoard,action.col,action.row,state[action.player]);
        console.log("gamestatus here",gameStatus);
        let newPlayer = action.player;
        if(!gameStatus){
            newPlayer= state[action.player] == "O" ? "P2" : "P1";
        }
        return {...state,board:newBoard,currentPlayer:newPlayer,gameover:gameStatus};
        
    }else{
        return state;
    }
}

function checkWin(arr,col,row, sign){
    let isWon=true;
    //horizontal Win
    
    for(let i=0;i<arr.length;i++){
        if(arr[col][i]!=sign){
            isWon=false;
            break
        }
    }
    if(isWon){
        return true;
    }else{
        isWon=true;
    }
    //verticalWin
    for(let i=0;i<arr.length;i++){
        if(arr[i][row]!=sign){
            isWon=false;
            break;
        }
    }
    if(isWon){
        return true;
    }else{
        isWon=true;
    }
    //right diagonal win
    for(let i=0,j=0;i<arr.length;i++,j++){
        if(arr[i][j]!=sign){
            isWon=false;
            break;
        }
    }
    if(isWon){
        return true;
    }else{
        isWon=true;
    }
   // left diagonal win
   for(let i=arr.length-1,j=0;i<arr.length;i--,j++){    
        if(arr[j][i]!=sign){
            isWon=false;
            break;
        }   
    }
    return isWon;
}

export default rootReducer;