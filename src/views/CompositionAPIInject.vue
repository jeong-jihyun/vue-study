<template>
    <h1>{{ title }}</h1>
</template>
<script>
import { defineComponent, inject } from 'vue';

export default defineComponent({
    setup() {
        const title = inject('title', 'Default Title');
        return {
            title
        };
    }
});
</script>