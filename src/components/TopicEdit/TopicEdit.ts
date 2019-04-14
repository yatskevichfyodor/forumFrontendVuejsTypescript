import {Component, Vue} from "vue-property-decorator";
import {TopicService} from "@/services/TopicService";

const topicService = new TopicService();

@Component
export default class TopicEdit extends Vue {
    topic: any = {
        title: '',
        comments: [
            { content: '' }
        ]
    };
    createTopic() {
        topicService.create(this.topic).then((response: any) => {
            console.log(response);
            this.redirectToHomePage();
        })
    };
    redirectToHomePage() {
        this.$router.push('/')
    }
}

