import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Inventory from '../components/inventory'
import Accounts from '../components/accounts'
import Staff from '../components/staff'
import Contact from '../components/contact'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/inventory',
			name: 'Inventory',
			component: Inventory
		},
		{
			path: '/accounts',
			name: 'Accounts',
			component: Accounts
		},
		{
			path: '/staff',
			name: 'Staff',
			component: Staff
		},
		{
			path: '/contact',
			name: 'Contact',
			component: Contact
		}
	]
})