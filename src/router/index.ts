import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import  RoadmapBoard from '../views/RoadmapBoard.vue'
import  FeedbackDetail from '../views/FeedbackDetail.vue'
import  SuggestionsBoard from '../views/SuggestionsBoard.vue'
// import  SuggestionAll from '../components/SuggestionAll.vue'
import CreateFeedback from '../views/CreateFeedback.vue'


const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'home', component: SuggestionsBoard},
    { path: '/roadmap', name: 'roadmap', component: RoadmapBoard},
    { path: '/createfeedback', name: 'createfeedback', component: CreateFeedback},
    { path: '/feedbackdetail/:id', name: 'feedback-detail', component: FeedbackDetail, props:true }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})    

export default router