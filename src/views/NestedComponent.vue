<template>
  <div>
    <page-title :title="resultValue" />
  </div>
</template>
<script>
import PageTitle from "@/components/PageTitle.vue";
export default {
  components: { PageTitle },
  data() {
    return {
      resultValue: '동일한 값을 전달'
    };
  }
};
</script>
