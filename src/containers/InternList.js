import React from 'react'
import InternLi from '../components/InternLi'
import { addProjectToIntern } from '../actions/internActions';
import { connect } from 'react-redux'

const InternList = ({ interns, dispatch, temp }) => ( 
  <ul className="theList">
    {interns.map(intern =>
      <InternLi
        key={intern.id}
        {...intern}
        onClick={() => {
          const lastTemp = temp[temp.length - 1]
          lastTemp ? dispatch(addProjectToIntern(lastTemp, intern.id)) : true   
        }}
      />
    )}
  </ul>
)

const mapStateToProps = state => {
  return ({
    temp: state.temp
  }) 
}

export default connect(mapStateToProps)(InternList)