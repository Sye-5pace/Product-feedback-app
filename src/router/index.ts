import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import  RoadmapBoard from '../views/RoadmapBoard.vue'
import  SuggestionAll from '../views/SuggestionAll.vue'
import CreateFeedback from '../views/CreateFeedback.vue'


const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'home', component:SuggestionAll},
    { path: '/roadmap', name: 'roadmap', component: RoadmapBoard},
    { path: '/createfeedback', name: 'createfeedback', component: CreateFeedback},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})    

export default router