<template>
    <div class="h-96 lg:h-full bg-secondary rounded w-full">
        <canvas id="lineChart"></canvas>
    </div>
</template>

<script setup>
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
];

const labels = MONTHS;
const data = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};

const config = {
    type: 'line',
    data,
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
    new Chart(document.getElementById('lineChart'), config);
});


</script>

<style scoped></style>