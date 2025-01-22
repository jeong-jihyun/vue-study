<template>
    <p>count: {{ count }}</p>
    <button type="button" @click="increment">increment</button>
</template>
<script>
export default{
    computed:{
        count(){
            return this.$store.state.count;
        }
    },
    methods:{
        increment(){
            this.$store.commit('increment')
        }
    }
}
</script>