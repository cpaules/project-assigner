import React from 'react'
import { connect } from 'react-redux'
import { addProject } from '../actions/projectActions'

const AddProject = ({ dispatch }) => {
  let input

  return (
    <div className="header">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addProject(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} placeholder="Enter Project"/>
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default connect()(AddProject)
