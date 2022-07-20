import React, { Component } from 'react'
import Toggle from './Toggle'

export class Menu extends Component {
  render() {
    return (
       <Toggle render={function(on,toggle){
        const style={
            display: on?"block":"none"
        }
        return(
            <>
            <button onClick={toggle}>{on ?"Hide":"Show"} info</button>
            <p style={style}>Compose bold, clear, mistake-free writing with 
                Grammarly’s new AI-powered desktop Windows app.</p>
                </>
        ) 
        }}/>
   
    )
  }
}

export default Menu