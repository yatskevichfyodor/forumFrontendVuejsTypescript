import axios from 'axios';

const serverPath: string = 'http://localhost:8080';
const topicServicePath: string = serverPath + '/topic';

export class TopicService {
    constructor(){
    }

    getAll(topicId: number) {
        return axios.get(`${topicServicePath}/${topicId}`)
    }

    get(topicId: number) {
        return axios.get(`${topicServicePath}/`)
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
