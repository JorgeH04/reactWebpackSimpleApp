import React, { Component } from 'react';
//import './Form.css';

class Form extends Component {
    constructor() {
        super();
        this.addData = this.addData.bind(this);
    }

    addData() {
        this.props.addData(this.textInput.value);
        this.textInput.value = '';
        this.textInput.focus();

    }

    render() {
        return(
        <div className="Form">
           <input ref={input => {this.textInput = input}} type="text"/>
           <button onClick={this.addData}>
               Add 
           </button>
        </div>
        )
        


    }
}

export default Form;
