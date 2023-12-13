<template>
 <main class="mt-4 sm:mt-10">
  <h1 class="font-semibold text-xl text-center">
   Shop from our inventory of high-quality, well-kept vehicles or
   <NuxtLink
    to="/sell"
    class="text-base text-black/70 transition-all duration-300 hover:text-blue-800 underline underline-offset-2"
    >sell your car</NuxtLink
   >
  </h1>
  <div
   class="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4"
  >
   <VehicleCard
    v-for="vehicle in vehicles"
    :key="vehicle.name"
    v-bind="vehicle"
   />
  </div>
 </main>
</template>
<script setup>
definePageMeta({
 title: "carz - Home",
});
const vehicles = [
 {
  name: "Tesla Model 3",
  price: "$50,000",
  image:
   "https://www.tesla.com/ownersmanual/images/GUID-B5641257-9E85-404B-9667-4DA5FDF6D2E7-online-en-US.png",
  seller: "carz",
 },
 {
  name: "Tesla Model S",
  price: "$70,000",
  image:
   "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRU_WJSPz0xLbrGtKmSczTjBrJ7L5FSTnU5Pq798SBSckWl0yYp",
  seller: "carz",
 },
 {
  name: "Tesla Model X",
  price: "$90,000",
  image:
   "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2?&bkba_opt=1&view=FRONT34&size=1400&model=mx&options=$MDLX,$MTX13,$PPSW,$WX00,$APBS,$CC01,$SC04,$CPF0,$IBE00,$ST0Y,$TW01&crop=1400,850,300,130&",
  seller: "carz",
 },
 {
  name: "Tesla Model Y",
  price: "$60,000",
  image:
   "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT64OUD32-pkypFhCdnYUvovWfEJhERDsTWNFZQJx662IgS_gnB",
  seller: "carz",
 },
 {
  name: "Ford F150",
  price: "$50,000",
  image:
   "https://storage.googleapis.com/wackk-images-production-4f204ab/RPww7U9HhfesoGznKw9swmr3",
  seller: "carz",
 },
 {
  name: "Honda Civic",
  price: "$20,000",
  image:
   "https://www.cars.com/i/large/in/v2/stock_photos/483059fa-b09f-4e03-b206-323bb0a0e877/b6f03d08-1f37-4b8b-bc8a-5d47b5c7925c.png",
  seller: "carz",
 },
 {
  name: "Toyota Camry",
  price: "$30,000",
  image:
   "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSN4LMSqtCk7jrB7EihDuT3sqAGQGarByrjag0YKtW6YQzQbBlc",
  seller: "carz",
 },
 {
  name: "Chevrolet Silverado",
  price: "$40,000",
  image:
   "https://images.dealer.com/autodata/us/color/2023/USD30CHT279B0/GA0.jpg",
  seller: "carz",
 },
];
</script>
