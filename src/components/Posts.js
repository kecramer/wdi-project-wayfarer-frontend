import React, { Component, Fragment } from 'react'
import Post from './Post'

export default class Posts extends Component {
  render(){
    return (
      <Fragment>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
      </Fragment>
    )
  }
}
