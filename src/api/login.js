import axios from './index';
export function login(phone, password) {
    return axios.post('/user/login', {
        phone,
        password
    })
}
export function queryClassify() {
    return axios.get('/user/classify').then(result => {
        if (parseInt(result.code) === 0) {
            return result;
        }
    })
}