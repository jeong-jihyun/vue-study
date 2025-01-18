<template>
  <child-component @send-message="sendMessage" ref="child_component" />
</template>
<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  components: { ChildComponent },
  methods: {
    sendMessage(data) {
      console.log(data);
    },
  },
  mounted() {
    this.$refs.child_component.$refs.btn.click();
  },
};
</script>
