
import * as TYPES from '../actions/types'

const state = {
  tasks: []
}

const reducerMain = (state , action) => {
  switch (action.type) {
    case TYPES.GET_ALL_TASKS: 
      return {
        ...this.state,
        tasks: action.payload,
      }
  }
}

export default reducerMain