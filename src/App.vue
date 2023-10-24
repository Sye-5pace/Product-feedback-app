<template>
  <main class="flex items-center w-full min-h-screen p-0 m-0 border-box bg-[#F7F8FD] font-jost">
    <div class="mt-[3.875rem] w-[69.375rem]  mx-[10.3125rem] flex gap-[1.875rem]">
      <SideToolbar/>
      <router-view></router-view>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import SideToolbar from './components/SideToolbar.vue'
</script>
