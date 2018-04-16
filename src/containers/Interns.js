import { connect } from 'react-redux'
import InternList from './InternList'

const mapStateToProps = state => {
  return ({
    interns: state.interns
  }) 
}

export default connect(mapStateToProps)(InternList)