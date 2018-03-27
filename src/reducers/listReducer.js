//Any new reducers should follow this format. Reducers for similar actions should be declared in the same file, and that file should be imported into the reducers index.js file to be combined with all other reducers for the application.

export const listReducer = (state = {
  items: [
    { text: 'aaa', id: 0 },
    { text: 'bbb', id: 2 },
  ],
}, action) => {
  switch(action.type) {
  case 'ADD_ITEM': 
    return {
      ...state,
      items: [...state.items, action.item],
    };
  case 'DELETE_ITEM':
    return {
      ...state,
      items: state.items.filter( e => e.id !== action.item.id),
    };
  default: 
    return state;
  }
};

