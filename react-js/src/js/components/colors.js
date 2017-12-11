import React, { Component } from 'react'
import Color from './color.js'

class Colors extends Component {
  render(){
    return (
      <ul className="colors">
        {
          this.props.data.map((color) => {
            return <Color {...color} key={color.hex} />
          })
        }
      </ul>
    )
  }
}

export default Colors