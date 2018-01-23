import React, { Component } from 'react'

import Register from 'components/Register'

class App extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleError = this.handleError.bind(this)

    this.state = {
      register: {
        username: 'Andre',
        plan: 2,
      },
      errors: {
        register: {
        }
      }
    }
  }

  handleError(name, error) {
    console.log(name, error)
    this.setState({ errors: {
        ...this.state.errors,
        register: {
          ...this.state.errors.register,
          [name]: error,
        } 
      } 
    })
  }

  handleChange(e) {
    console.log(this)
    this.setState({ register: {
      ...this.state.register,
      [e.target.name]: e.target.value,
    }})
  }

  render() {
    const hasErrors = Object.keys(this.state.errors.register).length > 0
    return (
      <div>
        <Register
          values={this.state.register}
          errors={this.state.errors.register}
          onChange={this.handleChange}
          onError={this.handleError}
        />
        <button type="submit" disabled={hasErrors}>Submit!</button>
      </div>
    )
  }
}

export default App