<template>
 <div
  class="bg-white rounded-md hover:shadow-[0px_4px_14px_0px_rgba(0,0,0,0.35)] p-4 border border-gray-300/50 cursor-pointer transition-all duration-300"
 >
  <NuxtImg :src="image" class="object-contain mx-auto w-48 h-20" />
  <h3 class="text-center text-xl font-bold">{{ name }}</h3>
 </div>
</template>
<script setup>
defineProps({
 name: String,
 image: String,
});
</script>
