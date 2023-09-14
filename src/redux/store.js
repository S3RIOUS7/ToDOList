import  {legacy_createStore as createStore}  from "redux";
import appReducer from './reducers';

const store = createStore(appReducer);

export default store;