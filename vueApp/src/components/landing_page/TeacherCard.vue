<template>
  <div class="bg-white shadow-md rounded-xl overflow-hidden max-w-xs">
    <img :src="image" alt="Teacher Photo" class="w-full h-60 object-cover" />
    <div class="p-4">
      <h2 class="text-lg font-bold text-[#0F172A]">{{ name }}</h2>
      <p class="text-sm text-orange-600 font-semibold mt-1">{{ title }}</p>
      <p class="text-sm text-gray-600 mt-2 line-clamp-3">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  name: String,
  title: String,
  description: String
});
</script>

<style scoped>
/* optional fallback for line-clamp if not available */
</style>

<!-- Make sure you have the Tailwind line-clamp plugin enabled if you use line-clamp-3. -->

<!-- This component under development -->
