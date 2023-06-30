<template>
    <div class="block lg:w-80 bg-secondary mx-6">
        <div class="flex">
            <router-link :to="{ name: 'charts' }" class="p-4 w-full text-xl text-center">
                Gráficos
            </router-link>
            <router-link :to="{ name: 'tables' }" class="p-4 w-full text-xl text-center">
                Tablas
            </router-link>
        </div>
    </div>
</template>

<script setup>

</script>