import React, {Component} from 'react';
import Header from '../common/header/Header';
import "./Home.css";





class Home extends Component{
    
    constructor()
    {
        super();
        this.state = {
            greetingDisplay : "dispBlock",   // states of the greeting message which displays when the page loads
            errorDisplay: "dispNone",   
            loginDisplay: "dispNone",     // states for the error message which displays when error occurs in api results
            modalDisplay: "dispNone",
            userName: "",    
            recipes: null
        }
        
    }

    searchInputChangeHandler = (event) =>{     // eventHandler called onChange of input field and it saves the state real time as the user enters input
        this.setState({...this.state, userName: event.target.value})
    }

    modalHandler = ()=>{
        this.setState({...this.state, modalDisplay: "dispBlock"})
    }

    loginHandler = async () =>{              
        let arr = ['a', 'b', 'c', 'd', 'e', 'f'] 
        let rand = Math.floor(Math.random()*6)                   //onCLicking the get recipes button,  we fetch the data using the input entered by user which we tracked continously using state.
        this.setState({...this.state, recipes:null, errorDisplay: "dispNone"})
        let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+ arr[rand];  
        let response = await fetch(url);                                                   //Used Fetch API to get data from mealdb api
        let data = await response.json();
        this.setState({...this.state, recipes: data.meals, greetingDisplay: "dispNone"})                  //Soon as we hit search, the greeting message disappears

        if (data.meals=== null || this.state.searchInput === ""){                          // if api call doesnt get the data or if the user didnt input anything, error message is displayed
            this.setState({...this.state, errorDisplay: "DispBlock", recipes: null});
        }

    }
    

    render(){
        return (
            <div>
                <Header />                                          {/*imported the header file which contains the heading of the page. Purpose is to reuse it if we decide to create more pages*/}
            </div>
        )
    }
}

export default Home;