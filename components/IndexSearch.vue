<template>
 <!-- todo: search functionality -->
 <div class="my-2">
  <UInput
   v-model="searchBar"
   name="searchBar"
   placeholder="Search for vehicle..."
   color="gray"
   variant="outline"
   icon="i-heroicons-magnifying-glass-20-solid"
   :ui="{ icon: { trailing: { pointer: '' } } }"
  >
   <template #trailing>
    <UButton
     v-show="searchBar !== ''"
     color="gray"
     variant="link"
     icon="i-heroicons-x-mark-20-solid"
     :padded="false"
     @click="searchBar = ''"
    />
   </template>
  </UInput>
 </div>
</template>
<script setup>
const searchBar = ref("");
</script>
