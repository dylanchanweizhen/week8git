<template>
  <div id="divMargin">
  <p>Menu: </p>
<ul v-for="item in items" v-bind:key="item.name">
 <p style="font-size:20px" v-if="item.count!=0">{{ item.name }} x {{ item.count }}</p>

</ul>

<button id="button" v-on:click="subTotalVal=true, grandTotalVal=true" >Calculate Total</button>
<p v-show="subTotalVal"> Subtotal: ${{findTotal}} </p>
<p v-show="grandTotalVal"> Grandtotal: ${{ (findTotal * 1.07).toFixed(2) }} </p>

<p><button id="button" v-on:click="sendOrder">Add Order</button></p>

  </div>
</template>

<script>
import database from '../firebase.js'

export default {
  data() {
      return {
        subTotalVal:false,
        grandTotalVal:false,
      }
    },
    
    props:{
        items: {
            type: Array
        }
    },

    methods: {
          // to be stored in ONE document PER order
          sendOrder: function () { // Activity 4 - 2. send order into database
      let arr = {}; // {} is an object that stores key:value pairs
      for (let i = 0; i < this.items.length; i++) {
        var name = this.items[i].name;
        var quantity = this.items[i].count;
        arr[name] = quantity;
      }
      database.collection("orders").add(arr).then(() => {location.reload()});
    },

     },


    computed: {
      findTotal() {
        var subTotal = 0;
        for (let i = 0; i < this.items.length; i++) {
          subTotal += (this.items[i].count * this.items[i].price);
        }
        return subTotal;
      },
    },



    /*methods: {
      findTotal() {
        var subTotal = 0;
        for (let i = 0; i < this.itemsSelected.length; i++) {
          this.subTotal += (this.itemsSelected[i][1] * this.itemsSelected[i][2]);
        }
        return this.subTotal;
      }
    },*/

// * PREVIOUS ATTEMPT * // 
     // sendOrder: function () {
    //   var arr= [];
    //   for(let i = 0; i < this.items.length; i++){
    //     let item = {};
    //     item.name = this.items[i].name;
    //     item.quantity = this.items[i].count;
    //     arr.push(item);
    //   }
    //   database.collection("orders").add({
    //     orders: arr
    //   }).then(() => {location.reload()});
    // },


    //       sendOrder: function() {
    //   for (let i = 0; i < this.items.length; i++) {
    //     if (this.items[i].count!=0) {
    //       database.collection("orders").add({
    //       name: this.items[i]
    //       }).then(() => {location.reload()});
    //       this.submitOrder=true;
    //     }
    //   }
    //   if (this.submitOrder==true) {
    //     alert("Order successfully added");
    //   } else {
    //     alert("Order not successfully added");
    //   }
      
    // },



    // sendOrder: function() {
    //   for (let i = 0; i < this.items.length; i++) {
    //     if (this.items[i].count!=0) {
    //       database.collection("orders").add({
    //       name: this.items[i].name,
    //       price: this.items[i].price,
    //       count: this.items[i].count
    //       }).then(() => {location.reload()});
    //       this.submitOrder=true;
    //     }
    //   }
    //   if (this.submitOrder==true) {
    //     alert("Order successfully added");
    //   } else {
    //     alert("Order not successfully added");
    //   }
      
    // },
  
}


</script>

<style scoped>

li {
  text-align: left;
  border: 0px solid #222;
  list-style-type: disc;
  font-size:20px;

}

#button{
    height:40px;
    width:150px;
    font-size:20px;
    background-color:pink;
    border-radius:10px;
}

p{
  font-size:20px;
}

#divMargin{
  margin-top:50px;
}
</style>


