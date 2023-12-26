<template>
 <header class="h-24 flex items-center contain-header z-20">
  <nav class="w-full bg-gray-200/90 backdrop-blur rounded-b-md px-4 z-20">
   <div class="flex items-center justify-between">
    <NuxtLink to="/" class="flex items-center gap-2 -ml-2.5">
     <NuxtImg src="logo.png" alt="Logo" class="w-[5.5rem] h-[5.5rem mb-3" />
     <h1 class="text-4xl font-bold tracking-tight -ml-2">carz</h1>
    </NuxtLink>
    <ul class="hidden md:flex gap-8 text-lg mt-2 font-medium mr-10">
     <li
      v-for="link in links"
      class="group"
      @mouseenter="aboutDropDown = true"
      @mouseleave="aboutDropDown = false"
     >
      <NuxtLink
       v-if="!link.showDropDown"
       :to="link.path"
       class="uppercase relative"
       >{{ link.name }}
       <div
        class="bg-blue-800 h-1 rounded-full w-0 group-hover:w-full transition-all duration-300 mx-auto relative -top-[2px]"
       />
      </NuxtLink>
      <div v-else class="uppercase relative">
       <span class="cursor-pointer">{{ link.name }}</span>
       <UIcon
        class="-ml-2 transform transition-all duration-300 group-hover:rotate-180 absolute -right-[18px] top-1 cursor-pointer"
        name="i-heroicons-chevron-down"
       />
       <div
        class="bg-blue-800 h-1 rounded-full w-0 group-hover:w-full transition-all duration-300 mx-auto relative -top-[2px]"
       />
       <div>
        <div
         class="absolute bg-white shadow-lg rounded-md w-[15rem] top-10 -right-4 z-20 hidden group-hover:block transition-all duration-300"
         v-if="aboutDropDown"
        >
         <div class="absolute opacity-0 -z-10 left-0 right-0 -top-4 h-[120%]" />
         <ul class="flex flex-col gap-2 p-2 z-20">
          <li
           v-for="item in link.dropDownItems"
           :key="item.name"
           class="rounded-md"
           @click="aboutDropDown = false"
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
    <div class="absolute right-4 mt-3 hidden md:block">
     <!-- update the chip to display welcome message -->
     <UChip>
      <UIcon name="i-heroicons-bell" class="text-[22px]" />
     </UChip>
    </div>
    <!-- {mobile menu} -->
    <button @click="mobileNavMenu = true" class="md:hidden mt-[13px]">
     <UIcon name="i-heroicons-bars-4-solid" class="text-3xl" />
    </button>
    <UModal
     v-model="mobileNavMenu"
     :ui="{
      base: 'h-screen ml-auto p-0',
      padding: 'p-0',
      margin: 'sm:my-0',
      width: 'w-[85%] sm:w-[70%] md:w-[60%]',
      overlay: {
       background: 'bg-black/75',
      },
      transition: {
       enter: 'ease-out duration-300',
       enterFrom: 'opacity-0 -right-[200px]',
       enterTo: 'opacity-100 right-0',
       leave: 'ease-in duration-300',
       leaveFrom: 'opacity-100 right-0',
       leaveTo: 'opacity-0 -right-[200px]',
      },
     }"
     class="md:hidden z-[100] bg-white text-lg font-medium relative"
    >
     <button
      @click="mobileNavMenu = false"
      class="absolute top-2 left-2 text-2xl"
     >
      <UIcon name="i-heroicons-x-mark-20-solid" />
     </button>
     <ul class="flex flex-col items-center justify-center gap-8 w-full h-full">
      <li v-for="link in links" class="group">
       <NuxtLink
        v-if="!link.showDropDown"
        :to="link.path"
        class="uppercase relative"
        @click="closeAboutMenuWithDelay(), (mobileNavMenu = false)"
        >{{ link.name }}
        <div
         class="bg-blue-800 h-1 rounded-full w-0 group-hover:w-full transition-all duration-300 mx-auto relative -top-[2px]"
        />
       </NuxtLink>
       <div v-else class="uppercase relative max-w-fit mx-auto">
        <span @click="aboutDropDown = !aboutDropDown" class="cursor-pointer">{{
         link.name
        }}</span>
        <UIcon
         class="absolute top-1/2 bottom-1/2 -translate-y-1/2"
         name="i-heroicons-minus-small-20-solid"
        />
        <div
         v-if="aboutDropDown"
         class="bg-blue-800 h-1 rounded-full w-full transition-all duration-300 mx-auto relative -top-[2px]"
        />
       </div>
       <div>
        <div v-if="aboutDropDown && link.showDropDown">
         <ul
          class="flex flex-col gap-2 px-6 py-2 bg-gray-500/20 rounded-md mt-[6px]"
         >
          <li v-for="item in link.dropDownItems" :key="item.name" class="mt-1">
           <NuxtLink
            :to="item.path"
            class="px-2 py-1"
            @click="closeAboutMenuWithDelay(), (mobileNavMenu = false)"
            >{{ item.name }}
           </NuxtLink>
          </li>
         </ul>
        </div>
       </div>
      </li>
     </ul>
    </UModal>
   </div>
  </nav>
 </header>
</template>
<script setup>
const aboutDropDown = ref(false);
const mobileNavMenu = ref(false);
function closeAboutMenuWithDelay() {
 setTimeout(() => (aboutDropDown.value = false), 300);
}
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
</script>
