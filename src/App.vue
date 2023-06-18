
<template>
    <Navbar />
    <div class="bg-lightGray text-primary dark:bg-primary dark:text-lightGray width">
        <RouterView></RouterView>
    </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';

const test = 'test';


</script>

