import { computed, reactive, toRef } from "vue";

const plusCalculator = () => {
  let state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => parseInt(state.num1) + parseInt(state.num2)),
  });
  console.log(`num1 >> ${state.num1}`)
  return toRef(state);
};
export { plusCalculator };
