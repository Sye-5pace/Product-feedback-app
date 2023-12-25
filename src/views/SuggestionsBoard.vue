<template>
  <div class="flex gap-[1.875rem] w-full">
    <SideToolbar :selectedCategory="selectedCategory" :selectCategory="selectCategory"  :planned="planned" :live="live" :progress="progress"/>
    <SuggestionAll :selectedSuggestions="selectedSuggestions" :voteOptions="voteOptions" :optionsUpdater="optionsUpdater"/>
  </div>
</template>
  
  <script setup lang="ts">
    import { reactive, computed,ref,onMounted } from 'vue' 
    import SideToolbar from '../components/SideToolbar.vue'
    import SuggestionAll from '../components/SuggestionAll.vue'
    import type ProductReqList from '../Interface' 
    import { useFeedbackStore } from '../store'
    
    const store = useFeedbackStore()
    const selectedCategory = ref('all') ;
    const voteOptions = ref('Most Upvotes')
    store.initializeData()
    
    const selectCategory = (category: string) => {
      selectedCategory.value = category
    }
  
    const optionsUpdater = (option: string) => {
      voteOptions.value = option
    }
   
    
    
</script>
  