import { onMounted, onUnmounted, ref } from 'vue';

const navbarSize = () => {

    const windowSize = ref(window.innerWidth);

    const handleResize = () => {
        windowSize.value = window.innerWidth;
    };

    onMounted(() => {
        window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });

    return {
        windowSize,
        handleResize,
    }
};

export default navbarSize;