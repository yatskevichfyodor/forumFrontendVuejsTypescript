import {Component, Vue} from "vue-property-decorator";
import {TopicService} from "@/services/TopicService";
import {CommentService} from "@/services/CommentService";

const topicService = new TopicService();
const commentService = new CommentService();

@Component
export default class Topic extends Vue {
    title: string = '';
    dateCreated: string = '';
    comments: Array<any> = [];
    props: Array<any> = ['topicId'];
    async created() {
        this.getTopicData();
        this.getTopicComments();
    }
    getTopicData() {
        topicService.get(Number(this.$route.params.topicId)).then((response: any) => {
            let topic = response.data;
            console.log(topic);
            this.title = topic.title;
        })
    }
    getTopicComments() {
        commentService.getByTopicId(Number(this.$route.params.topicId)).then((response: any) => {
            let comments = response.data;
            console.log(comments);
            this.comments = comments;
        })
    }
}
