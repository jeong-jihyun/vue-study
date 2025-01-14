<template>
    <div class="container" v-bind:class="[activeClass, errorClass]">ClassBinding</div>
</template>
<script>
    export default {
        data() {
            return {
                activeClass: 'active',
                errorClass: 'text-danger'
            };
        }
    };
</script>