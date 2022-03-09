import { INPUT_VALUE_UPDATE} from "../constants";

const initialState={
    firstIP:0,
    secondIP:0
}

 const HandleReducer=(state=initialState,action)=>{
    switch(action.type){
        case INPUT_VALUE_UPDATE:{
           return{
                ...state,
                firstIP:action.payload.content.firstIP,
                secondIP:action.payload.content.secondIP,
            
            }
        }
        default:
            return state;
               
        
    }
}
export default HandleReducer