import React, { Component } from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
  constructor() {
    super()

    this.state = {
      houses: []
    }
  }

  componentDidMount() {
    axios.get('/api/houses').then( res => {
      console.log(res)
      this.state.houses.push(res.data)
    })
  }

  render() {
    let list = this.state.houses.map((house, i) => {
      console.log(this.state.houses)
      return (
        <li><House key={i} house={house} /></li>
      )
    })
    return (
      <div>
        <ul>{list}</ul>
        <Link to='/wizard'><button>Add New Property</button></Link>
      </div>
    )
  }
}