import * as TYPES from './types'

export const getAllTasks = item = ({
  type: TYPES.GET_ALL_TASKS,
  payload: item,
})