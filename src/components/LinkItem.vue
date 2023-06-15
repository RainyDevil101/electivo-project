<template>
    <li class="list-none p-4 block h-full hover:bg-redPantone hover:text-lightGray cursor-default md:p-4 md:flex md:h-full md:items-center md:justify-center">
        <a class="p-0 m-0 text-center uppercase text-sm md:text-base">{{ name }}</a>
    </li>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
    link: Object
})
const { link } = toRefs(props);

const { name, to } = link.value;



</script>