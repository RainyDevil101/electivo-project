<template>
    <div class="h-96 lg:h-full bg-secondary rounded">
        <canvas id="barChart"></canvas>
    </div>
</template>

<script setup>
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';


const config = {
    type: 'bar',
    data: {
        labels: ['Alexis', 'Herrera', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
    new Chart(document.getElementById('barChart'), config);
});


</script>

<style scoped></style>