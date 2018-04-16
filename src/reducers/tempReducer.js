export default (state= [], action) => {
  switch ( action.type ) {
    case 'STORE_CLICKED_PROJECT':
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