<template>
    <li class="link-item">
        <p class="link-name">{{ name }}</p>
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

<style scoped>
.link-item {
    list-style-type: none;
    padding: 16px;
    display: block;
    height: 100%;
    cursor: default;
}

.link-name {
    padding: 0;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
}

.link-item:hover {
    background-color: var(--red-pantone);
    color: var(--antiflash-white);
}

@media (min-width: 768px) {
    .link-item {
        padding: 0 16px;
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
}
</style>