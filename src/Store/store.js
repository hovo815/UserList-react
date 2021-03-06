import { createStore, combineReducers } from "redux";
import usersReducer from "./reducers/users"

const rootReducer = combineReducers({
  users:usersReducer
})

const store = createStore(rootReducer)

export {store};