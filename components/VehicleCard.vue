<template>
 <div
  class="bg-white rounded-md shadow-md p-4 border border-gray-300/50 cursor-pointer hover:border-blue-800 transition-all duration-300"
 >
  <div class="flex justify-center">
   <NuxtImg
    :src="image"
    class="w-48 h-48 object-contain"
    sizes="100vw sm:50vw md:400px lg:200px"
   />
  </div>
  <div class="mt-4">
   <div class="flex items-end gap-2">
    <h2 class="font-semibold text-lg">{{ name }}</h2>
    <div class="h-1 w-1 bg-black rounded-full mb-[10px]" />
    <span class="text-sm font-normal mb-[2px]">2021</span>
   </div>
   <p class="text-gray-500">{{ price }}</p>
   <div>
    Sold by: <span v-if="seller" class="font-bold">{{ seller }}</span>
   </div>
  </div>
 </div>
</template>
<script setup>
defineProps({
 name: String,
 price: String,
 image: String,
 seller: String,
});
</script>
