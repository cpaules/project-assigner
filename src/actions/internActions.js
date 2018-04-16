let nextInternId = 0;

export const addIntern = text => ({
  type: 'ADD_INTERN',
  id: nextInternId++,
  text,
  project: ""
})

export const addProjectToIntern = (temp, id) => ({
  type: 'ADD_PROJECT_TO_INTERN',
  id: id,
  project: temp.text
})