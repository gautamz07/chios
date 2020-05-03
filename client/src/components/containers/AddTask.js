import { connect } from 'react-redux'

import TaskComponent from '../AddTask'

import { getTags, submitTask } from '../../actions/api'

import { handleTag, handleInputTask } from '../../actions/index'

const mapStateToProps = ( state, ownProps )  => ({
  tags: state.tags,
  selectedTags: state.selectedTags,
  currentTask: state.currentTask,
})

const mapDispatchToProps = dispatch => ({
  getTags: () => dispatch(getTags()),
  handleTag: (tag, checked) => dispatch(handleTag(tag, checked)),
  handleInputTask: task => dispatch(handleInputTask(task)),
  submitTask: () => dispatch(submitTask()),
})

const AddTask = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskComponent)

export default AddTask