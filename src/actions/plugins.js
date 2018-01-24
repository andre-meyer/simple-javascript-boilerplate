import { requestPlugins } from 'api'

export const addPlugin = (plugin) => {
  return {
    type: 'ADD_PLUGIN',
    payload: plugin
  }
}

export const loadPlugins = () => async (dispatch) => {
  const plugins = await requestPlugins()
  plugins.forEach((plugin) => dispatch(addPlugin(plugin)))
}