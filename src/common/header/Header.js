import React, {Component} from 'react';
import '../header/Header.css';
import Typography from '@material-ui/core/Typography';


class Header extends Component{
    render(){
        return(
            <div className = "heading">
                <Typography variant = "h2" component = "headline">Recipe Finder</Typography>
            </div>
        )
    }
}

export default Header;


