import { defineStore } from 'pinia';
import empresas from '../files/empresas.json';

export const useCsvsStore = defineStore('localFile', {
    state: () => ({
            localFile: empresas,
    }),
    actions: {
        toggleLocalFile() {
            this.localFile = !this.localFile
            console.log(this.localFile);
        },
    }
});