<template>
    <li class="list-none">
        <router-link :to="{ name: page }"
            class="uppercase block p-4 hover:bg-redPantone hover:text-lightGray cursor-default lg:p-6 lg:flex lg:h-full lg:items-center lg:justify-center text-center transition-all">{{
                name }}</router-link>
    </li>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
    link: Object
})
const { link } = toRefs(props);

const { name, page } = link.value;

</script>