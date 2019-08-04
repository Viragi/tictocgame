let initialState={
    board:[[null,null,null],[null,null,null],[null,null,null]],
    P1:"O",
    P2:"X",
    currentPlayer:"P1"
};

let rootReducer=(state=initialState, action)=>{
    if(action.type=="click"){
        let newBoard= [...state.board];
        newBoard[action.col] =[...newBoard[action.col]];
        newBoard[action.col][action.row]= state[action.player];
        let newPlayer = state[action.player] == "O" ? "P2" : "P1";
        return {...state,board:newBoard,currentPlayer:newPlayer};
        
    }else{
        return state;
    }
}

export default rootReducer;