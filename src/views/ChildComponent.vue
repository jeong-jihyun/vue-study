<template>
    <button type="button" @click="childFunc" ref="btn">Click</button>
</template>
<script>
export default{
    data(){
        return {
            msg : '자식 컴포넌트로부터 보내는 메세지'
        }
    },
    methods:{
        childFunc(){
            console.log('부모에서 발생한 이벤트 입니다.')
        }
    },
    mounted(){
        this.$emit('send-message', this.msg)
    }
}
</script>