<template>
    <div class="grid gap-6 w-full grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 h-full">
        <!-- <StandarContent /> -->
        <DoughnutChart class="col-span-1 lg:col-span-1"/>
        <BubbleChart class="col-span-1 lg:col-span-1"/>
        <LineChart class="col-span-1 lg:col-span-1"/>
        <BarChart class="col-span-1 lg:col-span-3" :totalSector="totalSector"/>
    </div>
</template>

<script setup>
import { useCsvsStore } from '../../../store';
import BarChart from '../components/BarChart.vue';
import BubbleChart from '../components/BubbleChart.vue';
import DoughnutChart from '../components/DoughnutChart.vue';
import LineChart from '../components/LineChart.vue';

const store = useCsvsStore();
const totalSector = store.empresasRegiones;

</script>