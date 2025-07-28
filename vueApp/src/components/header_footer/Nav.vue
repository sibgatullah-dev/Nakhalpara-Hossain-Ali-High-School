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

    <!--navigation-->
    <nav class=" bg-[#142a5c] py-[20px]">
        <div class="container m-auto flex items-center">
            <!--Here goes the logo and the name-->
            <div class="logo w-[40%] ">
                <div class="items flex m-auto items-center">
                    <router-link to="/">
                      <img src="../../assets/logo.png" alt="" class="w-[80px] rounded">
                    </router-link>   
                </div>
            </div>

            <!--Here goes the menus-->
            <div class="menu w-[60%]">
                <ul class=" flex gap-6 justify-end text-white font-normal text-[18px] w-full  pl-[80px]">

                    <li>
                        <router-link to="/about" class="hover:text-gray-400 transition-colors duration-200">About us</router-link>
                    </li>

                    <li>
                        <div class="group cursor-pointer relative hover:text-gray-400 transition-colors duration-200">
                            Academic 
                            <span>
                                <font-awesome-icon icon="angle-down"class="transform transition-transform duration-300 group-hover:rotate-180"/>
                            </span>
                            <!-- drop down menu  -->
                            <ul class="absolute left-0 pt-2 w-40 bg-[#142a5c] rounded leading-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto z-50 text-white">

                                <li class=" px-4 py-2 hover:bg-[#354692]">Dummy 1</li>
                                <li class=" px-4 py-2 hover:bg-[#354692]">Dummy 2</li>
                                <li class=" px-4 py-2 hover:bg-[#354692]">Dummy 3</li>
                                <li class=" px-4 py-2 hover:bg-[#354692]">Dummy 4</li>

                            </ul>
                            <!-- drop down menu ends  -->
                        </div>
                    </li>

                    <li>
                        <div class="group cursor-pointer relative hover:text-gray-400 transition-colors duration-200">
                            Admission 
                            <span>
                                <font-awesome-icon icon="angle-down"class="transform transition-transform duration-300 group-hover:rotate-180"/>
                            </span>
                            <!-- drop down menu  -->
                            <ul class="absolute left-0 pt-2 w-40 bg-[#142a5c] rounded leading-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto z-50 text-white">

                                <li class=" px-4 py-2 hover:bg-[#354692]">Dummy 1</li>
                                <li class=" px-4 py-2 hover:bg-[#354692]">Dummy 2</li>
                                <li class=" px-4 py-2 hover:bg-[#354692]">Dummy 3</li>
                                <li class=" px-4 py-2 hover:bg-[#354692]">Dummy 4</li>

                            </ul>
                            <!-- drop down menu ends  -->
                        </div>
                    </li>

                    <li>
                        <div class="group cursor-pointer relative hover:text-gray-400 transition-colors duration-200">
                            Events
                            <span>
                                <font-awesome-icon icon="angle-down"class="transform transition-transform duration-300 group-hover:rotate-180"/>
                            </span>
                            <!-- drop down menu  -->
                            <ul class="absolute left-0 pt-2 w-40 bg-[#142a5c] rounded leading-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto z-50 text-white">

                                <li class=" px-4 py-2 hover:bg-[#354692]">Dummy 1</li>
                                <li class=" px-4 py-2 hover:bg-[#354692]">Dummy 2</li>
                                <li class=" px-4 py-2 hover:bg-[#354692]">Dummy 3</li>
                                <li class=" px-4 py-2 hover:bg-[#354692]">Dummy 4</li>

                            </ul>
                            <!-- drop down menu ends  -->
                        </div>
                    </li>

                    <li>
                        <div class="group cursor-pointer relative hover:text-gray-400 transition-colors duration-200">
                           Faculty
                            <span>
                                <font-awesome-icon icon="angle-down"class="transform transition-transform duration-300 group-hover:rotate-180"/>
                            </span>
                            <!-- drop down menu  -->
                            <ul class="absolute left-0 pt-2 w-40 bg-[#142a5c] rounded leading-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto z-50 text-white">

                                <li class=" px-4 py-2 hover:bg-[#354692]">Dummy 1</li>
                                <li class=" px-4 py-2 hover:bg-[#354692]">Dummy 2</li>
                                <li class=" px-4 py-2 hover:bg-[#354692]">Dummy 3</li>
                                <li class=" px-4 py-2 hover:bg-[#354692]">Dummy 4</li>

                            </ul>
                            <!-- drop down menu ends  -->
                        </div>
                    </li>

                    <li><router-link to="/gallary" class="hover:text-gray-400 transition-colors duration-200">Gallary</router-link></li>
                </ul>
            </div>

        </div>
    </nav>
    <router-view></router-view>
</template>

<script setup>
    import About from '../../pages/About.vue'
    import Gallary from '../../pages/Gallary.vue'

    components:{About}
</script>