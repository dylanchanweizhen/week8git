<template>
<div>
 <h1>Dylan's Zi Char</h1> 

    <div>
    <header>
    <ul>
    <li><router-link to="/" exact>Home </router-link></li>
<li><router-link to="/orders" exact>Orders</router-link></li>
<li><router-link to="/dashboard" exact>Dashboard</router-link></li>
    </ul>
    </header>
    
  <div class="chart">
  <h1>Bar Chart</h1> 
    <BarChart></BarChart>
  </div>

  <div class="chart">
  <h1>Line Chart</h1> 
    <CallAPI></CallAPI>
  </div>

  </div>
  </div>
</template>

<script>
//Register Locally
import BarChart from './charts/BarChart.vue'
import CallAPI from './CallAPI.vue'

export default {

    data(){
    return{
        
        }
  },

  components:{
    'BarChart': BarChart,
    'CallAPI': CallAPI,
    
  },

}
</script>

<style>

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  max-width:100%;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;  
}
</style>