<template>
    <div class="animate__animated animate__fadeIn animate__faster">
        <PageHeader :key="headerContent" :headerContent="headerContent" />
        <PageBody :key="bodyContent" :body-content="bodyContent" />
    </div>
</template>

<script setup>
import PageHeader from '../components/PageHeader.vue';
import PageBody from '../components/PageBody.vue';
import { useRouter } from 'vue-router';
import getContent from '../helpers/getContent';

const router = useRouter();
const pathName = router.currentRoute.value.name;
const { headerContent, bodyContent } = getContent(pathName);


</script>