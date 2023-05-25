import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PrimarySearchAppBar from './DashboardTopbar';
import Image from 'next/image';
import Link from 'next/link';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import TableChartIcon from '@mui/icons-material/TableChart';


const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='bg-darkblue h-full'>
      {/* <Toolbar /> */}
      <div className='h-16 flex items-center justify-center bg-white'>
        <Link href={'http://localhost:3000/admin/dashboard'}>
          <Image className='' src={'/maruti-suziki-logo.png'} width={'220'} height={'200'} alt='logo'></Image>
        </Link>
      </div>
      <Divider />
      <List className='p-0'>
        {[{ text: 'Dashboard', link: '/admin/dashboard' },].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <Link href={item.link} className='w-full'>
              <ListItemButton >
                <ListItemIcon className='text-white'>
                  {item.text === 'Dashboard' ? <DashboardIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <List className='p-0'>
        {[{ text: 'Profile', link: '/admin/profile' }, { text: 'Setting', link: '/admin/setting' }].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <Link href={item.link} className='w-full'>
              <ListItemButton>
                <ListItemIcon className='text-white'>
                  {item.text === 'Profile' ? <AccountCircleIcon /> : <ManageAccountsIcon />}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <List className='p-0' >
        {[{ text: 'cars listing', link: '/admin/cardata' }].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <Link href={item.link} className='w-full'>
              <ListItemButton>
                <ListItemIcon className='text-white'>
                  {item.text === 'data upload' ? <UploadFileIcon /> : <TableChartIcon />}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          // ml: { sm: `${drawerWidth}px` },
          backgroundColor: '#fff',
        }}
        className='text-slate-800'
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}

          >
            <MenuIcon />
          </IconButton>

          <PrimarySearchAppBar />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
  );
}
