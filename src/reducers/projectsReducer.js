export default (state= [], action) => {
  switch ( action.type ) {
    case 'ADD_PROJECT':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    default:
      return state;
  }
}