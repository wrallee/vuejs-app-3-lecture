<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart v-on:refresh:chart="refreshChart" v-bind:propsdata="chartDataSet"></bar-chart>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from '../../components/chart/BarChart.vue';
import LineChart from '../../components/chart/LineChart.vue';

export default {
  components: {
    BarChart,
    LineChart,
  },
  methods: {
    refreshChart() {
      this.chartDataSet = [10, 20];
    }
  },
  data() {
    return {
      chartDataSet: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }],
    }
  }
}
</script>

<style>

</style>