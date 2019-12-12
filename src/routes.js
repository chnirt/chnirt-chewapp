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
import LanguageIcon from '@material-ui/icons/Language'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import CropFreeIcon from '@material-ui/icons/CropFree'
import ImageIcon from '@material-ui/icons/Image'
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
				label: 'Profile',
				path: '/profile',
				component: 'profile'
			},
			{
				label: 'Dashboard',
				path: '/dashboard',
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
				label: 'Global Setting',
				path: '/globalsetting',
				component: 'globalsetting'
			},
			{
				label: 'Bank',
				path: '/bank',
				component: 'bank'
			},
			{
				label: 'Referral Setting',
				path: '/referralsetting',
				component: 'referralsetting'
			},
			{
				label: 'Stock Images',
				path: '/stockimages',
				component: 'stockimages'
			},
			{
				label: 'Administrators',
				path: '/administrators',
				component: 'administrators'
			}
		]
	}
]

export const pages = [
	{
		title: 'Dashboard',
		href: '/dashboard',
		icon: <DashboardIcon />
	},
	{
		title: 'Accounts',
		href: '/accounts',
		icon: <PersonIcon />
	},
	{
		title: 'Requests',
		href: '/requests',
		icon: <TouchAppIcon />
	},
	{
		title: 'Offers',
		href: '/offers',
		icon: <LocalOfferIcon />
	},
	{
		title: 'Connections',
		href: '/connections',
		icon: <WifiIcon />
	},
	{
		title: 'Wallets',
		href: '/wallets',
		icon: <AccountBalanceWalletIcon />
	},
	{
		title: 'Cash out',
		href: '/cashout',
		icon: <AttachMoneyIcon />
	},
	{
		title: 'Announcements',
		href: '/announcements',
		icon: <AnnouncementIcon />
	},
	{
		title: 'Banners',
		href: '/banners',
		icon: <ViewCarouselIcon />
	},
	{
		title: 'Promo Codes',
		href: '/promocodes',
		icon: <CodeIcon />
	},
	{
		title: 'Referral',
		href: '/referral',
		icon: <NotesIcon />
	},
	{
		title: 'Help Center',
		href: '/helpcenter',
		icon: <HelpIcon />
	},
	{
		title: 'Setting',
		href: '/setting',
		icon: <SettingsIcon />,
		pages: [
			{
				title: 'Global Setting',
				href: '/globalsetting',
				icon: <LanguageIcon />
			},
			{
				title: 'Bank',
				href: '/bank',
				icon: <AccountBalanceIcon />
			},
			{
				title: 'Referral Setting',
				href: '/referralsetting',
				icon: <CropFreeIcon />
			},
			{
				title: 'Stock Images',
				href: '/stockimages',
				icon: <ImageIcon />
			}
		]
	},
	{
		title: 'Administrators',
		href: '/administrators',
		icon: <SupervisorAccountIcon />
	}
]
