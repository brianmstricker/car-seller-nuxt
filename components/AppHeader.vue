<template>
 <header
  class="bg-gray-300/50 h-24 flex items-center sticky top-0 rounded-b-md contain"
 >
  <nav class="w-full">
   <div class="flex items-center justify-between">
    <NuxtLink to="/" class="flex items-center gap-2 -ml-2">
     <NuxtImg src="logo.png" alt="Logo" class="w-[5.5rem] h-[5.5rem mb-3" />
     <h1 class="text-4xl font-black tracking-wide -ml-2">carz</h1>
    </NuxtLink>
    <ul class="flex gap-6 text-lg mt-2 font-medium">
     <li v-for="link in links" class="group">
      <NuxtLink :to="link.path" class="uppercase"
       >{{ link.name }}
       <UIcon
        class="-ml-2 transform transition-all duration-300 group-hover:rotate-180"
        v-if="link.showDropDown"
        name="i-heroicons-chevron-down"
       />
       <div
        class="bg-blue-600 h-1 rounded-full w-0 group-hover:w-full transition-all duration-300 mx-auto relative -top-[2px]"
       />
      </NuxtLink>
     </li>
    </ul>
   </div>
  </nav>
 </header>
</template>
<script setup>
const links = [
 { name: "Buy", path: "/cars" },
 { name: "Sell", path: "/sell" },
 {
  name: "About",
  path: "/about",
  showDropDown: true,
  dropDownItems: [
   { name: "About Us", path: "/about" },
   { name: "Contact Us", path: "/contact" },
   { name: "How it works", path: "/how" },
  ],
 },
 { name: "Login", path: "/login" },
];
//TODO add a dropdown for about
//TODO mobile nav menu
</script>
