import { GET_ERRORS,CLEAR_ERRORS } from '../actions/types';
import { isNull } from 'util';

const initialState={
    msg: {},
    status: null,
    id: null
}

export default function(state=initialState,action) {
switch(action.type){
    case GET_ERRORS:
      return {
          msg: action.payload.msg,
          status: action.payload,
          id: action.payload.id
      };
      case CLEAR_ERRORS:
      return {
          msg:{},
          status: null,
          id:null
      };
      default:
      return state;
}
}