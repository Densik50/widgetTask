import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Image from 'primevue/image';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/mdc-dark-indigo/theme.css'

const app = createApp(App);
app.use(PrimeVue);

app.component('PrimeVueDataTable', DataTable)
app.component('PrimeVueColumn', Column)
app.component('PrimeVueImage', Image)

app.mount('#app')
