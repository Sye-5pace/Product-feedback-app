<template>
    <section class="flex justify-center items-center w-full">
        <div class="flex flex-col gap-y-[0.85rem]">
            <div v-show="feedbackTrack" class="-translate-x-36 transition -right-[8rem] rounded-[0.3125rem] font-medium p-2 bg-green-400 fixed text-white feedback-container shadow-lg" >Feedback created successfully</div>
            <header class="flex gap-2 items-center" v-once>
                <img src="../assets/icon-arrow-left.svg" alt="back-nav" class="w-2 "/>
                <router-link class="text-[#647196] font-bold text-[0.875rem]" to="/">Go Back</router-link>
            </header>
            <main class=" w-[33.75rem] ">
                <img src="../assets/create-icon.svg" alt="" class="relative -bottom-[1.6rem] left-[3.5rem] "/>
                <div class="px-[2.625rem] py-[2.8125rem] bg-[#fff] w-full rounded-[0.625rem] h-full flex flex-col gap-y-[2.5rem]">
                    <h2 class="text-[#3a4374] text-[1.5rem] font-bold">Create New Feedback</h2>
                    <div class="flex flex-col gap-y-6">
                        <div class="flex flex-col gap-y-4">
                            <h4 class="text-[#3a4374] text-[0.875rem] font-bold">Feedback Title</h4>
                            <p class="text-[#647196] text-[0.875rem] ">Add a short, descriptive headline</p>
                            <input type="text" class="px-6 rounded-[0.3125rem] bg-[#f7f8fd] h-[3rem] focus:outline-none px-2 hover:border hover:border-[#4661e6]  w-full" :class="isValid ? 'border border-[#D73737]' : ''" v-model="feedback.title">
                        </div>    
                        <div class="flex flex-col gap-y-4" id="choose-category">
                            <div>
                                <h4 class="text-[#3a4374] text-[0.875rem] font-bold">Category</h4>
                                <p class="text-[#647196] text-[0.875rem] ">Choose a category for your feedback</p>
                            </div>
                            <div class="flex flex-col gap-y-4">
                                <div class="w-[28.5rem] h-[3rem] bg-[#f7f8fd] flex items-center hover:border hover:border-[#4661e6] rounded-[0.3125rem] px-6 cursor-pointer justify-between" @click=" isCateVisible = !isCateVisible">
                                    <span class="text-[#3a4374] text-[0.9375rem]">  {{ category }} </span>
                                    <img :src="navUp" alt="arrow-up"  v-if="isCateVisible"/>
                                    <img :src="navDown" alt="arrow-down"  v-else />
                                </div>
                                <div class="bg-[#fff] absolute top-[34.7rem] w-[28.5rem]  shadow-[0_10px_40px_-7px_rgba(55,63,104,0.35)] h-[15rem] children:h-[2.9375rem] rounded-[0.625rem] " v-if="isCateVisible">
                                    <div class="flex px-6 items-center justify-between border-b  cursor-pointer" @click="cateOptions('Feature')">
                                        <h3 class="text-[1rem] text-[#647196]">Feature</h3>
                                        <img :src="tick" alt="tick" :class=" category === 'Feature' ? 'block': 'hidden' "/>
                                    </div>
                                    <div class="flex px-6 items-center justify-between border-b cursor-pointer" @click="cateOptions('UI')">
                                        <h3 class="text-[1rem] text-[#647196]">UI</h3>
                                        <img :src="tick" alt="tick" :class=" category === 'UI' ? 'block': 'hidden' "/>
                                    </div>
                                    <div class="flex px-6 items-center justify-between border-b cursor-pointer" @click="cateOptions('UX')">
                                        <h3 class="text-[1rem] text-[#647196]">UX</h3>
                                        <img :src="tick" alt="tick" :class=" category === 'UX' ? 'block': 'hidden' "/>
                                    </div>
                                    <div class="flex px-6 items-center justify-between cursor-pointer border-b " @click="cateOptions('Enhancement')">
                                        <h3 class="text-[1rem] text-[#647196]">Enhancement</h3>
                                        <img :src="tick" alt="tick" :class=" category === 'Enhancement' ? 'block': 'hidden' "/>
                                    </div>
                                    <div class="flex px-6 items-center justify-between cursor-pointer" @click="cateOptions('Bug')">
                                        <h3 class="text-[1rem] text-[#647196]">Bug</h3>
                                        <img :src="tick" alt="tick" :class=" category === 'Bug' ? 'block': 'hidden' "/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-y-4" id="choose-category">
                            <div>
                                <h4 class="text-[#3a4374] text-[0.875rem] font-bold">Status</h4>
                                <p class="text-[#647196] text-[0.875rem] ">Choose a state for your feedback</p>
                            </div>
                            <div class="flex flex-col gap-y-4">
                                <div class="w-[28.5rem] h-[3rem] bg-[#f7f8fd] flex items-center hover:border hover:border-[#4661e6] rounded-[0.3125rem] px-6 cursor-pointer justify-between" @click=" isStateVisible = !isStateVisible">
                                    <span class="text-[#3a4374] text-[0.9375rem]">  {{ status }} </span>
                                    <img :src="navUp" alt="arrow-up"  v-if="isStateVisible"/>
                                    <img :src="navDown" alt="arrow-down"  v-else />
                                </div>
                                <div class="bg-[#fff] absolute top-[40rem] w-[28.5rem]  shadow-[0_10px_40px_-7px_rgba(55,63,104,0.35)] children:h-[2.9375rem] rounded-[0.625rem] " v-if="isStateVisible">
                                    <div class="flex px-6 items-center justify-between border-b cursor-pointer" @click="stateOptions('Suggestions')">
                                        <h3 class="text-[1rem] text-[#647196]">Suggestions</h3>
                                        <img :src="tick" alt="tick" :class=" status === 'Suggestions' ? 'block': 'hidden' "/>
                                    </div>
                                    <div class="flex px-6 items-center justify-between border-b  cursor-pointer" @click="stateOptions('planned')">
                                        <h3 class="text-[1rem] text-[#647196]">Planned</h3>
                                        <img :src="tick" alt="tick" :class=" status === 'Planned' ? 'block': 'hidden' "/>
                                    </div>
                                    <div class="flex px-6 items-center justify-between cursor-pointer border-b " @click="stateOptions('in-progress')">
                                        <h3 class="text-[1rem] text-[#647196]">In-progress</h3>
                                        <img :src="tick" alt="tick" :class=" status === 'In-progress' ? 'block': 'hidden' "/>
                                    </div>
                                    <div class="flex px-6 items-center justify-between cursor-pointer" @click="stateOptions('live')">
                                        <h3 class="text-[1rem] text-[#647196] ">Live</h3>
                                        <img :src="tick" alt="tick" :class=" status === 'Live' ? 'block': 'hidden' "/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-y-4">
                            <div>
                                <h4 class="text-[#3a4374] text-[0.875rem] font-bold">Feedback Detail</h4>
                                <p class="text-[#647196] text-[0.875rem] ">Include any specific comments on what should be improved, added, etc.</p>
                            </div>
                            <textarea v-model="feedback.description" :class="isValid ? 'border border-[#D73737]' : ''"   class="h-[6rem] px-6 rounded-[0.3125rem] bg-[#f7f8fd] focus:outline-none px-2 py-2" rows="4" ></textarea>
                            <p class="text-[#D73737]" v-if="isValid">Can't be empty</p>
                        </div>
                    </div>
                    <div class="flex gap-4 justify-end" v-once>
                        <button class="h-[2.75rem] px-6 bg-[#3a4374] rounded-[0.625rem] flex items-center justify-center text-[#f2f4fe] font-bold" @click="cancelFeedback">cancel</button>
                        <button class="h-[2.75rem] px-6 bg-[#AD1FEA] rounded-[0.625rem] flex items-center justify-center text-[#f2f4fe] font-bold" @click="createFeedback">Add Feedback</button>
                    </div>
                </div>
            </main>
        </div>
    </section>
