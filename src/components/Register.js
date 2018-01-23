import React, { Component } from 'react'

const minLength10 = (value) => value.length < 10 ? 'Value too short' : undefined
const notLowerThan2 = (value) => value < 2 ? 'Value too low' : undefined

const VALIDATORS = {
  username: [minLength10],
  plan: [notLowerThan2]
}

class Register extends Component {
  constructor(props) {
    super(props)

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(e) {
    const name = e.target.name
    const value = e.target.value
    const validators = VALIDATORS[name]

    let hasErrors = false
    validators.forEach((validator) => {
      const validatorErrorOrUndefined = validator(value)

      if (validatorErrorOrUndefined) {
        hasErrors = true

        this.props.onError(name, validatorErrorOrUndefined)
      }
    })

    if (!hasErrors) {
      this.props.onError(name, undefined)
    }

    this.props.onChange(e)
  }

  render() {
    return (
      <form>
        <p>Register Component</p>
        <input type="text" name="username" value={this.props.values.username} onChange={this.handleOnChange} />
        {this.props.errors.username && <p>Invalid value: {this.props.errors.username}!</p>}
        <select name="plan" value={this.props.values.plan} onChange={this.handleOnChange} >
          <option value={1}>1 Month</option>
          <option value={2}>2 Months</option>
          <option value={3}>3 Months</option>  
        </select>
        {this.props.errors.plan && <p>Invalid value: {this.props.errors.plan}!</p>}
      </form>
    )
  }
}

export default Register