import DashboardLayout from '../layout/DashboardLayout.vue'
import ChartsView from '../views/ChartsView.vue'
import TablesView from '../views/TablesView.vue'

export default {

    name: 'dashboard',
    component: DashboardLayout,
    children: [
        {
            path: '',
            name: 'redirect',
            redirect: { name: 'tables' }
        },
        {
            path: 'charts',
            name: 'charts',
            component: ChartsView
        },
        {
            path: 'tables',
            name: 'tables',
            component: TablesView
        },
    ]

}