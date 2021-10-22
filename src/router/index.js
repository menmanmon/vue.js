import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/Schedule'),
            props: true
        },
        {
            path: '/edit',
            name: 'edit',
            component: () => import('../components/AddPaymentForm'),
            props: true
        },
        {
            path: '/Food?value=:value',
            name: 'food',
            component: () => import('../components/AddPaymentForm'),
            props: true
        },
        {
            path: '/Food', // дубль чтобы можно было переходить на эти роуты напрямую
            name: 'food',
            component: () => import('../components/AddPaymentForm'),
            props: true
        },
        {
            path: '/Transport?value=:value',
            name: 'transport',
            component: () => import('../components/AddPaymentForm'),
            props: true
        },
        {
            path: '/Transport', // дубль чтобы можно было переходить на эти роуты напрямую
            name: 'transport',
            component: () => import('../components/AddPaymentForm'),
            props: true
        },
        {
            path: '/Entertainment?value=:value',
            name: 'entertainment',
            component: () => import('../components/AddPaymentForm'),
            props: true
        },
        {
            path: '/Entertainment', // дубль чтобы можно было переходить на эти роуты напрямую
            name: 'entertainment',
            component: () => import('../components/AddPaymentForm'),
            props: true
        },
    ]
})
