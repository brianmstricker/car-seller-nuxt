<template>
 <main class="mt-4 mb-8">
  <div class="flex flex-col max-w-[885px] mx-auto">
   <h1 class="font-semibold text-xl text-center">
    Shop from our inventory of high-quality, well-kept vehicles or
    <NuxtLink
     to="/sell"
     class="text-base text-black/70 transition-all duration-300 hover:text-blue-800 underline underline-offset-2"
     >sell your car</NuxtLink
    >
   </h1>
   <!-- todo: search functionality -->
   <div class="my-4">
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
  </div>
  <h2 class="text-3xl font-semibold italic">popular vehicles</h2>
  <div
   class="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-4"
  >
   <VehicleCard
    v-for="vehicle in SALE_VEHICLES"
    :key="vehicle.name"
    v-bind="vehicle"
   />
  </div>
  <div class="mt-16">
   <h2 class="text-3xl font-semibold italic">search by vehicle type</h2>
   <div
    class="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-4"
   >
    <VehicleTypeCard
     v-for="type in VEHICLE_TYPES"
     :key="type.name"
     v-bind="type"
    />
   </div>
  </div>
 </main>
</template>
<script setup>
import { VEHICLE_TYPES, SALE_VEHICLES } from "~/constants";
definePageMeta({
 title: "carz - Home",
});
const searchBar = ref("");
</script>
