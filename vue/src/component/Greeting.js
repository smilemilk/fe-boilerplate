import Vue from 'vue';
import Component from 'vue-class-component';


@Component({
  props: {
    propMessage: String
  }
})
export default class Greeting extends Vue {

  render(h) {
    return (
      <div id="app">
        <img src="../../public/assets/logo.png"/>
          <h1>{ this.msg }</h1>
          <h2>Essential Links</h2>
          <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
          </ul>
          <h2>Ecosystem</h2>
          <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
          </ul>
      </div>
    );
  }
}
