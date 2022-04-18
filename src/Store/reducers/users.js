

const initialState = {
    usersList:[],
    loader:false
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET-USERS-START': {
        return {
          ...state,
          loader:true
        }
      }
      case 'GET-USERS-FINISH': {
        return {
          ...state,
          usersList:action.pailod,
          loader:false
        }
      }
      default:
        return state
    }
  }
  
    
