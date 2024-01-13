<template>
  <div class="desktop:flex desktop:flex-row desktop:gap-[1.5rem] w-full tablet:flex-col tablet:flex  tablet:gap-y-8 ">
    <SideToolbar :selectedCategory="selectedCategory" :selectCategory="selectCategory"  />
    <SuggestionAll :selectedSuggestions="selectedSuggestions" :voteOptions="voteOptions" :optionsUpdater="optionsUpdater"/>
  </div>
</template>
  
  <script setup lang="ts">
    import { computed,ref,onMounted } from 'vue' 
    import SideToolbar from '../components/SideToolbar.vue'
    import SuggestionAll from '../components/SuggestionAll.vue'
    import type ProductReqList from '../Interface' 
    import { useFeedbackStore } from '../store'
    
    const store = useFeedbackStore()
    const selectedCategory = ref('all') ;
    const voteOptions = ref('Most Upvotes')

    onMounted(() => {
      store.initializeData()
    })

    const suggestions = computed(() => store.suggestions) 
    console.log(suggestions.value)

    const selectedSuggestions = computed(() => {
      if (selectedCategory.value === 'all') {
      return suggestions.value.slice().sort((a, b) => {
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
      return suggestions.value
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
  })
    
    const selectCategory = (category: string) => {
      selectedCategory.value = category
    }
  
    const optionsUpdater = (option: string) => {
      voteOptions.value = option
    }
   
    
    
</script>
  