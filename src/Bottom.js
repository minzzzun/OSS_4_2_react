// eslint-disable-next-line
import React, { Component } from 'react'
import Logo from "./logo.svg"
import "./Bottom.css"

export default class Bottom extends Component {
  render() {
    return (
      <div>
        <div className='link'>Facebook</div>
        <div className='link'>GitHub</div>
        <img src = {Logo} alt="" />
      </div>
    )
  }
}
