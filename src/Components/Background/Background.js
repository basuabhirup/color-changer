import React from 'react'

import './style.css';

class Background extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            selectedColor: 'None Selected'
        }
    }
    changeBackgroundColor = (event)  => {
    
         console.log("color changed to", event.target.value)
         this.setState({
             selectedColor: event.target.value
         })
       
        }

    
    //@override
    render = () => {
        return(
            <div style={{
                backgroundColor: this.state.selectedColor
            }} 
                className="back-container">


                <div className="color-box">
                    <h2>Choose a Color</h2>
                    <input onChange={this.changeBackgroundColor}
                     type="color"/>
                    <p>{this.state.selectedColor}</p>

                </div>                       
            </div>
        )
    }
}
export default Background;