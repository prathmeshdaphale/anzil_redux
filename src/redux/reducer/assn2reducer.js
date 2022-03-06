import { ADD_INPUT_TEXT } from "../constants";

const initialState={
    list:[]
}

const NamelistReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_INPUT_TEXT:{
            return{
                ...state,
                list:action.payload
            }
        }

    
        default:{
            return state
        }
        
    }
}
export default NamelistReducer;