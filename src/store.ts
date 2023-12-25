import { defineStore } from 'pinia'
import type { ProductReqList } from './Interface' 
import data from '@/assets/data.json'

export const useFeedbackStore =  defineStore('feedback' ,{
    state:():{ productData: ProductReqList[] }=>({
        productData: []
    }),
    getters: {
        suggestions: (state) => {
            return state.productData?.filter((data) => data.status === 'suggestions')
        },
        live: (state)=> {
            return state.productData?.filter((data) => data.status === 'live')
        },
        planned: (state)=> {
            return state.productData?.filter((data) => data.status === 'planned')
        },
        progress: (state)=> {
            return state.productData?.filter((data) => data.status === 'in-progress')
        },
    },
    actions: {
        initializeData(){
            const storedData = localStorage.getItem('productData');
            this.productData = storedData ? JSON.parse(storedData) : data.productRequests;
            if(!storedData){
                localStorage.setItem('productData', JSON.stringify(data.productRequests))
            }
        },
        addFeedback(feedback: ProductReqList){
            this.productData.push(feedback)
            localStorage.setItem('productData',JSON.stringify(this.productData))
        }  
    }
})

