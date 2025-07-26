<template>
    <footer>

        <div class="top bg-[#142a5c] pt-[40px] pb-[20px] pl-[40px]">
            <div class="container m-auto flex">

                <div class="get_in_touch w-[40%] leading-10 text-gray-300 text-[18px]">

                    <!--Footer logo-->
                    <img src="../../assets/logo.png" alt="" class="w-[80px] rounded pb-[20px]">

                    <!--Footer Contacts info-->
                    <div class="address flex items-center ">
                        <font-awesome-icon icon="location-dot" />
                        <p class="pl-[5px]">East Nakhalpara, Tejgaon Ind.Area, Dhaka 1215</p>
                    </div>
                    <div class="phone flex items-center">
                        <font-awesome-icon icon="phone" />
                        <p class="pl-[5px]">0123456789</p>  
                    </div>
                    <div class="e-mail flex items-center">
                        <font-awesome-icon icon="envelope" />
                        <a class="pl-[5px]" href="https://nphahs.edu.bd/page_menu/3#">nakhalparahossainalihighschool@yahoo.com</a>
                    </div>

                    <!--Footer Icons-->    
                    <div class="social flex gap-x-4 pt-[10px]">
                        <div class="facebook bg-[rgba(253,252,252,0.04)] px-[10px] rounded-full text-[18px] hover:bg-[rgba(253,252,252,0.25)]">
                            <font-awesome-icon :icon="['fab', 'facebook']" />
                        </div>
                        <div class="X bg-[rgba(253,252,252,0.04)] px-[10px] rounded-full text-[18px] hover:bg-[rgba(253,252,252,0.25)]">
                            <font-awesome-icon :icon="['fab', 'x-twitter']" />
                        </div>
                        <div class="instagram bg-[rgba(253,252,252,0.04)] px-[10px] rounded-full text-[18px] hover:bg-[rgba(253,252,252,0.25)]">
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                        </div>
                        <div class="linkedin bg-[rgba(253,252,252,0.04)] px-[10px] rounded-full text-[18px] hover:bg-[rgba(253,252,252,0.25)]">
                            <font-awesome-icon :icon="['fab', 'linkedin']" />
                        </div>
                    </div>

                </div>
                
                <div class="links w-[40%]">
                    <h2 class="text-white font-normal text-[24px] leading-10 pt-[5%]">Quick Links</h2>
                    <ul class="text-gray-300 font-normal text-[18px] leading-10 ">
                        <li class="hover:text-gray-400"><a href="">About</a></li>
                        <li class="hover:text-gray-400"><a href="">Notice Board</a></li>
                        <li class="hover:text-gray-400"><a href="">Admission</a></li>
                        <li class="hover:text-gray-400"><a href="">Gallary</a></li>
                    </ul>
                </div>

                <div class="div w-[20%]">
                    
                </div>
            </div>
        </div>

        <div class="bottom bg-[#354692] py-[40px]">
            <div class="container flex m-auto justify-between">

                <div class="left w-[50%] pl-[40px]">
                    <p class="text-gray-300">Copyright © <span>2025</span> <span><a class="text-white hover:underline" href="">Nakhalpara Hossain Ali High School</a></span>. All Rights Reserved</p>
                </div>
                <div class="right w-50% text-gray-300 flex gap-4 justify-end pr-[40px]">
                    <a class="hover:text-white hover:underline" href="">Terms & Conditions</a>
                    <a class="hover:text-white hover:underline" href="">Privacy Policy</a>
                    <a class="hover:text-white hover:underline" href="">Sitemap</a>
                </div>

            </div>
        </div>

    </footer>
    
</template>