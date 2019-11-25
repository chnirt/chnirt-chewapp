import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart'
import LayersIcon from '@material-ui/icons/Layers'
import AssignmentIcon from '@material-ui/icons/Assignment'

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

import HelpIcon from '@material-ui/icons/Help'
import SettingsIcon from '@material-ui/icons/Settings'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'

import InfoIcon from '@material-ui/icons/Info'
import LockIcon from '@material-ui/icons/Lock'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

export const mainListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<DashboardIcon />
			</ListItemIcon>
			<ListItemText primary='Dashboard' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<PersonIcon />
			</ListItemIcon>
			<ListItemText primary='Accounts' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<TouchAppIcon />
			</ListItemIcon>
			<ListItemText primary='Requests' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<LocalOfferIcon />
			</ListItemIcon>
			<ListItemText primary='Offers' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<WifiIcon />
			</ListItemIcon>
			<ListItemText primary='Connections' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<AccountBalanceWalletIcon />
			</ListItemIcon>
			<ListItemText primary='Wallets' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<AttachMoneyIcon />
			</ListItemIcon>
			<ListItemText primary='Cash out' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<AnnouncementIcon />
			</ListItemIcon>
			<ListItemText primary='Announcements' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<ViewCarouselIcon />
			</ListItemIcon>
			<ListItemText primary='Banners' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<CodeIcon />
			</ListItemIcon>
			<ListItemText primary='Promo Codes' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<LayersIcon />
			</ListItemIcon>
			<ListItemText primary='Referral' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<HelpIcon />
			</ListItemIcon>
			<ListItemText primary='Help Center' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<SettingsIcon />
			</ListItemIcon>
			<ListItemText primary='Setting' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<SupervisorAccountIcon />
			</ListItemIcon>
			<ListItemText primary='Administrators' />
		</ListItem>
	</div>
)

export const secondaryListItems = (
	<div>
		{/* <ListSubheader inset>Saved reports</ListSubheader> */}
		<ListItem button>
			<ListItemIcon>
				<InfoIcon />
			</ListItemIcon>
			<ListItemText primary='My profile' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<LockIcon />
			</ListItemIcon>
			<ListItemText primary='Change password' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<ExitToAppIcon />
			</ListItemIcon>
			<ListItemText primary='Log out' />
		</ListItem>
	</div>
)
