
import * as TYPES from '../actions/types'

const initialState = {
  tasks: [],
  tags: [],
  selectedTags: [],
  currentTask: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_ALL_TASKS: 
      return {
        ...state,
        tasks: action.payload,
      }
    case TYPES.GET_ALL_TAGS: 
      return {
        ...state,
        tags: action.payload,
      }
    case TYPES.TOGGLE_SELECTED_TAG: 
      const { tag , checked } = action.payload

      console.log(`${tag} ${checked}`)
      const { selectedTags } = state
      const nextSelecttags = checked ? [...selectedTags, tag] : selectedTags.filter( e => e !== tag)

      return {
        ...state,
        selectedTags: nextSelecttags,
      }
    case TYPES.ENTER_CURRENT_TASK: 
      return {
        ...state,
        currentTask: action.payload,
      }    
    default:
      return state    
  }
}

// export default reducerMain