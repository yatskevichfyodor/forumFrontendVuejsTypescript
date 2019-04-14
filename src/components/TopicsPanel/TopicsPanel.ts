import {Component, Vue} from "vue-property-decorator";
import {TopicService} from "@/services/TopicService";

const topicService = new TopicService();

@Component
export default class TopicsPanel extends Vue {
    topics: Array<any> = [];
    async created() {
        this.refreshTopics();
    }
    async refreshTopics() {
        topicService.getAll().then((response: any) => {
            this.topics = response.data;
        })
    }
}
