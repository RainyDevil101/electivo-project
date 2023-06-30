<template>
    <div class="grid gap-6 w-full grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 h-h-bar p-6 animate__animated animate__fadeIn animate__faster">
        <BarChart class="col-span-1 lg:col-span-2 lg:row-span-2" :totalSector="totalSector"/>
        <BarChartMujeresRubro class="col-span-1 lg:col-span-2 lg:row-span-2" :mujeresRubro="mujeresRubro"/>
    </div>
</template>

<script setup>
import { useCsvsStore } from '../../../store';
import BarChart from '../components/BarChart.vue';
import BarChartMujeresRubro from '../components/BarChartMujeresRubro.vue';

const { empresasRegiones: totalSector, mujeresRubro } = useCsvsStore();


</script>