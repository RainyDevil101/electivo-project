import { defineStore } from 'pinia';
import { computed } from 'vue';
import { getNavbarContent } from '../helpers';

const { navbarLinks } = getNavbarContent();

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