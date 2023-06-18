<template>
    <section>
        <p class="text-justify text-base md:text-lg">{{ bodyContent }}</p>
        
    </section>
</template>

<script setup>
import { toRefs } from 'vue';
const props = defineProps({
    bodyContent: String
})

const { bodyContent } = toRefs(props);


</script>