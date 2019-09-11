import React, { Component } from 'react';
import { render } from 'react-dom';

class Data extends Component {
    constructor(props) {
        super(props);
        this.dataContent = props.dataContent;
        this.dataId = props.dataId;
    }

    handleRemove(id){
        console.log(id);
        alert('remove: ', id)

    }

    render() {
        return(
        <div className="Note">
        <span
        onClick={() => this.handleRemove(this.dataId)}>X</span>
        
           <li>{this.dataContent}</li>
        </div>
        )
        


    }
}

export default Data;