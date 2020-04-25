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

  // console.log(`tasks are ${tasks}`)
  debugger
  dispatch(getAllTags(tags))

  // fetch( '/gettags' , {
  //   method: "POST"
  // }) 
  // .then( ( resp ) => {
  //     console.log(resp)
  //     return resp.json();
  // })
  // .then( ( data ) => {
  //     console.log(data)
  //     let arr = [...data];  
  //     this.setState({
  //       ...this.state,
  //       tags : arr
  //     });

  // })
  // .catch( ( err ) => {
  //     console.log( err );                
  // }); 

}