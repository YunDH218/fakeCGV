import url from '../resource/string/url.json';
import axiosInstance from './axiosInstance';
import { getCookie } from './cookiesUtil';

export default function checkLoginStatus() {
    axiosInstance({
        url: url.verify,
        method: 'get',
        headers: {
            'accessToken': getCookie('accessToken'),
            'refreshToken': getCookie('refreshToken')
        }
    })
    .then(res => {
        console.log(res);
        return true;
    })
    .catch(error => {
        console.log(error);
        return false;
    })
}