<template>
    <main class="">
        Feedback new page of id #{{ suggestionsId  }}
    </main>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { useRoute } from 'vue-router'


    const route = useRoute()
    const suggestionsId = ref<null | string | string[] >(route.params.id)
    console.log(suggestionsId.value)



</script>

<!-- https://join.slack.com/share/enQtNjM1NDE3ODU4NTU0Mi0yZmYzYjJlNGNiNTI5YTdiMjVkNzExMzRjNzUxYzhlNjAwODFhY2QwODM5M2M1ZTgzOGRmNDkxMzA5ZjE3ZmYz -->