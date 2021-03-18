<!-- Week 8 - Activity 1 - Step 3 -->
<template>
  <div id="main">
        <div id="chart">
            <bar-chart></bar-chart>
        </div>
    </div>
</template>

<script>
import barchart from './BarChart.js'

export default {
  components: {
    'bar-chart': barchart
  }
};
</script>

<style scoped>
/*#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:240px;
  width:240px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding:30px;
  float:left;
}*/
</style>