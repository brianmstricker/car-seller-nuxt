<template>
 <div
  class="bg-white rounded-md shadow-md p-4 border border-gray-300/50 cursor-pointer hover:border-blue-800 transition-all duration-300"
  @click="isModalOpen = true"
 >
  <div class="flex justify-center">
   <NuxtImg
    :src="image"
    class="w-48 h-48 object-contain"
    sizes="100vw sm:50vw md:400px lg:200px"
   />
  </div>
  <div class="mt-4">
   <div class="">
    <h2 class="font-semibold text-lg inline">{{ name }}</h2>
    <div
     class="h-[2px] w-[2px] bg-black rounded-full mb-[4px] mx-1 inline-block"
    />
    <span class="text-sm font-normal mb-[2px] inline">2021</span>
   </div>
   <p class="text-gray-500">{{ price }}</p>
   <div>
    Sold by: <span v-if="seller" class="font-bold">{{ seller }}</span>
   </div>
  </div>
 </div>
 <UModal
  v-model="isModalOpen"
  :ui="{
   container: 'flex min-h-full items-center justify-center text-center',
   width: 'w-full sm:max-w-none sm:w-[80%] lg:w-[70%] xl:w-[55%]',
   overlay: {
    background: 'bg-black/60 backdrop-blur-[2px]',
   },
  }"
 >
  <UCard>
   <div class="flex justify-between items-center -mt-3 mb-1">
    <UButton
     color="gray"
     variant="ghost"
     icon="i-heroicons-x-mark-20-solid"
     size="xl"
     @click="isModalOpen = false"
    />
    <UButton
     color="gray"
     variant="ghost"
     icon="i-heroicons-arrow-right-16-solid"
     size="sm"
     trailing
    >
     view full listing
    </UButton>
   </div>
   <div class="w-[300px] md:w-[400px] lg:w-[500px] mx-auto">
    <h2 class="text-center text-2xl font-bold">{{ name }}</h2>
    <div class="flex justify-center">
     <NuxtImg
      :src="image"
      class="w-[300px] h-[200px] md:w-[400px] md:h-[300px] lg:w-[500px] object-contain"
      sizes="300px md:300px lg:500px"
     />
    </div>
    <div class="mt-4 md:text-lg px-4">
     <div><span class="font-medium">Cost:</span> {{ price }}</div>
     <div><span class="font-medium">Sold by:</span>{{ seller }}</div>
     <!-- <div><span class="font-medium">Current mileage:</span>{{ seller }}</div>
     <div><span class="font-medium">MPG:</span>{{ seller }}</div>
     <div><span class="font-medium">Vehicle features:</span>{{ seller }}</div>
     <div><span class="font-medium">Details:</span>{{ seller }}</div> -->
    </div>
   </div>
  </UCard>
 </UModal>
</template>
<script setup>
const isModalOpen = ref(false);
defineProps({
 name: String,
 price: String,
 image: String,
 seller: String,
});
</script>
