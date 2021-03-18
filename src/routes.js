//Step 2 -- Define Routes

//Activity 5 - 1. creating new routes
import PageContent from './components/PageContent.vue'
import Orders from './components/Orders.vue'
import Modify from './components/Modify.vue' // Week 6 - Activity 7 - step 2

import Dashboard from './components/Dashboard.vue' // Week 7 - Activity 1 - step 2

export default[
    { path: '/', component: PageContent},
    { path: '/orders', component: Orders},
    { path: '/modify', name:"Modify", component: Modify, props:true}, // Activity 7 - step 2

    {path: '/dashboard', component: Dashboard}, // Week 7 - Activity 1 - step 2
]