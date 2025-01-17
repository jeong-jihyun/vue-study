<template>
  <select name="" id="" v-model="selectValue" @change="changeSelect">
    <option value="서울">서울</option>
    <option value="부산">부산</option>
    <option value="제주">제주</option>
  </select>
  <!-- Enter -->
  <input type="text" @keyup.enter="submit" />
  <!-- Alt + Enter  -->
  <input type="text" @keyup.alt.enter="clear" />
  <div @click.ctrl="doSomething">Do something</div>
</template>
<script>
export default {
  data() {
    return {
      selectValue: "",
    };
  },
  methods: {
    changeSelect() {
      alert(this.selectValue);
    },
    submit() {
      alert("submit");
    },
    clear() {
      alert("clear");
    },
    doSomething() {
      alert(this.selectValue);
    },
  },
};
</script>
