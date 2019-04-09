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

    get(topicId: number) {
        return axios.get(`${SERVICE_URI}/${topicId}`)
    }

    create(topic: any) {
        return axios.post(SERVICE_URI, topic)
    }

    update(topic: any) {
        return axios.put(SERVICE_URI, topic)
    }

    delete(topicId: number) {
        return axios.delete(`${SERVICE_URI}/${topicId}`)
    }
}
