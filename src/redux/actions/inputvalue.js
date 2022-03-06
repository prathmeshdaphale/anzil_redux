import { ADD_INPUT_VALUE, SUB_INPUT_VALUE,MUL_INPUT_VALUE,DIV_INPUT_VALUE } from '../constants';

let nextTodoId = 0;
export const addvalue = content => ({
  type: ADD_INPUT_VALUE,
  payload: {
    content
  }
});

export const subvalue = content => ({
    type: SUB_INPUT_VALUE,
    payload: {
      content
    }
  });
  export const mulvalue = content => ({
    type: MUL_INPUT_VALUE,
    payload: {
      content
    }
  });
  export const divivalue = content => ({
    type: DIV_INPUT_VALUE,
    payload: {
      content
    }
  });
      