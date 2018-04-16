import { connect } from 'react-redux'
import ProjectList from './ProjectList'

const mapStateToProps = state => {
  return ({
    projects: state.projects
  }) 
}

export default connect(mapStateToProps)(ProjectList)