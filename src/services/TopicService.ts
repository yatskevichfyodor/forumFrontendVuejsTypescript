import axios from 'axios';

export class TopicService {

    constructor(){
    }

    getTopics() {
        return axios.get('http://localhost:8080/topic/')
    }

}
