import React from 'react';
import logo from './logo.svg';
import './App.css';

class CBoxForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { check: true }
  }

render () {
  return (<div>
      <form onSubmit={e => this.doSubmit(e)}>
          <label>
              <input type='checkbox'
                  onChange={e => this.doChange(e)}
                  checked={this.state.check}
              </label><br />
              <input type='submit' value='決定' />
          </form>
      </div>)
    }
    doChange (e) {
        this.setState({ check: !this.state.check })
                  }
    
    doSubmit (e) {
      e.preventDefault()
      window.alert(this.state.check ? '食べる' : '食べない')
    }
}

ReactDom.render(
  <CBoxForm />
  document.getElementById('root')
)
                  
export default App;
