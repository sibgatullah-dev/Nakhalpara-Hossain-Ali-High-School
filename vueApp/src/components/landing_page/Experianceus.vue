<template>
  <div class="bg-[rgba(53,70,146,0.05)] py-20">
    <div class="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        <!-- Left Image Section -->
        <div class="w-full md:w-[50%] shadow-xl rounded-md overflow-hidden">
            <img src="../../assets/banner.jpg" alt="Experience Video" class="w-full h-auto object-cover" />
        </div>

        <!-- Right Text Section -->
        <div class="w-full md:w-[50%] text-left">
            <h2 class="text-3xl md:text-4xl font-bold text-[#142a5c] mb-4">
                Experience With Us
            </h2>

            <p class="text-gray-700 text-[18px] leading-8 mb-8 max-w-xl">
                A transformative initiative catapulting our <strong>Classrooms</strong>, <strong>Curriculum</strong>,
                and <strong>Campus</strong> through hands-on, experiential learning, K-12 programming, and
                state-of-the-art science labs and services to prepare our students for a world we haven't even imagined yet.
            </p>

            <!-- Buttons section -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
                <BlueButton label="CURRICULUM" to="/curriculum" />
                <BlueButton label="CLASSROOM" to="/classroom" />
                <BlueButton label="CAMPUS" to="/campus" />

            </div>
        </div>
    </div>

  </div>
</template>

<script setup>

import BlueButton from '../buttons/BlueButton.vue';

components:{BlueButton}

</script>

