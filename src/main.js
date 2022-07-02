import { createApp } from 'vue';

import router from "./router"
import store from './store/index';
import App from "./App";
import BaseCard from './components/ui/BaseCard';
import BaseButton from "./components/ui/BaseButton";
import BaseBadge from "./components/ui/BaseBadge";
import BaseSpinner from "./components/ui/BaseSpinner";

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);

app.mount('#app');
