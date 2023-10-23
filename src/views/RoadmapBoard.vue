<template>
  <section class="w-full">
    <header class="flex pl-[2rem] pr-[2.5rem] items-center justify-between w-full bg-[#373f68] h-[7.0625rem] rounded-[0.625rem]">   
        <div class="flex flex-col gap-1">       
            <div class="flex gap-2 items-center">
                <img src="../assets/path-2.png" alt="back-nav" class="w-2"/>
                <router-link class="text-[#fff] cursor-pointer hover:underline font-bold text-[0.875rem]" to="/">Go Back</router-link>
            </div>
            <h2 class="text-[1.5rem] font-bold tracking-[-0.021rem] text-white">Roadmap</h2>
        </div>
        <router-link  to="/createfeedback" class=" rounded-[0.625rem] h-[2.75rem] py-3 px-6 bg-[#AD1FEA] text-[#f2f4fe] flex cursor-pointer" >+ Add Feedback</router-link>
    </header>
  </section>
</template>

<script setup lang="ts"> 
    import { RouterLink } from 'vue-router'
</script>