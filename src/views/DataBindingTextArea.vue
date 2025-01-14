<template>
    <div>
        <textarea v-model="message"></textarea>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                message: '여러줄을 입력할수 있는 textarea입니다.'
            };
        }
    };
</script>