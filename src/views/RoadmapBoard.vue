<template>
  <section class="w-full flex flex-col gap-y-[3rem]">
    <header class="flex pl-[2rem] pr-[2.5rem] items-center justify-between w-full bg-[#373f68] h-[7.0625rem] rounded-[0.625rem]">   
        <div class="flex flex-col gap-1">       
            <div class="flex gap-2 items-center">
                <img src="../assets/path-2.png" alt="back-nav" class="w-2"/>
                <router-link class="text-[#fff] cursor-pointer hover:underline font-bold text-[0.875rem] hover:underline" to="/">Go Back</router-link>
            </div>
            <h2 class="text-[1.5rem] font-bold tracking-[-0.021rem] text-white">Roadmap</h2>
        </div>
        <router-link  to="/createfeedback" class=" rounded-[0.625rem] h-[2.75rem] py-3 px-6 bg-[#AD1FEA] text-[#f2f4fe] flex cursor-pointer" >+ Add Feedback</router-link>
    </header>
    <main class="h-full grid grid-cols-3 gap-x-[1.575rem]">
      <section class="flex flex-col gap-y-8">
        <div class="flex flex-col gap-y-1">
          <h3 class="font-bold text-[1.125rem] text-[#3a4375]">Planned ({{ planned?.length }})</h3>
          <p class="text-[#647196] text-[1rem]">Ideas prioritized for research</p>
        </div>
        <div class="flex flex-col gap-y-6">
          <div class="h-[17rem] bg-[#fff] rounded-[0.3125rem] border-t-[0.375rem] border-[#F49F85] flex flex-col gap-y-[0.75rem] items-start justify-center px-8" v-for="(item,index) in planned" :key="index" >
            <div class="flex gap-4 items-center">
              <span class="w-2 h-2 rounded-full bg-[#F49F85]"></span> <p class="text-[#647196] text-[1rem]">Planned</p>
            </div>
            <div class="">
              <h3 class="font-bold text-[1.125rem] text-[#3a4375] hover:text-[#4661e6] cursor-pointer">{{ item?.title }}</h3>
              <p class="text-[#647196] text-[1rem]">{{ item?.description }}</p>
            </div>
            <div class="w-[6.9375rem] h-[1.875rem] rounded-[0.625rem] bg-[#f2f4ff] text-[#4661e6] font-semibold text-[0.8125rem] flex justify-center items-center px-4 py-[0.6875rem]">{{ item?.category }}</div>
            <div class="flex w-full justify-between items-center">
              <div class="bg-[#f2f4fe] h-[2.5rem] w-[4.3125rem] rounded-[0.625rem] flex items-center justify-center gap-2 hover:bg-[#CFD7FF] cursor-pointer">
                <img src="../assets/icon-arrow-up.svg" alt="up-nav" class="w-2"/>
                <h3 class="font-black text-[0.8125rem] text-[#3a4374]">{{ item.upvotes }}</h3>
              </div>
              <div class="flex gap-1 items-center">
                <img src="../assets/icon-comments.svg" alt="" class="w-[1.25rem] h-[1rem]"/>
                <h4 class="font-bold text-[#3a4374] text-[1rem] ">{{ item.comments?.length || 0 }}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="flex flex-col gap-y-8">
        <div class="flex flex-col gap-y-1">
          <h3 class="font-bold text-[1.125rem] text-[#3a4375]">In-Progress ({{ progress?.length }})</h3>
          <p class="text-[#647196] text-[1rem]">Currently being developed</p>
        </div>
        <div class="flex flex-col gap-y-6">
          <div class="h-[17rem] bg-[#fff] rounded-[0.3125rem] border-t-[0.375rem] border-[#AD1FEA] flex flex-col gap-y-[0.75rem] items-start justify-center px-8" v-for="(item,index) in progress" :key="index" >
            <div class="flex gap-4 items-center">
              <span class="w-2 h-2 rounded-full bg-[#AD1FEA]"></span> <p class="text-[#647196] text-[1rem]">In Progress</p>
            </div>
            <div class="">
              <h3 class="font-bold text-[1.125rem] text-[#3a4375] hover:text-[#4661e6] cursor-pointer">{{ item?.title }}</h3>
              <p class="text-[#647196] text-[1rem]">{{ item?.description }}</p>
            </div>
            <div class="w-[6.9375rem] h-[1.875rem] rounded-[0.625rem] bg-[#f2f4ff] text-[#4661e6] font-semibold text-[0.8125rem] flex justify-center items-center px-4 py-[0.6875rem]">{{ item?.category }}</div>
            <div class="flex w-full justify-between items-center">
              <div class="bg-[#f2f4fe] h-[2.5rem] w-[4.3125rem] rounded-[0.625rem] flex items-center justify-center gap-2 hover:bg-[#CFD7FF] cursor-pointer">
                <img src="../assets/icon-arrow-up.svg" alt="up-nav" class="w-2"/>
                <h3 class="font-black text-[0.8125rem] text-[#3a4374]">{{ item.upvotes }}</h3>
              </div>
              <div class="flex gap-1 items-center">
                <img src="../assets/icon-comments.svg" alt="" class="w-[1.25rem] h-[1rem]"/>
                <h4 class="font-bold text-[#3a4374] text-[1rem] ">{{ item.comments?.length || 0 }}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="flex flex-col gap-y-8">
        <div class="flex flex-col gap-y-1">
          <h3 class="font-bold text-[1.125rem] text-[#3a4375]">Live ({{ live?.length  }})</h3>
          <p class="text-[#647196] text-[1rem]">Released features</p>
        </div>
        <div class="flex flex-col gap-y-6">
          <div class="h-[17rem] bg-[#fff] rounded-[0.3125rem] border-t-[0.375rem] border-[#62bcfa] flex flex-col gap-y-[0.75rem] items-start justify-center px-8" v-for="(item,index) in live" :key="index" >
            <div class="flex gap-4 items-center">
              <span class="w-2 h-2 rounded-full bg-[#62bcfa]"></span> <p class="text-[#647196] text-[1rem]">Live</p>
            </div>
            <div class="">
              <h3 class="font-bold text-[1.125rem] text-[#3a4375] hover:text-[#4661e6] cursor-pointer">{{ item?.title }}</h3>
              <p class="text-[#647196] text-[1rem]">{{ item?.description }}</p>
            </div>
            <div class="w-[6.9375rem] h-[1.875rem] rounded-[0.625rem] bg-[#f2f4ff] text-[#4661e6] font-semibold text-[0.8125rem] flex justify-center items-center px-4 py-[0.6875rem]">{{ item?.category }}</div>
            <div class="flex w-full justify-between items-center">
              <div class="bg-[#f2f4fe] h-[2.5rem] w-[4.3125rem] rounded-[0.625rem] flex items-center justify-center gap-2 hover:bg-[#CFD7FF] cursor-pointer">
                <img src="../assets/icon-arrow-up.svg" alt="up-nav" class="w-2"/>
                <h3 class="font-black text-[0.8125rem] text-[#3a4374]">{{ item.upvotes }}</h3>
              </div>
              <div class="flex gap-1 items-center">
                <img src="../assets/icon-comments.svg" alt="" class="w-[1.25rem] h-[1rem]"/>
                <h4 class="font-bold text-[#3a4374] text-[1rem] ">{{ item.comments?.length || 0 }}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>  
  </section>
</template>

<script setup lang="ts"> 
  import { RouterLink } from 'vue-router'
  import { onMounted,computed } from 'vue';
  import { useFeedbackStore } from '../store'

  const store = useFeedbackStore()

  onMounted(() => {
    store.initializeData()
  })

  const live = computed(() => store.live)
  const planned = computed(() => store.planned)
  const progress = computed(() => store.progress)
  
</script>