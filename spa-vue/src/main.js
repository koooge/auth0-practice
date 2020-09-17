import {createApp} from "vue";
import App from "./App.vue";
import router from './router'

// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";

const app = createApp(App);

// Install the authentication plugin here
app.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

app.use(router).mount('#app');
