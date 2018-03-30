import { combineReducers } from 'redux';
import WeatherReducer from './reduce_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;