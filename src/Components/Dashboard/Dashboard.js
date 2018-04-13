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
      this.state.houses.push(res)
    })
  }



  render() {
    let list = this.state.houses.map((house, i) => {
      console.log(this.state.houses)
      return (
        <House key={i} house={house} />
      )
    })
    return (
      <div>
        Dashboard
        <ul>{list}</ul>
        <Link to='/wizard'><button>Add New Property</button></Link>
        <House />
      </div>
    )
  }
}