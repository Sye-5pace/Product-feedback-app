<template>
  <section class="w-full  flex  flex-col gap-y-6 mb-[7.0625rem]">
      <header class="bg-[#373f68] rounded-[0.625rem] h-[4.5rem] w-full flex items-center  pl-6 pr-4 justify-between ">
        <div class="flex items-center gap-[2.375rem] ">
          <div class="flex items-center gap-4">
            <img src="../assets/bulb-2.png" class=""/>
            <span class="font-bold text-[1.125rem] text-[#fff]">{{ suggestions.length }} Suggestions</span>
          </div>
          <div class="flex items-center cursor-pointer">
            <h5 class="text-[#F2F4FE] text-[0.875rem] font-normal">Sort by :</h5>
          </div>
        </div>
        <router-link  to="/createfeedback" class=" rounded-[0.625rem] h-[2.75rem] py-3 px-6 bg-[#AD1FEA] text-[#f2f4fe] flex cursor-pointer" >+ Add Feedback</router-link>
      </header>
      <main class="flex flex-col gap-y-[1.25rem]">
        <div  class="flex justify-between items-center w-full h-[9.4375rem] bg-[#fff] rounded-[0.625rem] px-8 py-[1.75rem]" v-for="(item,index) in suggestions" :key="index">
          <div class="flex gap-[2.5rem]">
            <div class="w-[2.5rem] h-[3.3125rem] flex flex-col justify-center hover:bg-[#CFD7FF] items-center gap-y-2  rounded-[0.625rem] bg-[#f2f4fe] ">
              <img src="../assets/icon-arrow-up.svg" alt="up-nav" class="w-2"/>
              <h3 class="font-black text-[0.8125rem] text-[#3a4374]">{{ item.upvotes }}</h3>
            </div>
            <div class="flex flex-col gap-y-[1.0625rem]">
              <div class="flex flex-col gap-y-1">
                <h2 class="text-[#3a4374] text-[1.25rem] font-bold">{{ item.title }}</h2>
                <h3 class="text-[#647196] font-normal text-[1rem] ">{{ item.description }}</h3>
              </div>
              <span class="w-[6.9375rem] h-[1.875rem] rounded-[0.625rem] bg-[#f2f4ff] text-[#4661e6] font-semibold text-[0.8125rem] flex justify-center items-center px-4 py-[0.6875rem]">{{ item.category }}</span>
            </div>
          </div>
          <div class="flex gap-1 items-center">
            <img src="../assets/icon-comments.svg" alt="" class="w-[1.25rem] h-[1rem]"/>
            <h4 class="font-bold text-[#3a4374] text-[1rem] ">{{ item.comments && item.comments.length ? item.comments.length : '0'  }}</h4>
          </div>
        </div>
      </main>
  </section>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { reactive } from 'vue'
  import data from '../assets/data.json'
  import type ProductsInfo from '../Interface'
  import type ProductReqList from '../Interface'

  const productData: ProductsInfo = reactive(data.productRequests)
  const suggestions: ProductReqList[] = productData.filter( data => data.status === 'suggestion')
  

</script>