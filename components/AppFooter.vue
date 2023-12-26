<template>
 <div class="w-full bg-gray-400/80 h-[1px]" />
 <div class="flex justify-between mt-2">
  <div class="flex flex-col gap-4">
   <div class="flex gap-1">
    <h6 class="text-2xl font-bold tracking-tight">carz</h6>
    <span>&copy;</span>
   </div>
   <div class="flex gap-2">
    <NuxtLink to="https://github.com/brianmstricker" target="_blank"
     ><UIcon name="i-bxl-github" dynamic class="text-[26px]"
    /></NuxtLink>
    <NuxtLink
     to="https://www.linkedin.com/in/brian-stricker-a1559b250/"
     target="_blank"
    >
     <UIcon name="i-bxl-linkedin-square" dynamic class="text-[26px]" />
    </NuxtLink>
   </div>
   <div class="text-xs tracking-tighter">
    <span class="text-base mr-[2px]">&copy;</span>2023 CARZ. ALL RIGHTS
    RESERVED.
   </div>
  </div>
  <div class="flex gap-20 mt-1">
   <div>
    <h6 class="font-bold text-lg">Carz</h6>
    <ul>
     <li>Buy</li>
     <li>Sell</li>
    </ul>
   </div>
   <div>
    <h6 class="font-bold text-lg">About</h6>
    <ul>
     <li>About us</li>
     <li>Contact us</li>
     <li>How it works</li>
    </ul>
   </div>
  </div>
 </div>
</template>
