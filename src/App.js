import React from 'react'
import jsonp from 'fetch-jsonp'

const getJSON = async uri => {
  const result = await fetch(uri).then(res => res.json)
  return result
}

export class SimpleForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: {} }
  }

  componentDidMount () {
    getJSON().then(json => this.setState({ items: json }))
  }

  render () {
    console.log(this.state)
  }
}
export default App
