<template>
<div class="container mx-auto">
     <div class="bg-white flex items-center  border-[#142a5c] shadow py-2 overflow-hidden relative">
    <!-- Icon and Label -->
    <span class="mr-2 text-red-600 text-xl">📢</span>
    <span class="font-bold text-[#142a5c] mr-2 whitespace-nowrap">বিশেষ নোটিশ :</span>

    <!-- Marquee Area -->
    <div class="overflow-hidden w-full relative group">
      <div class="marquee whitespace-nowrap text-blue-700 font-medium">
        <span  v-for="(notice, index) in notices"  :key="index"  class="inline-block mr-10">
          🔷
          <a :href="notice.link" target="_blank" class="hover:underline">
            {{ notice.text }}
          </a>
        </span>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
defineProps({
  notices: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.marquee {
  display: inline-block;
  animation: marquee 25s linear infinite;
  will-change: transform;
}

/* Pause on hover of entire marquee wrapper */
.group:hover .marquee {
  animation-play-state: paused;
}
</style>
