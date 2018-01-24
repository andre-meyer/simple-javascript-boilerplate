const initialState = {}

const pluginReducer = (state = initialState, action) => {
  const type = action.type

  switch(type) {
    case 'ADD_PLUGIN': {
      const id = action.payload.id
      return {
        ...state,
        [id]: { ...action.payload },
      }
      break;
    }
    default: {
      return state
    }
  }
}

export default pluginReducer