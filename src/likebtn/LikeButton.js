import React, {Component} from 'react';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import "./LikeButton.css"


class LikeButton extends Component{

    constructor()
    {
        super();
        this.state = {
            color: "black"
        }
    }

    likeClickHandler = () =>{
        if(this.state.color === "black"){
            this.setState({color: "red"})
        } else if (this.state.color === "red"){
            this.setState({color: "black"})
        }
    }


    render(){
        return(
            <div className = "like-icon">
                <FavoriteBorderOutlinedIcon id = {this.props.num}  className = {this.state.color} onClick = {this.likeClickHandler} />
            </div>
        )
    }
}

export default LikeButton;
