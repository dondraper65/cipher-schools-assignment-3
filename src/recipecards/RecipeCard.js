import { Typography } from '@material-ui/core';
import React, {Component} from 'react';
import "./RecipeCard.css";
import LikeButton from "../likebtn/LikeButton"

class RecipeCard extends Component{

    constructor()
    {
        
        super();
        this.state = {         
        }
    }






    render(){
        return (
            <div className = "cardContainer">
                            <div className = "card-header-container">
                                <div className = "recipe-heading"  style = {{fontWeight: 'bold'}}><a href = {this.props.recipe.strSource} rel="noopener noreferrer" target = "_blank">{this.props.recipe.strMeal}</a></div>
                                <LikeButton  id = {"like"+this.props.i} num = {this.props.i}/>
                            </div>

                            <div className = "cardContent">
                                <div className = "left">
                                    <img className = "pic"src = {this.props.recipe.strMealThumb} alt = {this.props.recipe.strMeal} />
                                </div>
                            
                                <div className = "right">
                                    <div className = "description">
                                        <Typography><span style = {{fontStyle: "italic"}}>Category of Meal - {this.props.recipe.strCategory}</span></Typography>
                                        <Typography><span style = {{fontStyle: "italic"}}>Area of the Meal - {this.props.recipe.strArea}</span></Typography>
                                    </div>
                                    <div>
                                        <Typography><span style = {{fontStyle: "italic"}}>Ingredients</span></Typography>
                                        <div className = "ingredients-container">
                                            {this.array().map(n => {
                                                return (<Typography style = {{paddingLeft:10, marginBottom:20}}key ={this.props.recipe.idMeal+n}><span>{this.props.recipe["strIngredient"+n]} --- {this.props.recipe["strMeasure"+n]}</span></Typography>)
                                                }
                                            )}
                                        </div>
                                        <div className = "recipe">
                                            <Typography style = {{textAlign: 'center'}}><span style = {{fontStyle:"italic"}}>Recipe</span></Typography>
                                            <div className = "recipe-container">
                                                <Typography>{this.props.recipe.strInstructions}</Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
            </div>

        )
    }

}

export default RecipeCard;