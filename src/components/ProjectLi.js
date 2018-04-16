import React from 'react'

const ProjectLi = ({ onClick, text }) => (
  <li onClick={onClick} >
    {text}
  </li>
)

export default ProjectLi