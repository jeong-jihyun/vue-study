<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="num1" @keyup="plusNumbers" />
      <span>+</span>
      <input type="text" v-model="num2" @keyup="plusNumbers" />
      <span>=</span>
      <span>{{ result }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "CalculatorComponent",
data() {
    return {
      num1: 0,
      num2: 0,
      result: 0,
    };
  },
  methods: {
    plusNumbers() {
      this.result = parseFloat(this.num1) + parseFloat(this.num2);
    },
  },
};
</script>
