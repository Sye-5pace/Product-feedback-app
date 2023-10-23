<template>
    <section class="w-full  flex children:border">
        <header class="bg-[#373f68] rounded-[0.625rem] h-[4.5rem] w-full flex items-center  pl-6 pr-4 justify-between ">
          <div class="flex items-center gap-[2.375rem] border">
            <div class="flex items-center gap-4">
              <img src="../assets/bulb-2.png" class=""/>
              <span class="font-bold text-[1.125rem] text-[#fff]">6 Suggestions</span>
            </div>
            <div class="flex items-center cursor-pointer">
              <h5 class="text-[#F2F4FE] text-[0.875rem] font-normal">Sort by :</h5>
            </div>
          </div>
          <router-link  to="/createfeedback" class=" rounded-[0.625rem] h-[2.75rem] py-3 px-6 bg-[#AD1FEA] text-[#f2f4fe] flex cursor-pointer" >+ Add Feedback</router-link>
        </header>
    </section>
    
</template>

<script setup>
  import { RouterLink } from 'vue-router'
  // import SideToolbar from '../components/SideToolbar.vue'
  // import FeedbackBoard from '../components/FeedbackBoard.vue'
</script>