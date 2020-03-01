import axios from 'axios';

export const setLang = lang => {
    return axios.post('/lang', {lang});
};

export const getLang = () => {
    return axios.get('/lang');
};