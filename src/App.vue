
<template>
    <Navbar />
    <div class="bg-lightGray text-primary dark:bg-primary dark:text-lightGray">
        <RouterView></RouterView>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import Navbar from './components/Navbar.vue';

onMounted(() => {
    initFlowbite();
});

</script>

