<template>
    <StandarContent class="width">

        <ul>
            <li>
                <h2>
                    Hacer un análisis exploratorio. (Limpiar las bases de datos).
                </h2>
                <br>
                <p>
                    El primer paso que se realizó fue descargar la Nómina de empresas personas jurídicas año comercial
                    2015-2019 y los
                    años 2020-2021 desde la página del Servicio de Impuestos.
                    Pero al momento de revisar los archivos notamos que era mucho mejor hacer una limpieza de los campos que
                    no se iban
                    a necesitar antes de subirlos al programa Sql, es decir, en el archivo excel.
                    Luego se creó una base de datos llamada ‘empresa’ en el programa Sql. En esta base de datos se creó una
                    tabla para
                    unir los datos de los años 2015-2019 y 2020-2021.
                </p>
            </li>
            <br>
            <li>
                <h2>
                    Identificar empresas del área logística.
                </h2>
                <br>
                <p>
                    El siguiente paso fue crear una Query donde se hizo la limpieza de los datos, para esto en la columna de
                    “Rubro
                    Económico” a criterio de grupo usamos palabras claves como “transporte y almacenamiento” y en la columna
                    de
                    “Actividad Económica” usamos la palabra clave “carga”,luego de que se ejecutara de manera correcta la
                    Query,
                    decidimos descargar de la misma página de Servicios de Impuestos Internos en la sección de “Estadísticas
                    de
                    Empresa”
                    el archivo que se llama “Estadísticas de Empresas por Región y Rubro económico”, esto se hizo para poder
                    el
                    punto 4
                    que viene más adelante.
                </p>
            </li>
            <br>
            <li>
                <h2>
                    Aplicar alguna técnica de anonimato a los datos.
                </h2>
                <br>
                <p>
                    La anonimización por ID es la técnica de anonimato que hemos elegido en la consulta SQL. Es un proceso
                    mediante
                    el
                    cual se reemplaza la información personal identificable en la base de datos (En este caso la razón
                    social y rut
                    de
                    la empresa) con identificadores únicos y no relacionados con la identidad de las empresas. Esto lo
                    hacemos para
                    proteger la privacidad y confidencialidad de los datos mientras mantenemos las relaciones y estructuras.
                </p>
            </li>
        </ul>

    </StandarContent>
</template>

<script setup>
import StandarContent from '../../components/StandarContent.vue';


</script>

<style scoped>
p {
    text-align: justify;
    font-size: 1rem;
}

h2 {
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
}
</style>