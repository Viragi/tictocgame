import React from 'react';
import {connect} from 'react-redux';


class Board extends React.Component{
    render(){
       // console.log(this.props);
        let elem = this.props.board.map((item,i)=>{
            return(
                <div className="col">
                    {item.map((cell,rowI)=>{
                        return(
                            <div className="cell">
                                {cell==null ? <div className="sign" onClick={()=>this.props.handleClick(i,rowI,this.props.currentPlayer)}></div>
                                            : <div className="sign"> {cell}</div> }
                                
                            </div>
                        )
                    })}
                </div>    
            )

        })

        return(
            <div className="container">
                <div> {this.props.gameover==true 
                        ? (<div className="result"><h4>{this.props.currentPlayer} Won !!</h4></div>)
                        : (<div className="result hide"> </div>)}
                </div>
                <div className="boardcontainer">
                {elem}
                </div>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch){
    return{
        handleClick : (i,j,player)=>{dispatch({
            type:"click",
            col:i,
            row:j,
            player:player
        })}
    }
}


function mapStateToProps(state){
    return{
        board: state.board,
        currentPlayer:state.currentPlayer,
        gameover:state.gameover
    }
}   

export default connect(mapStateToProps,mapDispatchToProps)(Board);