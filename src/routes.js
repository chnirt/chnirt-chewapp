export const routes = [
	{
		label: 'Login',
		path: '/login',
		exact: true,
		component: 'login'
	},
	{
		label: 'App',
		path: '/',
		private: true,
		component: 'apps',
		routes: [
			{
				label: 'Dashboard',
				path: '/',
				exact: true,
				component: 'dashboard'
			},
			{
				label: 'Manage Menu',
				path: '/menu',
				icon: 'bars',
				component: 'menu'
			},
			{
				label: 'Order',
				path: '/order',
				icon: 'shopping-cart',
				component: 'order'
			},
			{
				label: 'Manage User',
				path: '/user',
				component: 'user'
			},
			{
				label: 'Report',
				path: '/report',
				component: 'report'
			},
			{
				label: 'Upload File',
				path: '/upload',
				component: 'upload'
			}
		]
	}
]

export const menuRoutes = [
	{
		id: 'manage-menu',
		label: 'Manage Menu',
		path: '/menu',
		icon: 'bars',
		code: 'MENU'
	},
	{
		id: 'manage-order',
		label: 'Order',
		path: '/order',
		icon: 'shopping-cart',
		code: 'ORDER'
	},
	{
		id: 'manage-user',
		label: 'Manage User',
		path: '/user',
		icon: 'user',
		code: 'USER'
	},
	{
		id: 'report',
		label: 'Report',
		path: '/report',
		icon: 'file-done',
		code: 'REPORT'
	},
	{
		id: 'upload',
		label: 'Upload File',
		path: '/upload',
		icon: 'upload',
		code: 'UPLOAD'
	}
]
