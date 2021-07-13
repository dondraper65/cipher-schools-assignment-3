import { Typography } from '@material-ui/core';
import React, {Component} from 'react';
import Header from '../common/header/Header';
import "./Home.css";
import RecipeCard from "../recipecards/RecipeCard";





class Home extends Component{
    
    constructor()
    {
        super();
        this.state = {
            greetingDisplay : "dispBlock",
            errorDisplay: "dispNone",
            searchInput: "",
            recipes: null,
        }
        
    }

    searchInputChangeHandler = (event) =>{
        this.setState({searchInput: event.target.value})
    }

    recipeSearchHandler = async () =>{
        this.setState({recipes:null, errorDisplay: "dispNone"})
        let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+this.state.searchInput;
        let response = await fetch(url);
        let data = await response.json();
        this.setState({recipes: data.meals, greetingDisplay: "dispNone"})

        if (data.meals=== null || this.state.searchInput === ""){
            this.setState({errorDisplay: "DispBlock", recipes: null});
        }

    }
    

    render(){
        return (
            <div>
                <Header/>
                <div>
                    <div className = "flex-container">
                        <div className = "search">
                            <input placeholder = "Enter the Name of the Dish"
                            style = {{paddingTop:10, paddingBottom:10, paddingLeft:20, paddingRight:20, fontSize:22, border: 0, borderRadius: 10}}
                            onChange = {this.searchInputChangeHandler}></input>
                        </div>
                        <div>
                            <button className = "btn" onClick = {this.recipeSearchHandler} >Get Recipes</button>
                        </div>
                    </div>
                    <Typography className = {this.state.errorDisplay} variant = "h6" style ={{textAlign:'center', marginTop: 16}}><span>No Data Has Been Recieved</span></Typography>
                    <Typography variant ="h4" className = {this.state.greetingDisplay} style ={{textAlign:'center', marginTop: 16, fontWeight: 'bold'}}component = "div"><span>Type a Dish Name to Search for it's ingredient</span></Typography>
                    {(this.state.recipes != null) &&
                    this.state.recipes.map(recipe =>{
                        let i =0;
                        i++
                        return <RecipeCard key = {recipe.idMeal + i} id = {recipe.idMeal +i} likeId = {i} recipe = {recipe}/>

                    })
                    }
                    
                </div>
            </div>
        )
    }
}

export default Home;