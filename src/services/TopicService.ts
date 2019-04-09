import axios from 'axios';

const config = require('@/config');
const API_URI = config.API_URI;
const SERVICE_URI: string = API_URI + '/topic';

export class TopicService {
    constructor(){
    }

    getAll() {
        return axios.get(`${SERVICE_URI}/`)
    }

    get(id: number) {
        return axios.get(`${SERVICE_URI}/${id}`)
    }

    create(dto: any) {
        return axios.post(SERVICE_URI, dto)
    }

    update(dto: any) {
        return axios.put(SERVICE_URI, dto)
    }

    delete(id: number) {
        return axios.delete(`${SERVICE_URI}/${id}`)
    }
}
