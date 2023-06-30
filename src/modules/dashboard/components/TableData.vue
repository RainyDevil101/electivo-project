<template>
    <tr>
        <td v-for="item in data" :key="item" class="border p-2 break-words">{{ item }}</td>
    </tr>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
    data: Object
})
const { data } = toRefs(props);

</script>

<style lang="scss" scoped>

</style>