<template>
  <div class="flex gap-[1.875rem] ">
    <SideToolbar :selectedCategory="selectedCategory" :selectCategory="selectCategory" :productData="productData" :planned="planned" :live="live" :progress="progress"/>
    <SuggestionAll :selectedSuggestions="selectedSuggestions" :voteOptions="voteOptions" :optionsUpdater="optionsUpdater"/>
  </div>
</template>
  
  <script setup lang="ts">
    import { reactive, computed,ref } from 'vue' 
    import SideToolbar from '../components/SideToolbar.vue'
    import  SuggestionAll from '../components/SuggestionAll.vue'
    import type ProductsInfo from '../Interface'
    import type ProductReqList from '..App.vue/Interface' 
    import data from '../assets/data'
    
  
    const productData: ProductsInfo = reactive(data.productRequests)
    const suggestions: ProductReqList[] = productData.filter( data => data.status === 'suggestion')
    const selectedCategory = ref('all') ;
    const voteOptions = ref('Most Upvotes')
    
    
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
  