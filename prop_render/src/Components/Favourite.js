import React from 'react'
import Toggle from './Toggle'

function Favourite() {
  return (
    <div>
        <Toggle render={(on,toggle)=> {
            return(
                <>
                <h1>Click to {on ?"Dislike":"Like"}</h1>
               <span onClick={toggle}>{on ? "❤️": "🖤"}</span>
               </>
            )
          
           
        }}/>
    </div>
  )
}

export default Favourite