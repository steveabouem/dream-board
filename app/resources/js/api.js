import axios from 'axios';

export const setLang = lang => {
    return axios.post('/lang', {lang});
};

export const requestRegistry = values => {
    return axios.post('users/register', values);
};

export const requestLogin = values => {
    return axios.post('users/login', values);
};