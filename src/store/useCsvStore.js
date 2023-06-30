import { defineStore } from 'pinia';
import empresas from '../files/empresas.json';
import empresasRegiones from '../files/empresas-regiones.json';
import totalSubrubroActividad from '../files/total-subrubro-actividad.json';
import mujeresRubro from '../files/mujeres-rubro.json';
import hombresMujeresRenta from '../files/hombres-mujeres-renta.json';
import sectores from '../files/sectores.json';

export const useCsvsStore = defineStore('localFile', {
    state: () => ({
            empresas: empresas,
            empresasRegiones: empresasRegiones,
            totalSubrubroActividad: totalSubrubroActividad,
            mujeresRubro: mujeresRubro,
            hombresMujeresRenta: hombresMujeresRenta,
            sectores: sectores,
    }),
    actions: {
        toggleLocalFile() {
            this.empresas = !this.empresas
            console.log(this.empresas);
        },
    }
});