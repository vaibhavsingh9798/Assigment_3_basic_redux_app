import { createStore } from "redux";

const initialState = {
     text:''
   }


const reducerFun = (state =initialState ,action) =>{
     
     if(action.type === 'CHANGE'){
      return {  text: action.payload }
     }

     return state;
     
}

const store = createStore(reducerFun);

export default store;