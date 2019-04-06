import Header from './components/Header/Header.vue'
import {Vue, Component} from "vue-property-decorator";
import TopicsPanel from "@/components/TopicsPanel/TopicsPanel";

const bg_img_green = require('./assets/images/bg_green.jpg')
const bg_img_blue = require('./assets/images/bg_blue.jpg')
const bg_img_red = require('./assets/images/bg_red.jpg')
const bg_img_orange = require('./assets/images/bg_orange.jpg')
const bg_img_purple = require('./assets/images/bg_purple.jpg')
const bg_img_yellow = require('./assets/images/bg_yellow.jpg')
const bg_img_turquoise = require('./assets/images/bg_turquoise.jpg')

@Component({
    components: { Header, TopicsPanel }
})
export default class App extends Vue {
    data() {
        return {
            style: {
                backgroundImage: `url(${getRandomImageName([bg_img_green, bg_img_blue, bg_img_red, bg_img_orange, bg_img_purple, bg_img_yellow, bg_img_turquoise])})`
            }
        }
    }
}

function getRandomImageName(imageNames: Array<string>) {
    return imageNames[Math.floor(Math.random() * imageNames.length)]
}
