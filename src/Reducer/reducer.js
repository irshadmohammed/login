const initialState = {
  currentValue: Boolean,
  error: "",
  name: ""
}

const reducer = (state = initialState, action) => {
  console.log(action.payload)
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