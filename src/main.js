import { createApp } from 'vue/dist/vue.esm-bundler';
import App from "./app(route)/App.vue";
import router from './router';
// import store from './app(stateII)/store';
// import App from "./app(forms)/App.vue";
// import ToDo from './app2/components/Todo.vue';

const app = createApp(App);
app.use(router).mount('#app');
