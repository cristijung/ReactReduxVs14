import { 
    FETCH_CAT_REQUEST, 
    FETCH_CAT_SUCCESS, 
    FETCH_CAT_FAILURE 
  } from '../actions/catActions';
  
  interface CatState {
    loading: boolean;
    catData: any | null;
    error: any | null;
  }
  
  const initialState: CatState = {
    loading: false,
    catData: null,
    error: null,
  };
  
  const catReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case FETCH_CAT_REQUEST:
        return { ...state, loading: true };
      case FETCH_CAT_SUCCESS:
        return { ...state, loading: false, catData: action.payload, error: null };
      case FETCH_CAT_FAILURE:
        return { ...state, loading: false, catData: null, error: action.payload };
      default:
        return state;
    }
  };
  
  export default catReducer;