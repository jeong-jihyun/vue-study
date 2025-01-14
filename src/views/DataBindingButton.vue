<template>
  <div>
    <input type="text" name="" id="" v-model="textValue" />&nbsp;
    <button type="button" v-bind:disabled="textValue === ''">Click</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textValue: "",
    };
  },
};
</script>
