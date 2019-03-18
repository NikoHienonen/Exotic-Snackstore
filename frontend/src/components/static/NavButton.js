import React, { Component } from 'react';

class NavButton extends Component{
    constructor(props){
        super(props);
        this.name = props.name;
    }
    render(){
        return(
            <button className="{this.name}">{this.name}</button>
        )
    }
}

export default NavButton;