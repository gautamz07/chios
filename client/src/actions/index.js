import * as TYPES from './types'

export const getAllTasks = item => ({
  type: TYPES.GET_ALL_TASKS,
  payload: item,
})

export const getAllTags = tags => ({
  type: TYPES.GET_ALL_TAGS,
  payload: tags,
})