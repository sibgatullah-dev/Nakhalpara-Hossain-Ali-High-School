<template>
    <!--Top header part starts-->
    <div class="top_header bg-[#354692] py-[10px]">
        <div class="container m-auto flex justify-between">
            <div class="left w-40% flex text-white  ">

                <div class="phone flex items-center">
                    <font-awesome-icon icon="phone" />
                    <p class="pl-[5px]">0123456789</p>  
                </div>
                <div class="e-mail flex pl-[15px] items-center">
                    <font-awesome-icon icon="envelope" />
                    <a class="pl-[5px]" href="https://nphahs.edu.bd/page_menu/3#">nakhalparahossainalihighschool@yahoo.com</a>
                </div>

            </div>

            <div class="right w-60% flex text-white ">
                <div class="address flex items-center">
                    <font-awesome-icon icon="location-dot" />
                    <p class="pl-[5px]">East Nakhalpara, Tejgaon Ind.Area, Dhaka 1215</p>
                </div>
                <div class="class_operation_time pl-[15px] flex items-center">
                    <font-awesome-icon icon="clock" />
                    <p class="pl-[5px]">Sat-Thu: 8:00 AM-4:00 PM</p>
                </div>
            </div>

        </div>
    </div>

    
    <!-- navigation -->
    <nav :class="['sticky top-0 z-50 w-full transition-all duration-300',isSticky ? 'bg-[#142a5c] shadow-md py-3' : 'bg-[#142a5c] py-5']">

        <div class="container m-auto flex justify-between items-center">

            <!-- Logo and Site Name -->
            <div class="logo w-[40%]">
            <router-link to="/">
                <h1 class="text-white font-bold text-[28px]">Nakhalpara Hossain Ali High School</h1>
            </router-link>
            </div>

            <!-- Menu and Button -->
            <div class="flex items-center gap-6">
            <!-- Menu -->
            <ul class="flex gap-6 text-white font-normal text-[18px]">
                <li>
                <router-link to="/about" class="hover:text-gray-400 transition-colors duration-200">About us</router-link>
                </li>
                <li>
                <div class="group cursor-pointer relative hover:text-gray-400 transition-colors duration-200">
                    Academic
                    <span>
                    <font-awesome-icon icon="angle-down" class="transform transition-transform duration-300 group-hover:rotate-180" />
                    </span>
                    <!-- Dropdown -->
                    <ul class="absolute left-0 pt-2 w-40 bg-[#142a5c] rounded leading-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto z-50 text-white">
                    <li class="px-4 py-2 hover:bg-[#354692]">Dummy 1</li>
                    <li class="px-4 py-2 hover:bg-[#354692]">Dummy 2</li>
                    <li class="px-4 py-2 hover:bg-[#354692]">Dummy 3</li>
                    <li class="px-4 py-2 hover:bg-[#354692]">Dummy 4</li>
                    </ul>
                </div>
                </li>
                <li>
                <div class="group cursor-pointer relative hover:text-gray-400 transition-colors duration-200">
                    Faculty
                    <span>
                    <font-awesome-icon icon="angle-down" class="transform transition-transform duration-300 group-hover:rotate-180" />
                    </span>
                    <!-- Dropdown -->
                    <ul class="absolute left-0 pt-2 w-40 bg-[#142a5c] rounded leading-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto z-50 text-white">
                    <li class="px-4 py-2 hover:bg-[#354692]">Dummy 1</li>
                    <li class="px-4 py-2 hover:bg-[#354692]">Dummy 2</li>
                    <li class="px-4 py-2 hover:bg-[#354692]">Dummy 3</li>
                    <li class="px-4 py-2 hover:bg-[#354692]">Dummy 4</li>
                    </ul>
                </div>
                </li>
                <li>
                <router-link to="/gallary" class="hover:text-gray-400 transition-colors duration-200">Gallery</router-link>
                </li>
            </ul>

            <!-- Apply Now Button -->
            <router-link
                to="/apply"
                class="ml-4 bg-white text-[#142a5c] px-4 py-2 rounded-md font-semibold shadow hover:bg-gray-200 transition duration-200"
            >
                Apply Now 
            </router-link>
            </div>
        </div>
    </nav>
    <NoticeBoardSlide :notices="noticeList" />

    <router-view></router-view>
</template>

<script setup>

// Nevigation section starts
import { ref, onMounted, onUnmounted } from 'vue'
import NoticeBoardSlide from '../noticeboard/NoticeBoardSlide.vue'

const isSticky = ref(false)

const handleScroll = () => {
  isSticky.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
// Nevigation section ends

// Notice board slide starts 
const noticeList = [
  {
    text: '১৯/০৭/২০২৫ তারিখ অনুষ্ঠিত লিখিত পরীক্ষার ফলাফল',
    link: '/notices/exam-result-190725'
  },
  {
    text: 'ভর্তি বিজ্ঞপ্তি ২০২৫',
    link: '/notices/admission-2025'
  },
  {
    text: 'শ্রেণি পরিবর্তন সময়সূচি প্রকাশিত',
    link: '/notices/class-shift'
  }
];
// Notice board siled ends
</script>
