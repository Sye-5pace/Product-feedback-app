<template>
    <main class="">
        Feedback new page of id #{{ feedbackDetail  }}
    </main>
</template>

<script setup lang="ts">
    import { onMounted,computed } from 'vue'
    import { useRoute } from 'vue-router'
    import { useFeedbackStore } from '../store'


    const route = useRoute()
    const store = useFeedbackStore()

    onMounted(() => {
        store.initializeData()
    })

    const suggestions = computed(() => store.suggestions )
    
    const feedbackDetail = computed(() => { 
      return suggestions.value.filter((item) => String(item.id) === String(route.params.id))
    })
</script>