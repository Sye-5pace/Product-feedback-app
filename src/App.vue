<template>
  <main class="flex items-center w-full min-h-screen p-0 m-0 border-box bg-[#F7F8FD] font-jost">
    <div class="my-[3.875rem] w-[69.375rem]  mx-[10.3125rem] flex gap-[1.875rem] ">
      <SideToolbar :selectedCategory="selectedCategory" :selectCategory="selectCategory" :productData="productData" :planned="planned" :live="live" :progress="progress"/>
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
  const planned = ref<ProductReqList>([])
  const live = ref<ProductReqList>([])
  const progress = ref<ProductReqList>([])
  const voteOptions = ref('Most Upvotes')
  planned.value= productData.filter( data => data.status === 'planned')
  live.value= productData.filter( data => data.status === 'live')
  progress.value = productData.filter( data => data.status === 'in-progress')
  
  
  const selectedSuggestions = computed(() => {
    if (selectedCategory.value === 'all') {
      return suggestions.slice().sort((a, b) => {
        if (voteOptions.value === 'Most Upvotes') {
          return b.upvotes - a.upvotes;
        } else if (voteOptions.value === 'Least Upvotes') {
          return a.upvotes - b.upvotes;
        } else if (voteOptions.value === 'Most Comments') {
          return (b.comments?.length || 0) - (a.comments?.length || 0);
        } else if (voteOptions.value === 'Least Comments') {
          return (a.comments?.length || 0) - (b.comments?.length || 0);
        } else {
          return 0; 
        }
      });
    } else {
      return suggestions
        .filter((item) => item.category === selectedCategory.value)
        .slice()
        .sort((a, b) => {
          if (voteOptions.value === 'Most Upvotes') {
            return b.upvotes - a.upvotes;
          } else if (voteOptions.value === 'Least Upvotes') {
            return a.upvotes - b.upvotes;
          } else if (voteOptions.value === 'Most Comments') {
            return (b.comments?.length || 0) - (a.comments?.length || 0);
          } else if (voteOptions.value === 'Least Comments') {
            return (a.comments?.length || 0) - (b.comments?.length || 0);
          } else {
            return 0; // Default case
          }
        });
    }
  });
 
  const selectCategory = (category: string) => {
    selectedCategory.value = category
  }

  const optionsUpdater = (option: string) => {
    voteOptions.value = option
  }
</script>
