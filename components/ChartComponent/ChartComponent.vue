<template>
    <apexchart type="line" :options="chartOptions" :series="chartData" />
</template>

<script setup>
import ApexCharts from 'vue3-apexcharts';

const chartOptions = {
    chart: { id: 'basic-line' },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }
};

const chartData = [{ name: 'sales', data: [30, 40, 35, 50, 49, 60] }];
</script>