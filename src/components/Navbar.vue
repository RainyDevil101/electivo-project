<template>
    <nav class="fixed w-full z-20 top-0 left-0 backdrop-blur-sm">
        <div class="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto px-4 h-full">
            <div class="flex items-center">
                <i @click="toggleDark()" class="fa-solid fa-circle-half-stroke mr-4 hover:text-redPantone transition-all"></i>
                <h2 class="self-center p-4 text-xl md:text-3xl font-semibold whitespace-nowrap text-primary dark:text-lightGray uppercase">
                    Proyecto - Electivo</h2>
            </div>
            <button data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-primary dark:text-lightGray rounded-lg lg:hidden hover:text-redPantone focus:outline-none focus:ring-2 focus:ring-redPantone dark:hover:text-redPantone dark:focus:ring-redPantone"
                aria-controls="navbar-default" aria-expanded="false">
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
            <div class="hidden w-full lg:block lg:w-auto" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 lg:p-0 mt-4 lg:flex-row lg:space-x-0 lg:mt-0 transition">
                    <LinkItem v-for="link in navLinks" :link="link" :key="link"/>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useLinksStore } from '../store';
import { useDark, useToggle } from '@vueuse/core';
import LinkItem from './LinkItem.vue';
const store = useLinksStore();
const { getLinks } = store;
const navLinks = getLinks;

const isDark = useDark();
const toggleDark = useToggle(isDark);



</script>

