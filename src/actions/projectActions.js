let nextProjectId = 0
export const addProject = text => ({
  type: 'ADD_PROJECT',
  id: nextProjectId++,
  text
})

