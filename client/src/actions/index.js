import * as TYPES from './types'

export const getAllTasks = item => ({
  type: TYPES.GET_ALL_TASKS,
  payload: item,
})

export const getAllTags = tags => ({
  type: TYPES.GET_ALL_TAGS,
  payload: tags,
})

export const handleTag = (tag, checked) => ({
  type: TYPES.TOGGLE_SELECTED_TAG,
  payload: {
    tag,
    checked,
  },
})

export const handleInputTask = task => ({
  type: TYPES.ENTER_CURRENT_TASK,
  payload: task,
})
