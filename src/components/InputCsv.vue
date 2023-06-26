<template>
    <div class="bg-primary dark:bg-lightGray absolute left-1/2 top-1/2 -ml-40 -m-40 rounded flex ">

        <label for="file"
            class="p-12  m-auto text-lightGray dark:text-primary text-xl transform transition duration-500 hover:scale-110">Seleccionar
            archivo CSV</label>
        <input class="hidden" id="file" type="file" accept=".csv" @change="onFile">

    </div>
</template>

<script setup>
import { csvToJson } from '../helpers';

const { onFile } = csvToJson();

</script>
