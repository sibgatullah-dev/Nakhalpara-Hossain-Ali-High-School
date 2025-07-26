<template>
  <div class="relative w-full h-[400px] overflow-hidden">
    <!-- Banner Image -->
    <img src="../../assets/banner.jpg" alt="" class="w-full h-full object-cover" />

    <!-- Optional: Dark overlay for better text contrast -->
    <div class="absolute inset-0 bg-[rgba(0,0,0,0.3)]"></div>

    <!-- Overlayed Content -->
    <div class="absolute left-8 top-1/2 -translate-y-1/2 z-10">

      <h1 class="text-white text-[48px] font-bold mb-4 drop-shadow-lg">
        Nakhalpara Hossain Ali High School
      </h1>
      <p class="text-white text-2xl font-semibold mb-6">Know Thyself</p>
      <button class="bg-white text-[#142a5c] font-bold px-8 py-3 rounded shadow hover:bg-gray-300 transition">
        About Us 
      </button>

    </div>

  </div>
</template>