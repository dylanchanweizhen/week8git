<template>

  <div>
   <h1>Dylan's Zi Char</h1> 
  
<!-- Activity 7 - step 7 - DISPLAY THE ORDER DETAILS -->
<div v-for="(quantity, name) in datapacket" v-bind:key="name">
<p> {{name}}: {{quantity}} </p>
<input type="number" placeholder="0" min="0" v-bind:id="name">
</div>
<br>
<button v-on:click="updateOrder()">Update Order</button>


</div>
 
</template>

<script>
import database from '../firebase.js'

export default {

data(){
    return{
        id: "", // so we can get the doc.id or 'order.id' that is passed from orders.vue to here
        datapacket : {},
        }
  },

    methods :{

       fetchItems:function(){
      database.collection('orders').get().then((querySnapShot)=>{
        // let item={};
        querySnapShot.forEach(doc=>{
            if (doc.id === this.id) {
            this.datapacket = doc.data(); 
            }
            });
        });
      },

      //   fetchItems:function(){
      // database.collection('orders').get().then((querySnapShot)=>{
      //   let item={};
      //   querySnapShot.forEach(doc=>{
      //       if (doc.id === this.id) {
      //       item=doc.data()
      //       item.id=doc.id
            
      //       this.datapacket.push(item) }
      //       })})    
      //   },

      updateOrder: function () {
      let copyDatapacket= Object.assign({}, this.datapacket);
      for(const name in copyDatapacket){
        var newQuantity = document.getElementById(name).value;

        if (newQuantity == ""){
          newQuantity = this.datapacket[name];
        }

        copyDatapacket[name] = newQuantity;
      }
      database.collection('orders').doc(this.id).set(copyDatapacket).then(() => {location.reload()});
      this.$router.push({ path: '/orders' });
    }
  },

    created(){
      this.fetchItems();
      this.id = this.$route.params.id; // FETCH THE DATA (DOCUMENT.ID) THAT U PUSH FROM ORDERS.VUE 
      },

}
</script>

<style scope>

button {
  width: 170px;
  height: 50px;
  font-size:20px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}

</style>

