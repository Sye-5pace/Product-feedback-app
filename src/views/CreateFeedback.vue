<template>
    <section class="flex flex-col">
        <div class="flex gap-2 items-center">
            <img src="../assets/icon-arrow-left.svg" alt="back-nav" class="w-2 "/>
            <router-link class="text-[#647196] font-bold text-[0.875rem]" to="/">Go Back</router-link>
        </div>
        
    </section>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
</script>