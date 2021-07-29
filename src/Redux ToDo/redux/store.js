import { createStore } from "redux";
import rootReducer from "./combinedReducer";

// convert object to string and store in localStorage
function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("todoLists", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }

  // load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("todoLists");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }
  
const store=createStore(rootReducer,loadFromLocalStorage(),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store