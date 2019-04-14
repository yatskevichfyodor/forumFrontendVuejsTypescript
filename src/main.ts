import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import TopicsPanel from "@/components/TopicsPanel/TopicsPanel";
import TopicEdit from "@/components/TopicEdit/TopicEdit";
import Topic from "@/components/Topic/Topic";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: TopicsPanel },
  { path: '/topic-edit', component: TopicEdit },
  { path: '/topic/:topicId', component: Topic, name: 'topic' }
];

const router = new VueRouter({
  routes: routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
