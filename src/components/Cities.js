import React, { Component, Fragment } from 'react'
import City from './City'

export default class Cities extends Component {
  render(){
    return (
      <Fragment
      column>
       <City/>
       <City/>
       <City/>
       <City/>
      </Fragment>
    )
  }
}
