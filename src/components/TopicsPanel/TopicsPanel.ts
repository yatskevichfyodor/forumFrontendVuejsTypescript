import {Component, Vue} from "vue-property-decorator";
import {TopicService} from "@/services/TopicService";

const topicService = new TopicService()

@Component
export default class TopicsPanel extends Vue {
    loading: boolean = false
    topics: Array<any> = []
    model: any = {}
    async created() {
        let tmp = this.refreshTopics()
        console.log(tmp)
    }
    async refreshTopics() {
        return topicService.getTopics().then((data: any) => {
            this.topics = data;
        })
        console.log('Hello World!');
    }
}

