import React from 'react';
import {connect} from 'react-redux';


class Board extends React.Component{
    render(){
        return(
            <div>
                Hello Board here
            </div>
        )
    }

}

function mapDispatchToProps(dispatch){
    return{
        handleClick : dispatch({
            type:"click"
        })
    }
}


function mapStateToProps(state){
    return{
        data: state.data
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Board);