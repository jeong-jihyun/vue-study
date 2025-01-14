<template>
  <div>
    <div>{{ htmlString }}</div>
    <!--html을 사용할 때는 v-html을 사용을 한다.-->
    <div v-html="htmlString"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      htmlString: '<p style="color:red">This is a string</p>',
    };
  },
};
</script>
