

const initialData = {
  items: []
  
  
}

function itemsReducer(state = initialData, action) {

  switch (action.type) {
    case 'ADD_ITEM': return {
      ...state,
      items: [...state.items, action.payload]
    }
    default :{

    }

  }
  return state;
}

export default itemsReducer;
