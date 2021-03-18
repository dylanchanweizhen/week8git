<template>

  <div>
   <h1>Dylan's Zi Char</h1> 
    <ul>
    <li><router-link to="/" exact>Home </router-link></li>

<li><router-link to="/orders" exact>Orders</router-link></li>
<li><router-link to="/dashboard" exact>Dashboard</router-link></li>
        </ul>
    

<ul id="itemsList">
  <li v-for="item in items" v-bind:key="item.name">
  <h2>{{item.name}}</h2>
<img v-bind:src="item.imageURL"/>
<p id="itemPrice">${{item.price}}</p>

<QuantityCounter v-on:counter="onCounter" v-bind:item="item"></QuantityCounter>

</li>
</ul>

<ul>
 <div id="shoppingBasket">
 <Basket v-bind:items="items"></Basket>
</div>
</ul>
</div>  
 
</template>

<script>
//Week 6 Activity 3 - 1.
import database from '../firebase.js'
//Register Locally
import QuantityCounter from './QuantityCounter.vue'
import Basket from './Basket.vue'


export default {

    data(){
    return{
        items : [], //Week 6 Activity 3 - 2. storing items from database
        }
  },

  components:{
    'QuantityCounter': QuantityCounter,
    'Basket' : Basket, 
  },

  methods :{

        fetchItems:function(){ //Week 6 Activity 3 - 3. fetching the data from database
      database.collection('menu').get().then((querySnapShot)=>{
        let item={}
        querySnapShot.forEach(doc=>{
            item=doc.data()
            // item.show=false
            item.id=doc.id
            this.items.push(item) 
            })})    
        },

          onCounter: function(item, count) {
      for (let i = 0; i < this.items.length; i++) {
        const curr_item = this.items[i];
        if (curr_item.name == item.name){
          this.items[i].count = count;
          break;
        }
      }
    },
         
  },

    //  onCounter: function (item, count) {
    //   if (this.items.length === 0 && count > 0) {
    //     //If there is nothing in items selected, push the ORDER in
    //     this.items.push([item.name, count, item.price]);

    //   } else {
    //     // Loop through everything to check what is not in the basket
    //     for (let i = 0; i < this.items.length; i++) {
    //       const curr_item = this.items[i];
    //       const item_name = curr_item[0];

    //       // if item_name is the same as item.name and the count is more than 0, update this.itemsSelected
    //       if ((item_name === item.name) && count > 0) {
    //         this.items.splice(i, 1);
    //           this.items.splice(i, 0, [item.name, count, item.price]);
    //           break;
    //       }

    //      // Next, item_name is the same as item.name and the count is 0, remove it from itemsSelected.
    //       else if ((item_name === item.name) && count === 0) {
    //         this.items.splice(i, 1);
    //           //this.itemsSelected.pop();
    //           break;
    //       } 
    //       else if ((item_name!=item.name) && i!=this.items.length-1) {
    //       continue;
    //     }
    //     else if (item_name!=item.name) {
    //       this.items.push([item.name,count,item.price]);
    //     }
        
    //   }
    // }
    // },

        
  created(){ //Week 6 Activity 3 - 4. lifecycle hook
      this.fetchItems()    
      },


}

</script>

<style>
#itemsList {
  width: 100%;
  max-width: 70%;
  margin: 0px;
  padding: 0 5px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  max-width:70%;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}
img {
  width: 135px;
  height: 135px;
}

#price {
  font-size: 40px;
}

#itemName {
  font-size: 30px;
}

#shoppingBasket {
  position: absolute;
  top: 23%;
  left: 78%;
}

h1 {
margin-top:0px;
padding: 30px;
text-align: center;
font-size: 50px;
color: black;
font-family: Garamond;
background-color: lightblue;
}



</style>
