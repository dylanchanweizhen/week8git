<template>
  <div id="app">
  <!-- Activity 5 - 2. -->
  <router-view></router-view>
  </div>
</template>

<script>


export default {
 data(){
    return{
      title:'BT3103 Week 6',
    }
  },
   methods:{
     greeting:function(){
       return 'Week 6 of BT3103';
     }
   },

    
}
</script>

<style>

</style>
