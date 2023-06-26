<template>
    <div class="block lg:flex animate__animated animate__fadeIn animate__faster mx-6 mb-6 lg:mb-0 mt-lat-bar h-full lg:h-lat-bar ">
        <LatBar />
        <Charts />
    </div>
</template>

<script setup>
// import InputCsv from '../components/InputCsv.vue';
import Charts from '../components/Charts.vue';
import LatBar from '../components/LatBar.vue';
import { csvToJson } from '../helpers';


const { localFile } = csvToJson();


</script>
