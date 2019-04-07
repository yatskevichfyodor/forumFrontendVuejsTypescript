import axios from 'axios';

const serverPath: string = 'http://localhost:8080';
const topicServicePath: string = serverPath + '/topic';

export class TopicService {
    constructor(){
    }

    getAll() {
        return axios.get(`${topicServicePath}/`)
    }

    get(topicId: number) {
        return axios.get(`${topicServicePath}/${topicId}`)
    }

    create(topic: any) {
        return axios.post(topicServicePath, topic)
    }

    update(topic: any) {
        return axios.put(topicServicePath, topic)
    }

    delete(topicId: number) {
        return axios.delete(`${topicServicePath}/${topicId}`)
    }
}
