import axios from 'axios'
import * as constants from '../constants'

export default function baseService(method, link, data) {
    if (method == constants.GET_METHOD) {
        return axios({
            method: method,
            url: link,
            headers: {'Accept': 'application/json'}
        });
    }

    return axios({
        method: method,
        url: link,
        data: data,
        headers: {'Accept': 'application/json'}
    });
}