import { connect } from 'react-redux'

import TaskComponent from '../AddTask'

import { getTags } from '../../actions/api'

const mapStateToProps = ( state, ownProps )  => ({
  tags: state.tags,
})

const mapDispatchToProps = dispatch => ({
  getTags : () => dispatch(getTags()),
})

const AddTask = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskComponent)

export default AddTask