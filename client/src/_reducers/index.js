import { combineReducers } from "redux";
import user from "./user_reducer";

const rootReducer = combineReducers({
  // 여러 reducer를 하나로 합쳐주는 역할
  user,
});

export default rootReducer;
