import { ref } from 'vue';

const toggleNavbar = () => {

    const showNavbar = ref(false);

    const onShowNavbar = () => {
        
        return showNavbar.value = !showNavbar.value;

    };

    return {
        onShowNavbar,
        showNavbar,
    };
};

export default toggleNavbar;