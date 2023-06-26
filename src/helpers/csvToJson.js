import { ref } from 'vue';
import { useCsvsStore } from '../store';
import { storeToRefs } from 'pinia';

export const csvToJson = () => {

    const csvStore = useCsvsStore();

    const { localFile } = storeToRefs(csvStore);

    // const localFile = ref(store.getLocalFile);

    const onFile = async (event) => {

        // const file = event.target.files[0];
        // if (!file) {
        //     localFile.value = null;
        //     return;
        // } else {
        //     localFile.value = file;
        // }

        csvStore.toggleLocalFile();

        // console.log(localFile.value);

        return
    };

    return {
        onFile,
        localFile,
    }

};

export default csvToJson;