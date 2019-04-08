import {Component, Vue} from "vue-property-decorator";
import {TopicService} from "@/services/TopicService";

const topicService = new TopicService();

@Component
export default class TopicsPanel extends Vue {
    topics: Array<any> = [];
    async created() {
        let tmp = this.refreshTopics();
        console.log(tmp)
    }
    async refreshTopics() {
        return topicService.getAll().then((response: any) => {
            this.topics = response.data;
        })
    }
}
