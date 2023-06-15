import { defineStore } from 'pinia';
import { computed } from 'vue';
import navbarLinks from '../refs/navbarLinks'

export const useLinksStore = defineStore('links', () => {
    const links = navbarLinks;
    const getLinks = computed(() => links);
    function setLinks() {
        links.value = navbarLinks;
    }

    return {
        getLinks,
        links,
        setLinks,
    }
});