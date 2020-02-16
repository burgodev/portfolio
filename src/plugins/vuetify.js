import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VideoBackground from 'vue-responsive-video-background-player'
import VueParticles from 'vue-particles'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)
Vue.component('kinesis-element', KinesisElement)

Vue.use(Vuetify);
Vue.use(VueParticles);


Vue.component('video-background', VideoBackground);


export default new Vuetify({
});
