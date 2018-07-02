import React, { Component, Fragment } from 'react'
import City from './City'
import { connect } from 'react-redux'

class Cities extends Component {
  render(){
    return (
        <Fragment>
          {this.props.cities.map(city => (
            <City city={city}/>
          ))}
        </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps)(Cities)
