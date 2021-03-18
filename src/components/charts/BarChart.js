import {Bar} from 'vue-chartjs' // Week 8 - Activity 1 - Step 3

import database from '../../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            results:[],
            //labels: ["Pork Fried Rice", "Mapo Tofu", "Sambal KangKung", "Cereal Prawn", "Dry Beef Hor Fun", "Prawn omlette"],
            labels: [],
            datasets: [
                {
                label: "Orders", // is like the legend, which we dont need
                backgroundColor: ['blue','purple','teal','orange','green','pink'],
                data: []
              }
            ]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total Number of each dish'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales : {
              yAxes: [{
                  ticks : {
                      beginAtZero : true 
                  }
              }]
          }
        }
    }
  },


  methods: {
    fetchItems: function () {
      database.collection('orders').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
          
          for (var dish in doc.data()) {
            if(!this.datacollection.labels.includes(dish)) {
              this.datacollection.labels.push(dish)
              this.datacollection.datasets[0].data.push(parseInt(doc.data()[dish])) 
              //this.datacollection.datasets[0].backgroundColor.push('blue')  
            } else {
              var index = this.datacollection.labels.indexOf(dish)
              this.datacollection.datasets[0].data[index] += (parseInt(doc.data()[dish]))
            }
          }
      
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  }, 

 

  created () {
    this.fetchItems()
  }
}