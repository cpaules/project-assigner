import React from 'react'
import ProjectLi from '../components/ProjectLi'
import { storeClickedProject } from '../actions/tempActions';
import { connect } from 'react-redux'

const ProjectList = ({ projects, dispatch }) => ( 
  <ul className="theList">
    {projects.map(project =>
      <ProjectLi
        key={project.id}
        {...project}
        onClick={() => dispatch(storeClickedProject(project))}
      />
    )}
  </ul>
)

export default connect()(ProjectList)