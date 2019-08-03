let initialState=[];

let rootReducer=(state=initialState, action)=>{
    if(action.type=="click"){
        let newstate=["demo"];
        console.log("clicked");
        return newstate;
        
    }else{
        return state;
    }
}

export default rootReducer;