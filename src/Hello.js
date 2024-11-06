import React, { Component } from 'react'
import './Hello.css'

export default class Hello extends Component {
  render() {
    return (
      <>
      <div className='black-nav'>
        컴포넌트 추가 
      </div>
      <div className="list">
        <h4>니체 </h4>
        <p>11월 3일 발행</p>
      </div>

      <div className="list">
        <h4>쇼펜하이머</h4>
        <p>11월 4일 발행</p>
      </div>

      <div className="list">
        <h4>헤겔</h4>
        <p>11월 5일 발행</p>
      </div>
      </>
    )
  }
}




