import React from 'react'

const InternLi = ({ onClick, text, project }) => (
  <li onClick={onClick} >
    {text}
    {project ? " => " + project : project}
  </li>
)

export default InternLi