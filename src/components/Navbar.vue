<template>
    <div ref="test2" class="navbar">
        <div class="logo">
            <h2>Proyecto - Electivo</h2>
            <i @click="onShowNavbar" class="fa-solid fa-bars menu-icon"></i>
        </div>
        <ul :class="{ showNavbarClass: showNavbar }" class="links-container">
            <LinkItem v-for="link in navLinks" :link="link" :key="link" />
        </ul>
    </div>
</template>

<script setup>
import { useLinksStore } from '../store/useLinksStore'
import { onMounted, ref } from 'vue';
import LinkItem from './LinkItem.vue';
import toggleNavbar from '../helpers/toggleNavbar';

const store = useLinksStore();
const test2 = ref(null);
const { onShowNavbar, showNavbar } = toggleNavbar()

const { getLinks } = store;

const navLinks = getLinks;

onMounted(() => {
    console.log(test2.value.class);
});


</script>

<style scoped>
.navbar {
    display: block;
    height: 60px;
    position: fixed;
    width: 100%;
    background-color: var(--antiflash-white);
    -webkit-box-shadow: 0px 1px 14px 0px rgba(0, 0, 0, 0.61);
    -moz-box-shadow: 0px 1px 14px 0px rgba(0, 0, 0, 0.61);
    box-shadow: 0px 1px 14px 0px rgba(0, 0, 0, 0.61);
}

.logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: var(--space-cadet);
    color: var(--antiflash-white);
    text-transform: uppercase;
    padding: 0 16px;
    height: 100%;
}

.logo h2 {
    margin: 0;
    padding: 0;
}


.links-container {
    display: none;
    text-align: center;
    padding: 0;
    margin: 0;
    background-color: var(--cool-gray);
}

.menu-icon:hover {
    color: var(--red-pantone);
}

.showNavbarClass {
    display: block;
}

.hideNavbarClass {
    display: none;
}

@media (min-width: 768px) {

    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .links-container {
        display: flex;
        padding: auto;
        height: 100%;
        background-color: var(--antiflash-white);
    }

    .menu-icon {
        display: none;
    }

}
</style>