import { combineReducers } from "redux";
import toogle from "./toogle/reducer";
import movies from "./movies/reducer";

const rootReducer = combineReducers({
  toogle,
  movies
});
export default rootReducer;
