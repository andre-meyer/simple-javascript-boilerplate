import React, { Component } from 'react'
import { connect } from 'react-redux'
import qs from 'query-string'

import { loadPlugins } from 'actions/plugins'
import Register from 'components/Register'

import { requestPlugins } from 'api'

class App extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleError = this.handleError.bind(this)

    const params = qs.parse(location.search.slice(1))
    this.state = {
      serial: params.serial,
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

  componentWillMount() {
    this.props.loadPlugins()
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

  handleAddPlugin(e) {
    this.props.addPlugin({ id: Math.floor(Math.random() * 50), name: 'Something', price: Math.random() * 50 })
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
        <p>{this.state.serial}</p>
        {Object.keys(this.props.plugins).map((pluginId) => {
          const plugin = this.props.plugins[pluginId]
          return (
            <div key={plugin.id}>
              <p>{plugin.name}</p>
              <p>{plugin.price.toFixed(2)} €</p>
            </div>
          )
        })}
        <button type="submit" disabled={hasErrors}>Submit!</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    plugins: state.plugins,
  }
}

const mapDispatchToProps = {
  loadPlugins,
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default connectedApp