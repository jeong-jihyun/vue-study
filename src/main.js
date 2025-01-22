import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";
import i18nPlugin from "./plugins/i18n";
import store from "./store";

const i18nStrings = {
  en: {
    hi: "Hello!",
  },
  ko: {
    hi: "안녕하세요",
  },
};
// router 사용
const app = createApp(App);
app.use(router);
app.use(i18nPlugin, i18nStrings);
app.use(store);
app.mixin(mixins);
app.mount("#app");
