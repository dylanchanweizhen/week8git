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
    </div>

<ul> <!-- Activity 5 - step 9 -->
   <li v-for="doc in orders" v-bind:key="doc.id">
          <div v-for="(quantity, name) in doc.data()" v-bind:key="name">
            <p>{{ name }}: {{ quantity }}</p>
          </div>
          <!-- Activity 6 --> 
           <button v-bind:id="doc.id" v-on:click="deleteItem(doc)">Delete</button>
        <button v-bind:id="doc.id" v-on:click="route(doc)">Modify</button> <!-- Activity 7 - step 5 -->
      </li>
</ul> 

<!--
<ul>
   <li v-for="doc in orders" v-bind:key="doc.id">
          <div v-for="items in doc.orders" v-bind:key="items.id">
            <p>{{ items.name }}: {{ items.quantity }}</p>
          </div>
        <button v-bind:id="doc.id" v-on:click="deleteItem(doc)">Delete</button>
        <button v-bind:id="doc.id" v-on:click="route(doc)">Modify</button>
      </li>
</ul>
-->
</div>
</template> 

<!-- <template>
  <div>
    <ul>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/orders" exact>Orders</router-link></li>
      <li v-for="doc in orders" v-bind:key="doc.id">
          <div v-for="items in doc.orders" v-bind:key="items.id">
            <p>{{ items.name }}: {{ items.quantity }}</p>
          </div>
        <button v-bind:id="doc.id" v-on:click="deleteItem(doc)">delete</button>
      </li>
    </ul>
  </div>
</template> -->




<script>
import database from '../firebase.js'

export default {

    data(){
    return{
        orders : [], //Activity 5 - step 6. creating data property called orders array []
        }
  },

methods :{

        fetchItems:function(){ //Activity 5 - step 7. fetching orders from database
      database.collection('orders').get().then((querySnapShot)=>{
        // let item={};
        querySnapShot.forEach(doc=>{
            // item=doc.data()
            // item.id=doc.id
            this.orders.push(doc); 
            })})    
        },

  deleteItem: function (del_item) {
      database.collection("orders")
        .doc(del_item.id).delete().then(() => {location.reload()});
    },

    //     deleteItem: function (del_item) {
    //   database.collection("orders")
    //     .doc(del_item.id).delete().then(() => {
    //       var filteredOrderList = this.items.filter((itemf) => itemf.id != del_item.id);
    //       this.orders = filteredOrderList;
    //       location.reload();
    //     });
    // },

    route: function(event) { // Activity 7 - step 5
        this.$router.push({name: 'Modify', params:{id: event.id}}) // PUSH THE DATA (DOCUMENT.ID) INTO MODIFY.VUE
    }
},

 created(){
      this.fetchItems();   
      },

}
</script>


<style scoped>
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

button {
  width: 65px;
  height: 30px;
  font-size:15px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}
</style>