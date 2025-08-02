<template>
  <RouterLink
    :to="to"
    class="w-full bg-[rgba(53,70,146,0.1)] px-6 py-4 font-bold text-sm text-[#142a5c]
           transition-transform duration-200 ease-out hover:bg-[#142a5c] hover:text-white 
           transform hover:scale-[1.03] will-change-transform text-center block">
    {{ label }}
  </RouterLink>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  to: {
    type: [String, Object],
    required: true
  }
});
</script>
