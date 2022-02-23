import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
        <div className="card">
            {this.props.render(this.props.house.pic, this.props.house.title, this.props.house.price)}
        </div>
    )
  }
}
