<template>
    <div class="h-96 lg:h-full dark:bg-lightGray bg-secondary rounded">
        <canvas id="barChart"></canvas>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';
import { toRefs } from 'vue';



const props = defineProps({
    totalSector: Object
})
const { totalSector } = toRefs(props);

const totalSectorData = totalSector.value;


const total = totalSectorData.map(y => y.total);
const sector = totalSectorData.map(x => x.sector);

const config = {
    type: 'bar',
    data: {
        labels: sector,
        datasets: [{
            label: 'Cantidad de empresas de logística por Región',
            data: total,
            borderWidth: 1,
            backgroundColor: 'rgb(255, 99, 132)',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        maintainAspectRatio: false
    }
};


onMounted(() => {
    new Chart(document.getElementById('barChart'), config);
});


</script>

<style scoped></style>