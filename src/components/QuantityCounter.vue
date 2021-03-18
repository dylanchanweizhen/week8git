<template>
  <div id="message">
  <button id="button" v-on:click="increment">+</button>
  {{counter}}
  <button id="button" v-on:click="decrement">-</button>
  
  </div>
</template>

<script>
export default {
 
    props: {
       item :{
           type: Object
       }
    },


    data(){
        return{
            counter : 0,
            
        }
    },

    methods:{

        increment(){
            if (this.counter === 10) {
                alert("You cannot buy more than 10 items.")
            } else {
            this.counter++;
            }
            
            this.$emit('counter', this.item, this.counter)
        },

        decrement(){
            if (this.counter === 0) {
                this.counter = 0;
            } else {
            this.counter--;
            }
            this.$emit('counter', this.item, this.counter)
        }
    }

}
</script>

<style>
#message{
    font-size:25px;
}

#button{
    height:50px;
    width:50px;
    font-size:25px;
    background-color:pink;
    border-radius:10px;
}
</style>
