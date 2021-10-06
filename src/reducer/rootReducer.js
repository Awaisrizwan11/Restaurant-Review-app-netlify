import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";

const rootReducer = combineReducers({

        itemsReducer : itemsReducer

})

export default rootReducer