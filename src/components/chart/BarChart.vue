<template>
  <div>
    <canvas ref="myChart" width="400" height="200"></canvas>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  mounted() {
    var ctx = this.$refs.myChart;
    var myChart = new this.$_Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: this.propsdata,
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            onClick: function() {
              console.log('chart clicked!');
              // this.$emit('refresh:chart');
            }
        }
    });
  }
}
</script>

<style>

</style>