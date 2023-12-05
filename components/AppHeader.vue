<template>
 <header
  class="bg-gray-200 h-24 flex items-center sticky top-0 rounded-b-md contain"
 >
  <nav class="w-full">
   <div class="flex items-center justify-between">
    <NuxtLink to="/" class="flex items-center gap-2 -ml-2.5">
     <NuxtImg src="logo.png" alt="Logo" class="w-[5.5rem] h-[5.5rem mb-3" />
     <h1 class="text-4xl font-black tracking-wide -ml-2">carz</h1>
    </NuxtLink>
    <ul class="flex gap-8 text-lg mt-2 font-medium">
     <li v-for="link in links" class="group">
      <NuxtLink
       v-if="!link.showDropDown"
       :to="link.path"
       class="uppercase relative"
       >{{ link.name }}
       <div
        class="bg-blue-600 h-1 rounded-full w-0 group-hover:w-full transition-all duration-300 mx-auto relative -top-[2px]"
       />
      </NuxtLink>
      <div v-else class="uppercase relative">
       <span class="cursor-pointer">{{ link.name }}</span>
       <UIcon
        class="-ml-2 transform transition-all duration-300 group-hover:rotate-180 absolute -right-[18px] top-1"
        name="i-heroicons-chevron-down"
       />
       <div
        class="bg-blue-600 h-1 rounded-full w-0 group-hover:w-full transition-all duration-300 mx-auto relative -top-[2px]"
       />
       <div>
        <div
         class="absolute bg-white shadow-lg rounded-md w-[15rem] top-10 -right-4 z-10 hidden group-hover:block transition-all duration-300"
        >
         <div class="absolute opacity-0 -z-10 left-0 right-0 -top-4 h-[130%]" />
         <ul class="flex flex-col gap-2 p-2 z-20">
          <li
           v-for="item in link.dropDownItems"
           :key="item.name"
           class="rounded-md"
          >
           <NuxtLink :to="item.path" class="p-2 hover:bg-gray-500/20 rounded-md"
            >{{ item.name }}
           </NuxtLink>
          </li>
         </ul>
        </div>
       </div>
      </div>
     </li>
    </ul>
   </div>
  </nav>
 </header>
</template>
<script setup>
// const aboutDropdown = ref(false);
// const showDropdown = () => {
//  aboutDropdown.value = !aboutDropdown.value;
// };
// if (window) {
//  const scroll = ref(window.scrollY);
//  watch(
//   () => scroll,
//   (newVal, oldVal) => {
//    if (newVal > oldVal) {
//     console.log("scrolling down");
//    } else {
//     console.log("scrolling up");
//    }
//   }
//  );
// }
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
//todo: add backdrop blur on scroll
//TODO add a dropdown for about
//TODO mobile nav menu
</script>
