import {
    GET_PROFILE,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILED,
  } from "../actions/types.js";
  
  // initial state = nilai awal data profile yang ada di store
  const initialState = {
    isLoading: false,
    data: 
      {
        username: "",
        password: "",
        
      },
  };
  
  const profile = (state = initialState, action) => {
    switch (action.type) {
      case GET_PROFILE: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case GET_PROFILE_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      }
      case GET_PROFILE_FAILED: {
        return {
          ...state,
          isLoading: false,
        };
      }
      default:
        return state;
    }
  };
  
  export default profile;
  