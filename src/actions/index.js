import axios from 'axios';

const API_KEY = '0918ed3bbcc0cb47ef8a1c790e06b2a7';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},au`;
    const request = axios.get(url);

    return ({
        type: FETCH_WEATHER,
        payload: request
        }
    )
}

