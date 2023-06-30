<template>
    <div class="h-96 lg:h-full dark:bg-lightGray bg-secondary rounded">
        <canvas id="barChartMujeresRubro"></canvas>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';
import { toRefs } from 'vue';



const props = defineProps({
    mujeresRubro: Object
})
const { mujeresRubro } = toRefs(props);

const totalSectorData = mujeresRubro.value;


const total = totalSectorData.map(y => y.trabajadoresFemeninos);
const sector = totalSectorData.map(x => x.subRubro);

const config = {
    type: 'bar',
    data: {
        labels: sector,
        datasets: [{
            label: 'Total de mujeres en Transporte y Almacenamiento',
            data: total,
            borderWidth: 1
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
    new Chart(document.getElementById('barChartMujeresRubro'), config);
});


</script>

<style scoped></style>