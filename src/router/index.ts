import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import  RoadmapBoard from '../views/RoadmapBoard.vue'
import  SuggestionAll from '../views/SuggestionAll.vue'


const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'home', component:SuggestionAll},
    { path: '/roadmap', name: 'roadmap', component: RoadmapBoard}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})    

export default router