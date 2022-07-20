import React, { Component } from 'react'

export class Toggle extends Component {
    state={
        on: true
    }
    handleClick=()=>{
        this.setState(prevState => {
            return {
                on: !prevState.on
            }
        })
    }
  render() {
    return (
      <div>
        {this.props.render(this.state.on,this.handleClick)}
      </div>
    )
  }
}

export default Toggle