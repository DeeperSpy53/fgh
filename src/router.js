import {createRouter, createWebHashHistory } from 'vue-router'
import groupsComp from "./components/fgh-groups.vue"
import homeComp from "./components/fgh-home.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: homeComp, alias: '/'
        },
        {
            path: '/groups',
            component: groupsComp
        }
    ]
})