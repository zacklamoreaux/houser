import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Wizard extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div>
        Wizard
        <Link to='/'><button>Cancel</button></Link>
      </div>
    )
  }
}