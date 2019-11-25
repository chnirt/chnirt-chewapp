import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PersonIcon from '@material-ui/icons/Person'
import TouchAppIcon from '@material-ui/icons/TouchApp'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import WifiIcon from '@material-ui/icons/Wifi'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import AnnouncementIcon from '@material-ui/icons/Announcement'
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel'
import CodeIcon from '@material-ui/icons/Code'
import NotesIcon from '@material-ui/icons/Notes'
import HelpIcon from '@material-ui/icons/Help'
import SettingsIcon from '@material-ui/icons/Settings'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'

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
				label: 'Accounts',
				path: '/accounts',
				component: 'accounts'
			},
			{
				label: 'Requests',
				path: '/requests',
				component: 'requests'
			},
			{
				label: 'Offers',
				path: '/offers',
				component: 'offers'
			},
			{
				label: 'Connections',
				path: '/connections',
				component: 'connections'
			},
			{
				label: 'Wallets',
				path: '/wallets',
				component: 'wallets'
			},
			,
			{
				label: 'Cash out',
				path: '/cashout',
				component: 'cashout'
			},
			{
				label: 'Announcements',
				path: '/announcements',
				component: 'announcements'
			},
			{
				label: 'Banners',
				path: '/banners',
				component: 'banners'
			},
			{
				label: 'Promo Codes',
				path: '/promocodes',
				component: 'promocodes'
			},
			{
				label: 'Referral',
				path: '/referral',
				component: 'referral'
			},
			{
				label: 'Help Center',
				path: '/helpcenter',
				component: 'helpcenter'
			},
			{
				label: 'Setting',
				path: '/setting',
				component: 'setting'
			},
			{
				label: 'Administrators',
				path: '/administrators',
				component: 'administrators'
			}
		]
	}
]

export const menuRoutes = [
	{
		label: 'Dashboard',
		path: '/',
		icon: <DashboardIcon />
	},
	{
		label: 'Accounts',
		path: '/accounts',
		icon: <PersonIcon />
	},
	{
		label: 'Requests',
		path: '/requests',
		icon: <TouchAppIcon />
	},
	{
		label: 'Offers',
		path: '/offers',
		icon: <LocalOfferIcon />
	},
	{
		label: 'Connections',
		path: '/connections',
		icon: <WifiIcon />
	},
	{
		label: 'Wallets',
		path: '/wallets',
		icon: <AccountBalanceWalletIcon />
	},
	{
		label: 'Cash out',
		path: '/cashout',
		icon: <AttachMoneyIcon />
	},
	{
		label: 'Announcements',
		path: '/announcements',
		icon: <AnnouncementIcon />
	},
	{
		label: 'Banners',
		path: '/banners',
		icon: <ViewCarouselIcon />
	},
	{
		label: 'Promo Codes',
		path: '/promocodes',
		icon: <CodeIcon />
	},
	{
		label: 'Referral',
		path: '/referral',
		icon: <NotesIcon />
	},
	{
		label: 'Help Center',
		path: '/helpcenter',
		icon: <HelpIcon />
	},
	{
		label: 'Setting',
		path: '/setting',
		icon: <SettingsIcon />
	},
	{
		label: 'Administrators',
		path: '/administrators',
		icon: <SupervisorAccountIcon />
	}
]
