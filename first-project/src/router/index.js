import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


export default new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '/add/payment/Food?value=200',
            name: 'addFood200',
            component: () => import('../components/AddPaymentForm')
        },
        {
            path: '/add/payment/Transport?value=50',
            name: 'addTransport50',
            component: () => import('../components/AddPaymentForm')
        },
        {
            path: '/add/payment/Entertainment?value=2000',
            name: 'addEntertainment2000',
            component: () => import('../components/AddPaymentForm')
        },
    ]
})
