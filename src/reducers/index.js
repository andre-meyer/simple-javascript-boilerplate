import { combineReducers } from 'redux'

import pluginReducer from './plugins'

export default combineReducers({
  plugins: pluginReducer,
})