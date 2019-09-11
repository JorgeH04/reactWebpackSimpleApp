import React, { Component } from 'react';
import { render } from 'react-dom';

import Data from './Data/Data';
import Form from './Form/Form';


class App extends Component {

  constructor() {
    super();
    this.state = {   
   dataArray: [    
  {dataId: 1, dataContent: 'data 1'},     
  {dataId: 2, dataContent: 'data 2'}   
      ]
      
    };
    this.addData = this.addData.bind(this);
  }



  removeData(){
    
  }

  addData(data){
    let { dataArray } = this.state;
    dataArray.push({
      dataId: dataArray.length + 1,
      dataContent: data
    });
    this.setState({dataArray});
  }
  

  
  render() {
      
  return (
        
  <div className="notesContainer">    

   <div className="notesHeader">        
     <h1> React simple app </h1>     
  </div>
       
  <div className="notesBody">    
  <ul>       
  {          
  this.state.dataArray.map(data => {            
   return (          
    <Data
     dataContent={data.dataContent}
     dataId={data.dataId}           
     key={data.dataId}          
     removeData={this.removeData}          
    />
                  
   )
                 
  })
                
  }
              
  </ul>
  </div>
          
  <div className="notesFooter">
           
  </div>
        <Form addData={this.addData}/>
  </div>
      
  );
    
  }
  }
  render(
      
   
    <App/>,
    document.getElementById('app')
  );
  
  export default App;
  
  

