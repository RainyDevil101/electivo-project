<template>
    <div
        class="block w-full md:flex h-full md:h-16 md:items-center md:justify-between navbar bg-lightGray dark:bg-primary text-primary dark:text-lightGray">
        <div class="flex justify-between items-center text-center uppercase px-4 py-0 h-16 md:h-full">
            <i @click="toggleDark()" class="fa-solid fa-circle-half-stroke mr-4 hover:text-redPantone"></i>
            <h2 class="m-0 p-0 text-xs md:text-2xl">Proyecto - Electivo</h2>
            <i @click="onShowNavbar" class="fa-solid fa-bars ml-4 hover:text-redPantone md:hidden"></i>
        </div>
        <ul :class="showNavbar ? ['block'] : 'hidden'" class="text-center p-0 m-0 md:flex h-full">
            <LinkItem v-for="link in navLinks" :link="link" :key="link" />
        </ul>
    </div>
</template>

<script setup>
import { useLinksStore } from '../store';
import { useDark, useToggle } from '@vueuse/core';
import LinkItem from './LinkItem.vue';
import toggleNavbar from '../helpers/toggleNavbar';
import navbarSize from '../helpers/navbarSize';

const store = useLinksStore();
const { getLinks } = store;
const { onShowNavbar, showNavbar } = toggleNavbar()
const { windowSize, handleResize } = navbarSize();

handleResize()



const isDark = useDark();
const toggleDark = useToggle(isDark);

const navLinks = getLinks;

// onMounted(() => {
//     console.log(test2.value);
// });


</script>

<style scoped>
.navbar {
    -webkit-box-shadow: 0px 1px 14px 0px rgba(0, 0, 0, 0.61);
    -moz-box-shadow: 0px 1px 14px 0px rgba(0, 0, 0, 0.61);
    box-shadow: 0px 1px 14px 0px rgba(0, 0, 0, 0.61);
}

.showNavbarClass {
    display: block;
}
</style>