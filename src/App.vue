<template>
  <main class="flex items-center w-full min-h-screen p-0 m-0 border-box bg-[#F7F8FD] font-jost">
    <div class="my-[2.5rem] w-[69.375rem]  mx-[10.3125rem] flex gap-[1.875rem] ">
      <router-view :planned="planned" :live="live" :progress="progress"></router-view>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { ref,onMounted } from 'vue' 
  import type ProductReqList from './Interface' 
  import { useFeedbackStore } from './store'
  
  
  const store = useFeedbackStore()
  const planned = ref<ProductReqList>([])
  const live = ref<ProductReqList>([])
  const progress = ref<ProductReqList>([])
  

 
</script>
