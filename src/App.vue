<template>
  <main class="flex items-center w-full min-h-screen p-0 m-0 border-box bg-[#F7F8FD] font-jost">
    <div class="w-[69.375rem]  mx-[10.3125rem] flex children:border gap-8">
      <SideToolbar/>
      
      <router-view></router-view>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router'

  // import SuggestionAll from './views/SuggestionAll.vue'
  import SideToolbar from './components/SideToolbar.vue'
  // import RoadmapBoard from './views/RoadmapBoard.vue'
</script>
