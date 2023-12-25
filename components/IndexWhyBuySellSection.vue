<template>
 <div class="mt-16">
  <h2 class="text-3xl font-semibold italic">why buy from us?</h2>
  <div
   class="flex flex-col min-[500px]:flex-row justify-between mt-6 sm:w-[90%] lg:w-3/4 mx-auto gap-y-2"
  >
   <div>
    <NuxtImg
     src="images/trusted.png"
     class="rounded-full w-[150px] h-[150px] md:w-[175px] md:h-[175px] object-cover ring ring-black/20 mx-auto"
     sizes="150px md:175px"
     width="175px"
     height="175px"
    />
    <div class="flex items-center justify-center mt-2 relative">
     <UIcon class="relative -left-2" name="i-heroicons-check-20-solid" />
     <span class="md:text-lg"
      >Trusted<br class="hidden min-[500px]:block lg:hidden" />
      Sellers</span
     >
    </div>
   </div>
   <div>
    <NuxtImg
     src="images/quality.jpg"
     class="rounded-full w-[150px] h-[150px] md:w-[175px] md:h-[175px] object-cover ring ring-black/20 mx-auto"
     sizes="150px md:175px"
     width="175px"
     height="175px"
    />
    <div class="flex items-center justify-center mt-2 relative">
     <UIcon class="relative -left-2" name="i-heroicons-hand-thumb-up" />
     <span class="md:text-lg"
      >Quality<br class="hidden min-[500px]:block lg:hidden" />
      Vehicles</span
     >
    </div>
   </div>
   <div>
    <NuxtImg
     src="images/warranty.png"
     class="rounded-full w-[150px] h-[150px] md:w-[175px] md:h-[175px] object-cover ring ring-black/20 mx-auto"
     sizes="150px md:175px"
     width="175px"
     height="175px"
    />
    <div class="flex items-center justify-center mt-2 relative">
     <UIcon class="relative -left-2" name="i-heroicons-document-text" />
     <span class="md:text-lg"
      >Warranty<br class="hidden min-[500px]:block lg:hidden" />
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
   <div
    class="mt-6 flex flex-col sm:flex-row gap-x-6 sm:w-[95%] lg:w-3/4 mx-auto gap-y-2"
   >
    <div class="flex items-center">
     <NuxtImg
      src="images/list.webp"
      class="rounded-full w-[150px] h-[150px] md:w-[175px] md:h-[175px] object-cover"
      sizes="150px md:175px"
      width="175px"
      height="175px"
     />
     <p class="text-sm lg:text-base lg:max-w-[50%]">
      List your car at any price you want, and wait to receive offers!
     </p>
    </div>
    <div class="flex items-center justify-end">
     <NuxtImg
      src="images/contactus.png"
      class="rounded-full w-[150px] h-[150px] md:w-[175px] md:h-[175px] object-cover"
      sizes="150px md:175px"
      width="175px"
      height="175px"
     />
     <p class="text-sm lg:text-base lg:max-w-[50%]">
      Submit your vehicles information and you may receive an offer directly
      from us!
     </p>
    </div>
   </div>
  </div>
 </div>
</template>
<script setup></script>
