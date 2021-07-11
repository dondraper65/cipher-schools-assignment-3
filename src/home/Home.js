import { Typography } from '@material-ui/core';
import React, {Component} from 'react';
import Header from '../common/header/Header';
import "./Home.css";



class Home extends Component{
    
    constructor()
    {
        super();
        this.state = {
            greetingDisplay : "dispBlock",
            errorDisplay: "dispNone"

        }
    }

    render(){
        return (
            <div>
                <Header/>
                <div>
                    <div className = "flex-container">
                        <div className = "search">
                            <input placeholder = "Enter the Name of the Dish" style = {{paddingTop:10, paddingBottom:10, paddingLeft:20, paddingRight:20, fontSize:22, border: 0, borderRadius: 10}}></input>
                        </div>
                        <div>
                            <button className = "btn"  >Get Recipes</button>
                        </div>
                    </div>
                    <Typography className = {this.state.errorDisplay} variant = "subtitle2">No Data Has Been Recieved</Typography>
                    <Typography variant ="h4" className = {this.state.greetingDisplay} style ={{textAlign:'center', marginTop: 16, fontWeight: 'bold'}}component = "div">Type a Dish Name to Search for it's ingredient</Typography>
                    
                    
                </div>
            </div>
        )
    }
}

export default Home;