<template>
  <main class="flex items-center w-full min-h-screen p-0 m-0 border-box bg-[#F7F8FD] font-jost">
    <div class="mt-[3.875rem] w-[69.375rem]  mx-[10.3125rem] flex gap-[1.875rem]">
      <SideToolbar :selectedCategory="selectedCategory" :selectCategory="selectCategory" :productData="productData"/>
      <router-view :selectedSuggestions="selectedSuggestions" :voteOptions="voteOptions" :optionsUpdater="optionsUpdater"></router-view>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { reactive, computed,ref } from 'vue' 
  import SideToolbar from './components/SideToolbar.vue'
  import type ProductsInfo from './Interface'
  import type ProductReqList from './Interface' 
  import data from './assets/data'
  

  const productData: ProductsInfo = reactive(data.productRequests)
  const suggestions: ProductReqList[] = productData.filter( data => data.status === 'suggestion')
  const selectedCategory = ref('all') ;
  const voteOptions = ref('Most Upvotes')
  
  const selectedSuggestions = computed(() => {
      if (selectedCategory.value === 'all'){
        return suggestions;
      }else {
        return suggestions.filter( item => {
          return item.category === selectedCategory.value                
        })
      }
  })

  const selectCategory = (category: string) => {
    selectedCategory.value = category
  }

  const optionsUpdater = (option: string) => {
    voteOptions.value = option
  }
</script>
