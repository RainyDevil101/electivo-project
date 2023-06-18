<template>
    <h1 class="text-center font-bold">{{ headerContent }}</h1>
    <hr class="h-1 bg-primary dark:bg-lightGray my-10">
</template>

<script setup>
import { toRefs } from 'vue';
const props = defineProps({
    headerContent: String
})

const { headerContent } = toRefs(props);


</script>