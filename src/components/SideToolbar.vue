<template>
    <section  class="w-[15.9375rem] flex flex-col gap-y-6">
        <div class=" h-[8.5625rem] ">
            <img src="../assets/oval.svg" alt="oval">
            
        </div>
        <div class="flex flex-col gap-y-[1.0625rem]  h-[10.375rem] rounded-[0.625rem] bg-[#fff] px-6  pt-6">
            <div class="flex gap-2 children:h-[1.875rem] children:px-4 children:py-[0.34375rem]">
                <span class="hover:bg-[#cfd7ff] bg-[#F2F4FF] rounded-[0.625rem]  text-[#4661e6] text-[0.8125rem] font-semibold cursor-pointer" @click="selectCategory('all')" :class=" selectedCategory === 'all' ? '!bg-[#4661E6] text-white' : ''">ALL</span>
                <span class=" bg-[#F2F4FF] rounded-[0.625rem]  text-[#4661e6] text-[0.8125rem] font-semibold cursor-pointer hover:bg-[#cfd7ff]" @click="selectCategory('ui')" :class=" selectedCategory === 'ui' ? '!bg-[#4661e6] text-white' : '' ">UI</span>
                <span class="hover:bg-[#cfd7ff]  bg-[#F2F4FF] text-[#4661e6] rounded-[0.625rem]  text-[0.8125rem] font-semibold cursor-pointer" @click="selectCategory('ux')" :class=" selectedCategory === 'ux' ? '!bg-[#4661e6] text-white' : '' ">UX</span> 
            </div>
            <div class="flex gap-[0.875rem] children:h-[1.875rem] children:px-4 children:py-[0.34375rem]">
                <span class="hover:bg-[#cfd7ff] bg-[#F2F4FF] text-[#4661e6] rounded-[0.625rem]  text-[0.8125rem] font-semibold cursor-pointer"  @click="selectCategory('Enhancement')" :class=" selectedCategory === 'Enhancement' ? '!bg-[#4661e6] text-white' : '' ">Enhancement</span>
                <span class="hover:bg-[#cfd7ff] bg-[#F2F4FF] text-[#4661e6] rounded-[0.625rem]  text-[0.8125rem] font-semibold cursor-pointer" @click="selectCategory('Bug')" :class=" selectedCategory === 'Bug' ? '!bg-[#4661e6] text-white' : ''">Bug</span>
            </div>
            <span class="hover:bg-[#cfd7ff] bg-[#F2F4FF] h-[1.875rem] px-4 py-[0.34375rem] text-[#4661e6] rounded-[0.625rem]  text-[0.8125rem] w-[4.8125rem] font-semibold cursor-pointer" @click="selectCategory('Feature')" :class=" selectedCategory === 'Feature' ? '!bg-[#4661e6] text-white' : '' ">Feature</span>
        </div>
        <div class="rounded-[0.625rem] bg-white h-[11.125rem] px-6 pt-[1.1875rem] flex flex-col gap-y-6">
            <div class="flex gap-[6.1875rem]">
                <h2 class="font-bold text-[1.125rem] tracking-[-0.015625rem] text-[#3a4374]" >Roadmap</h2> 
                <router-link class="underline text-[#4661e6] hover:text-[#8397f8] font-semibold text-[0.8125rem] cursor-pointer"  to='/roadmap'>View</router-link>
            </div>
            <div> 
                <div class= "flex flex-col gap-2 children:text-[#647196] children:font-normal"> 
                    <div class="flex justify-between items-center">
                        <div class="flex gap-4 items-center">                  
                            <span class="w-2 h-2 rounded-full bg-[#F49F85]"></span> <p>Planned</p>
                        </div>
                        <span class="font-bold self-end">{{ planned?.length }}</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="flex gap-4 items-center">
                            <span class="w-2 h-2 rounded-full bg-[#AD1FEA]"></span> <p>In-progress</p> 
                        </div>
                        <span class="font-bold self-end">{{ progress?.length }}</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="flex gap-4 items-center">
                            <span class="w-2 h-2 rounded-full bg-[#62bcfa]"></span> <p>Live</p> 
                        </div>
                        <span class="font-bold self-end">{{ live?.length }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import { defineProps,computed, onMounted } from 'vue'
    import type { PropType } from 'vue';
    import ProductsInfo from '../Interface'
    import type ProductReqList from '../Interface'
    import { useFeedbackStore } from '../store'


    const store = useFeedbackStore()
    
    onMounted(() => {
        store.initializeData()    
    })

    const live = computed(() => store.live)
    const planned = computed(() => store.planned)
    const progress = computed(() => store.progress)

    
    // eslint-disable-next-line
    const { selectCategory,selectedCategory } = defineProps({
        selectCategory: Function,
        selectedCategory: String,
    })
   
    
</script>