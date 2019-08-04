import React from 'react';
import {connect} from 'react-redux';


class Board extends React.Component{
    render(){
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
        let resElem;
        if(this.props.gameover==true && this.props.count<9){
            resElem = <div className="result"><h4>{this.props.currentPlayer == "P1" ? "Player 1" : "Player 2"} Won !!</h4></div>
        }else if(this.props.gameover==true && this.props.count>=9){
            resElem = <div className="result"><h4>Its A Draw !!</h4></div>
        }else{
            resElem = <div className="result hide"> </div>
        }
        console.log(this.props);
        return(
            <div className="container">
                <div className="resultboard"> 
                        {resElem}
                        {this.props.gameover==true
                        ?(<button className="restart" onClick = {this.props.restart}>Restart</button>)
                        :null
                        }

                </div>
                <div className="boardcontainer">
                {elem}
                </div>
                <div> Now Playing : {this.props.currentPlayer == "P1" ? "Player 1" : "Player 2"}</div>
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
        })},
        restart : ()=>{
            dispatch({
                type:"restart"
            })
        }
    }
}


function mapStateToProps(state){
    return{
        board: state.board,
        currentPlayer:state.currentPlayer,
        gameover:state.gameover,
        count:state.count
    }
}   

export default connect(mapStateToProps,mapDispatchToProps)(Board);