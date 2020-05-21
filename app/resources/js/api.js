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

export const createDashboardItem = (request, itemType) => {
    const types = {CMT: 'commitment', FLD: 'folder', CTG: 'category'};
    console.log(request);
    
    if (itemType === types.CMT) {
        return axios.post('/create/commitments', request);
    } else if (itemType === types.FLD) {
        return axios.post('/create/folders', request);
    } else {
        return axios.post('/create/categories', request);
    }
};