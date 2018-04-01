import { FETCH_WEATHER_SUCCESS } from '../actions/index';

export default (state = [], action) => {
    
    switch (action.type) {
        case FETCH_WEATHER_SUCCESS:
            return [action.payload.data, ...state];
    }

    return state;
}