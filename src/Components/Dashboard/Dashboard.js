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
    this.getHouses()
  }

  getHouses() {
    axios.get('/api/houses').then(res => {
      res.status(200).send(houses)
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