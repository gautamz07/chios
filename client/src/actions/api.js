// export const getAllTasks 

import {
  getAllTags
} from './index'


export const getTags = () => async (dispatch , getState) => {

  const tags = await fetch( '/gettags' , {
    method: "POST"
  }).then( ( resp ) => {
    return resp.json();
  }).catch(err => console.log( err )); 
  dispatch(getAllTags(tags))
}


export const submitTask = () => async ( dispatch, getState ) => {

    const { currentTask, selectedTags } = getState()
    const tag = selectedTags.pop()

    fetch('/insertIT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        taskDetails: {
          task: currentTask,
          tag,
        }
      })
    })
    .then(res => res.json())
    .then(res => console.log(res))

}

