import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Wizard extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleZipChange = this.handleZipChange.bind(this)
  }
  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleAddressChange(e) {
    this.setState({
      address: e.target.value
    })
  }

  handleCityChange(e) {
    this.setState({
      city: e.target.value
    })
  }

  handleStateChange(e) {
    this.setState({
      state: e.target.value
    })
  }

  handleZipChange(e) {
    this.setState({
      state: e.target.value
    })
  }

  render() {
    return (
      <div>
        Wizard
        <Link to='/'><button>Cancel</button></Link>
        <input type='text' onChange={this.handleNameChange} />
        <input type='text' onChange={this.handleAddressChange} />
        <input type='text' onChange={this.handleCityChange} />
        <input type='text' onChange={this.handleStateChange} />
        <input type='text' onChange={this.handleZipChange} />
      </div>
    )
  }
}