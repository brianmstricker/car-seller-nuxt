<template>
 <div class="mt-16">
  <h2 class="text-3xl font-semibold italic">why buy from us?</h2>
  <div
   class="flex flex-col min-[500px]:flex-row justify-between mt-4 sm:w-[90%] lg:w-3/4 mx-auto gap-y-2"
  >
   <div>
    <NuxtImg
     src="images/trusted.png"
     class="rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover ring ring-black/10 mx-auto"
     sizes="150px md:200px"
     width="200px"
     height="200px"
    />
    <div class="flex items-center justify-center mt-2 relative">
     <UIcon class="relative -left-2" name="i-heroicons-check-20-solid" />
     <span class="md:text-lg"
      >Trusted<br class="hidden min-[500px]:block" />
      Sellers</span
     >
    </div>
   </div>
   <div>
    <NuxtImg
     src="images/quality.jpg"
     class="rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover ring ring-black/10 mx-auto"
     sizes="150px md:200px"
     width="200px"
     height="200px"
    />
    <div class="flex items-center justify-center mt-2 relative">
     <UIcon class="relative -left-2" name="i-heroicons-hand-thumb-up" />
     <span class="md:text-lg"
      >Quality<br class="hidden min-[500px]:block" />
      Vehicles</span
     >
    </div>
   </div>
   <div>
    <NuxtImg
     src="images/warranty.png"
     class="rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover ring ring-black/10 mx-auto"
     sizes="150px md:200px"
     width="200px"
     height="200px"
    />
    <div class="flex items-center justify-center mt-2 relative">
     <UIcon class="relative -left-2" name="i-heroicons-document-text" />
     <span class="md:text-lg"
      >Warranty<br class="hidden min-[500px]:block" />
      Coverage</span
     >
    </div>
   </div>
  </div>
  <div class="my-8 flex w-full items-center">
   <div
    class="h-[1px] bg-gradient-to-r flex-1 from-gray-400/80 via-gray-300 to-white via-80%"
   />
   <span class="px-4">or</span>
   <div
    class="h-[1px] bg-gradient-to-l flex-1 from-gray-400/80 via-gray-300 to-white via-80%"
   />
  </div>
  <div>
   <h2 class="text-3xl font-semibold italic">sell your vehicle with ease</h2>
  </div>
 </div>
</template>
<script setup></script>
