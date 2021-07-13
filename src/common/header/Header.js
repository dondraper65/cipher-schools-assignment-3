import React, {Component} from 'react';
import '../header/Header.css';
import Typography from '@material-ui/core/Typography';


class Header extends Component{
    render(){
        return(
            <div>
                <div className = "heading">
                    <Typography variant = "h2" style = {{fontWeight: 'bold'}}>Recipe Finder</Typography>
                </div>

            </div>
        )
    }
}

export default Header;


