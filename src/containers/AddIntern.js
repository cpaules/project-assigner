import React from 'react'
import { connect } from 'react-redux'
import { addIntern } from '../actions/internActions'

const AddIntern = ({ dispatch }) => {
  let input

  return (
    <div className="header">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addIntern(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} placeholder="Enter Intern"/>
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default connect()(AddIntern)
