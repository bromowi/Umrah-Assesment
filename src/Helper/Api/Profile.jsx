import axios from 'axios';
import { baseUrl } from './index';

export function apiPostProfile(headers) {
    return axios ({
        method: 'POST'
        url: baseUrl +'/register',
        headers,
    });
}
