<template>
  <CompositionAPIInject />
</template>
<script>
import { defineComponent, provide } from "vue";
import CompositionAPIInject from "./CompositionAPIInject.vue";

export default defineComponent({
  name: "CompositionAPIProvide",
  components: { CompositionAPIInject },
  setup() {
    //const message = ref("Hello from Composition API Provide!");
    //provide("message", message);
    provide("title", "vue js 프로젝트");
  },
});
</script>
