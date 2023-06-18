<template>
    <canvas id="bubbleChart"></canvas>
</template>

<script setup>
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';


const config = {
    type: 'bubble',
    data: {
        datasets: [{
            label: 'First Dataset',
            data: [{
                x: 20,
                y: 30,
                r: 15
            }, {
                x: 40,
                y: 10,
                r: 10
            }],
            backgroundColor: 'rgb(255, 99, 132)'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};


onMounted(() => {
    new Chart(document.getElementById('bubbleChart'), config);
});


</script>

<style scoped></style>