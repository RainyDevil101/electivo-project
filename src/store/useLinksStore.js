import { defineStore } from 'pinia';
import navbarLinks from '../refs/navbarLinks'
import { computed } from 'vue';

export const useLinksStore = defineStore('links', () => {
    const links = navbarLinks;
    const getLinks = computed(() => links);
    function setLinks() {
        links = navbarLinks;
    }

    return {
        getLinks,
        links,
        setLinks,
    }
});