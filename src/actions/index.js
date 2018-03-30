import axios from 'axios';

const API_KEY = '9de52b6a37a51a0778ebeb62e80eb037';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    return (dispatch) => {
        const url = `${ROOT_URL}&q=${city}&units=metric`;
        axios.get(url)
            .then(response => {
                dispatch({
                    type: FETCH_WEATHER,
                    payload: response
                })
            });
    }
}