<template>
    <div class="block animate__animated animate__fadeIn animate__faster mb-6 lg:mb-0 mt-lat-bar h-full lg:h-lat-bar ">
        <LatBar />
        <RouterView/>
    </div>
</template>

<script setup>

// import Charts from '../views/Charts.vue';
import LatBar from '../components/LatBar.vue';

</script>
