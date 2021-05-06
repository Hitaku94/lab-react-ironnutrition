import React, { Component } from 'react'
import {TextField} from '@material-ui/core'
import '../Search.css';

class Search extends Component {
    render(){
        return(
            <div className="search">
                <TextField onChange={this.props.onSearch} label="Search" placeholder="search a food" />
            </div>
        )
    }
}

export default Search