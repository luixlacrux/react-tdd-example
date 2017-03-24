import React, { Component, PropTypes } from 'react'

export class BeerListContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      beers: []
    }
    this.addItem = this.addItem.bind(this)
  }

  addItem (name) {
    this.setState({
      beers: [].concat(this.state.beers).concat([name])
    })
  }

  render () {
    return (
      <div>
        <InputArea onSubmit={this.addItem}/>
        <BeerList items={this.state.beers}/>
      </div>
    )
  }
}

export class InputArea extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
    this.setText = this.setText.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  setText (e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit (e) {
    e ? e.preventDefault() : null
    this.props.onSubmit(this.state.text)
    this.cleanText()
  }

  cleanText () {
    this.setState({ text: '' })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.text} onChange={this.setText}/>
        <button>ADD</button>
      </form>
    )
  }
}

InputArea.propTypes = {
  onSubmit: PropTypes.func
}

export class BeerList extends Component {
  render() {
    return this.props.items ?
      (<ul>
        {this.props.items.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>)
      : null
  }
}

BeerList.propTypes = {
  items: PropTypes.array.isRequired
}

BeerList.defaultProps = {
  items: []
}
