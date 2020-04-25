
import * as TYPES from '../actions/types'

const initialState = {
  tasks: [],
  tags: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_ALL_TASKS: 
      return {
        ...state,
        tasks: action.payload,
      }
    case TYPES.GET_ALL_TAGS: 
      debugger
      return {
        ...state,
        tags: action.payload,
      }
    default:
      return state    
  }
}

// export default reducerMain