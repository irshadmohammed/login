const initialState = {
  currentValue: Boolean,
  name: ""
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "REGISTRATION_SUCCESS_STATUS":
      return {
        ...state,
        currentValue: true
      }      
    case "SET_NAME":
      return {
        ...state,
        name: action.payload
      }
    default: return state
  }
}

export default reducer;