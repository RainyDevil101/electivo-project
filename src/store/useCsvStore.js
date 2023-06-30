import { defineStore } from 'pinia';
import empresas from '../files/empresas.json';
import empresasRegiones from '../files/empresas-regiones.json';
import totalSubrubroActividad from '../files/total-subrubro-actividad.json';

export const useCsvsStore = defineStore('localFile', {
    state: () => ({
            empresas: empresas,
            empresasRegiones: empresasRegiones,
            totalSubrubroActividad: totalSubrubroActividad,
    }),
    actions: {
        toggleLocalFile() {
            this.empresas = !this.empresas
            console.log(this.empresas);
        },
    }
});