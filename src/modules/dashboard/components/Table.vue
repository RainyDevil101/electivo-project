<template>
    <div class="grid gap-6 m-6 pb-6 animate__animated animate__fadeIn animate__faster">
        <div class="p-6 dark:bg-gray-500 bg-secondary rounded overflow-auto">
        <table class="w-full table-auto">
            <thead>
                <tr>
                    <th v-for="header in tableHeader" :key="header" class="uppercase text-left py-3 px-2">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <TableData v-for="data in hombresMujeresRenta" :data="data" :key="data.subrubroEconomico" />
            </tbody>
        </table>
    </div>

    <div class="p-6 dark:bg-gray-500 bg-secondary rounded overflow-auto">
        <table class="w-full table-auto">
            <thead>
                <tr>
                    <th v-for="header in tableHeaderSectores" :key="header" class="uppercase text-left py-3 px-2">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <TableData v-for="data in sectores" :data="data" :key="data.subrubroEconomico
" />
            </tbody>
        </table>
    </div>
    </div>
</template>

<script setup>
import { useCsvsStore } from '../../../store';
import TableData from './TableData.vue';
import { tableHeader } from '../../../refs'
import { tableHeaderSectores } from '../../../refs'
const { hombresMujeresRenta, sectores } = useCsvsStore();



</script>

<style lang="scss" scoped>

</style>