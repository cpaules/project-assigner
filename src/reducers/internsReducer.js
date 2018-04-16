export default (state= [], action) => {
  switch ( action.type ) {
    case 'ADD_INTERN':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          project: action.project
        }
      ]
    case 'ADD_PROJECT_TO_INTERN':
      return state.map(intern => intern.id === action.id ? {...state.intern, id : action.id, text : intern.text, project : action.project} : intern)
    default:
      return state;
  }
}