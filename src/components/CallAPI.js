import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        results:[],
        datacollection: {
            labels: [],
            datasets: [{ 
                label: 'west',
                data: [],
                fill: false,
                backgroundColor: 'red',
                borderColor: 'red',
            },
        {
            label: 'national',
            data: [],
            fill: false,
            backgroundColor: 'teal',
                borderColor: 'teal',
        },
    {
        label: 'east',
        data:[],
        fill:false,
        backgroundColor: 'purple',
                borderColor: 'purple',
    },
{
    label: 'central',
    data:[],
    fill:false,
    backgroundColor: 'orange',
    borderColor: 'orange',
},
{
    label: 'south',
    data:[],
    fill:false,
    backgroundColor: 'green',
    borderColor: 'green',
},
{
    label: 'north',
    data:[],
    fill:false,
    backgroundColor: 'pink',
    borderColor: 'pink',
}]
        },
        options: {
            legend: { display: true },
            title: {
              display: true,
              text: 'PSI Twenty Four Hourly (By Region)'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  /*
  methods: {
    fetchItems: function () {
        axios.get(`https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=100&type=json`)
        .then(response => {
            response.data.forEach(data => { 
                this.datacollection.labels.push(data[0])
                this.datacollection.datasets[0].data.push(data[1])
            })
            this.renderChart(this.datacollection, this.options)
        })
    }
  }, */

  methods: {
    fetchItems: function () {
        axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`).then(response =>{ 
            this.results=response.data.items
            console.log(this.results)

            for(let key in this.results) {
               
                this.datacollection.datasets[0].data.push(this.results[key]["readings"]["psi_twenty_four_hourly"]["west"])
                this.datacollection.datasets[1].data.push(this.results[key]["readings"]["psi_twenty_four_hourly"]["national"])
                this.datacollection.datasets[2].data.push(this.results[key]["readings"]["psi_twenty_four_hourly"]["east"])
                this.datacollection.datasets[3].data.push(this.results[key]["readings"]["psi_twenty_four_hourly"]["central"])
                this.datacollection.datasets[4].data.push(this.results[key]["readings"]["psi_twenty_four_hourly"]["south"])
                this.datacollection.datasets[5].data.push(this.results[key]["readings"]["psi_twenty_four_hourly"]["north"])
                this.datacollection.labels.push(this.results[key]["timestamp"])
            }
            this.renderChart(this.datacollection, this.options)
        })
    }
  },

  created () {
    this.fetchItems()
  }
}