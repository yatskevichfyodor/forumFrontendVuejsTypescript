import {Component, Vue} from "vue-property-decorator";
import {TopicService} from "@/services/TopicService";
import {CommentService} from "@/services/CommentService";

const topicService = new TopicService();
const commentService = new CommentService();

@Component
export default class Topic extends Vue {
    id!: number;
    title: string = '';
    dateCreated: string = '';
    comments: Array<any> = [];
    inputCommentContent: string = '';
    async created() {
        this.getTopicData();
        this.refreshComments();
        this.id = Number(this.$route.params.topicId);
    }
    getTopicData() {
        topicService.get(Number(this.$route.params.topicId)).then((response: any) => {
            console.log(response);

            let topic = response.data;
            this.title = topic.title;
            this.dateCreated = topic.dateCreated;
        })
    }
    refreshComments() {
        commentService.getByTopicId(Number(this.$route.params.topicId)).then((response: any) => {
            console.log(response);

            this.comments = response.data;
        })
    }
    addComment() {
        commentService.create({content: this.inputCommentContent, topic: {id: this.id}}).then((response: any) => {
            console.log(response);
            this.refreshComments();
            this.inputCommentContent = '';

        })
    }
}