</template>


<script setup lang="ts">
    import { RouterLink } from 'vue-router'
    import { ref,computed,onMounted } from 'vue';
    import navDown from '../assets/icon-arrow-down.svg'
    import navUp from '../assets/icon-arrow-up.svg'
    import tick from '../assets/option-tick.svg'
    import { useFeedbackStore } from '../store'


    const store = useFeedbackStore()

    const category = ref<string>('Feature')
    const status = ref<string>('planned')
    const isValid = ref<boolean>(false)
    const feedbackTrack = ref<boolean>(false)
    const isCateVisible = ref<boolean>(false)
    const isStateVisible = ref<boolean>(false)
    const id = ref( store.productData.length + 1)
    const cateOptions = (option: string) =>{ 
        category.value = option
    }
    const stateOptions = (option: string) =>{ 
        status.value = option
    }

    onMounted(() => {
        store.initializeData()
    })

    //making feedbackform reactive
    const categoryInFeedback = computed(() => category.value);
    const statusInFeedback = computed(() => status.value);

    const feedback = ref({
        title: '',
        category: categoryInFeedback,
        upvotes: 0,
        status: statusInFeedback,
        description: '',
        comments:[],

    })

    console.log('feedbacks:', JSON.stringify(store.productData));
    
    const createFeedback = () => {
        if(feedback.value.description){
            store.addFeedback({
                id: id.value,
                title: feedback.value.title,
                category: feedback.value.category,
                upvotes: feedback.value.upvotes,
                status: feedback.value.status,
                description: feedback.value.description,
                comments: feedback.value.comments,
            })
            isValid.value = false;
            feedbackTrack.value = true
            console.log('feedback added:', JSON.stringify(store.productData));
            feedback.value = {
            title: '',
            upvotes: 0,
            category: category.value,
            status: status.value,
            description: '',
            comments:[],
        }
        }else{
            isValid.value = true;
        }
    }        
    

    const cancelFeedback = () => {
        feedback.value = {
            title: '',
            upvotes: 0,
            category: category.value,
            status: status.value,
            description: '',
            comments:[],
        }
    }
</script>