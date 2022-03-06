import { ADD_INPUT_VALUE,SUB_INPUT_VALUE,MUL_INPUT_VALUE,DIV_INPUT_VALUE } from "../constants";

const initialState = {
    output: 0
  }
  
  const CalReducer = (state = initialState, action) => {
      switch(action.type) {
      case ADD_INPUT_VALUE: {
        return {
            ...state,
          output:Number(action.payload.content.firstIP)+Number(action.payload.content.secondIP)
      }
    }
    case SUB_INPUT_VALUE: {
        return {
            ...state,
          output:Number(action.payload.content.firstIP)-Number(action.payload.content.secondIP)
      }
    }
    case MUL_INPUT_VALUE: {
        return {
            ...state,
          output:Number(action.payload.content.firstIP)*Number(action.payload.content.secondIP)
      }
    }
    case DIV_INPUT_VALUE: {
        return {
            ...state,
          output:Number(action.payload.content.firstIP)/Number(action.payload.content.secondIP)
      }
    }
    default: {
        return state;
      }
    }
}

export default CalReducer