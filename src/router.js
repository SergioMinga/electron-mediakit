import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Mingadigital.vue'
import MapM from './views/Map.vue' 
import Programmatic from './views/Programmatic.vue' 
import Commodities from './views/Commodities.vue'
import Adshouse from './views/Adshouse.vue'
import Beneficios from './views/Beneficios.vue'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Mingadigital',
            component: Home
        }, 
        {
            path: '/map',
            name: 'MAP',
            component: MapM
        },
        {
            path: '/programmatic',
            name: 'Programmatic',
            component: Programmatic,
            props: true
        },
        {
            path: '/commodities',
            name: 'Commodities',
            component: Commodities,
            props: true
        },
        {
            path: '/adshouse',
            name: 'Adshouse',
            component: Adshouse,
            props: true
        },  
        {
            path: '/beneficios',
            name: 'Beneficios',
            component: Beneficios,
            props: true
        }  
    ]
})
