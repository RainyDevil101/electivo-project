<template>
    <div class="grid gap-6 w-full grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 h-full">
        <!-- <StandarContent /> -->
        <BarChart class="col-span-1 lg:col-span-1"/>
        <DoughnutChart class="col-span-1 lg:col-span-1"/>
        <BubbleChart class="col-span-1 lg:col-span-1"/>
        <LineChart class="col-span-1 lg:col-span-3"/>
    </div>
</template>

<script setup>
import BarChart from '../chartsComponents/BarChart.vue';
import BubbleChart from '../chartsComponents/BubbleChart.vue';
import DoughnutChart from '../chartsComponents/DoughnutChart.vue';
import LineChart from '../chartsComponents/LineChart.vue';
import StandarContent from '../components/StandarContent.vue';

</script>