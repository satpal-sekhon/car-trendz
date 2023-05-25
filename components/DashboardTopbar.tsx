"use client"
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Image from 'next/image';
import { Button, Stack } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';




const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const [notification, setNotification] = React.useState<null | HTMLElement>(null);
    const opennotification = Boolean(notification);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setNotification(event.currentTarget);
    };
    const handleNotificationClose = () => {
        setNotification(null);
    };

    const [message, setMessage] = React.useState<null | HTMLElement>(null);
    const openmessage = Boolean(message);
    const handleOpenMessage = (event: React.MouseEvent<HTMLElement>) => {
        setMessage(event.currentTarget);
    };
    const handleCloseMessage = () => {
        setMessage(null);
    };





    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <AccountBoxIcon fontSize="small" />
                </ListItemIcon>
                Profile
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <ManageAccountsIcon fontSize="small" />
                </ListItemIcon>
                My account
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    );
    const notificationmenu = 'account-menu';
    const renderNotificationMenu = (
        <Menu
            anchorEl={notification}
            id={notificationmenu}
            open={opennotification}
            onClose={handleNotificationClose}
            onClick={handleNotificationClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    maxWidth: '500px',
                    width: '100%',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                    '@media screen and (max-width: 600px)': {
                        maxWidth: '340px',
                        width: '100%',
                    }
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <Stack direction={'row'} className='justify-end' >
                <Button size='small' variant='contained' className='bg-darkblue capitalize m-2 mt-0'>mark All read</Button>
            </Stack>
            <Box sx={{
                maxHeight: '500px',
                overflowY: 'scroll',

            }}>

                <MenuItem onClick={handleNotificationClose} className='c-border-bottom'>

                    <div className='relative mr-2 bg-gray-100'>
                        <Image className=' rounded ' src={'/avatar-1.jpg'} width={'40'} height={'40'} alt='notification image'></Image>
                        <div className='absolute -right-[2px] -bottom-[2px] w-2 h-2 bg-green-600 rounded-full'></div>
                        {/* <div className='absolute -right-[2px] -bottom-[2px] w-2 h-2 bg-red-600 rounded-full'></div> */}
                        {/* <div className='absolute -right-[2px] -bottom-[2px] w-2 h-2 bg-yellow-600 rounded-full'></div> */}
                    </div>
                    <Box>
                        <Typography variant='body1' className='text-sm whitespace-normal'>My accountadashdksajhd asdjhsa jkdhas kdaskjhdkjas hdjkah sd j khas jkdh aksj</Typography>
                        <Stack direction={'row'} className='justify-between'>
                            <Typography className='text-xs italic text-gray-500'>july 23 at 9:15am</Typography>
                            <Typography className='text-xs italic text-gray-700 hover:text-gray-900'>mark as read</Typography>
                        </Stack>
                    </Box>
                </MenuItem>
                <MenuItem onClick={handleNotificationClose} className='c-border-bottom'>
                    <Image className='mr-2 rounded' src={'/avatar-1.jpg'} width={'30'} height={'30'} alt='notification image'></Image>
                    <Box>
                        <Typography variant='body1' className='text-sm whitespace-normal'>My accountadashdksajhd asdjhsa jkdhas kdaskjhdkjas hdjkah sd j khas jkdh aksj</Typography>
                        <Typography className='text-xs italic text-gray-500'>july 23 at 9:15am</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={handleNotificationClose} className='c-border-bottom'>
                    <Image className='mr-2 rounded' src={'/avatar-1.jpg'} width={'30'} height={'30'} alt='notification image'></Image>
                    <Box>
                        <Typography variant='body1' className='text-sm whitespace-normal'>My accountadashdksajhd asdjhsa jkdhas kdaskjhdkjas hdjkah sd j khas jkdh aksj</Typography>
                        <Typography className='text-xs italic text-gray-500'>july 23 at 9:15am</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={handleNotificationClose} className='c-border-bottom'>
                    <Image className='mr-2 rounded' src={'/avatar-1.jpg'} width={'30'} height={'30'} alt='notification image'></Image>
                    <Box>
                        <Typography variant='body1' className='text-sm whitespace-normal'>My accountadashdksajhd asdjhsa jkdhas kdaskjhdkjas hdjkah sd j khas jkdh aksj</Typography>
                        <Typography className='text-xs italic text-gray-500'>july 23 at 9:15am</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={handleNotificationClose} className='c-border-bottom'>
                    <Image className='mr-2 rounded' src={'/avatar-1.jpg'} width={'30'} height={'30'} alt='notification image'></Image>
                    <Box>
                        <Typography variant='body1' className='text-sm whitespace-normal'>My accountadashdksajhd asdjhsa jkdhas kdaskjhdkjas hdjkah sd j khas jkdh aksj</Typography>
                        <Typography className='text-xs italic text-gray-500'>july 23 at 9:15am</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={handleNotificationClose} className='c-border-bottom'>
                    <Image className='mr-2 rounded' src={'/avatar-1.jpg'} width={'30'} height={'30'} alt='notification image'></Image>
                    <Box>
                        <Typography variant='body1' className='text-sm whitespace-normal'>My accountadashdksajhd asdjhsa jkdhas kdaskjhdkjas hdjkah sd j khas jkdh aksj</Typography>
                        <Typography className='text-xs italic text-gray-500'>july 23 at 9:15am</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={handleNotificationClose} className='c-border-bottom'>
                    <Image className='mr-2 rounded' src={'/avatar-1.jpg'} width={'30'} height={'30'} alt='notification image'></Image>
                    <Box>
                        <Typography variant='body1' className='text-sm whitespace-normal'>My accountadashdksajhd asdjhsa jkdhas kdaskjhdkjas hdjkah sd j khas jkdh aksj</Typography>
                        <Typography className='text-xs italic text-gray-500'>july 23 at 9:15am</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={handleNotificationClose} className='c-border-bottom'>
                    <Image className='mr-2 rounded' src={'/avatar-1.jpg'} width={'30'} height={'30'} alt='notification image'></Image>
                    <Box>
                        <Typography variant='body1' className='text-sm whitespace-normal'>My accountadashdksajhd asdjhsa jkdhas kdaskjhdkjas hdjkah sd j khas jkdh aksj</Typography>
                        <Typography className='text-xs italic text-gray-500'>july 23 at 9:15am</Typography>
                    </Box>
                </MenuItem>

            </Box>
        </Menu>
    );
    const messagemenu = 'message-menu';
    const rendermessageMenu = (
        <Menu
            anchorEl={message}
            id={messagemenu}
            open={openmessage}
            onClose={handleCloseMessage}
            onClick={handleCloseMessage}
            PaperProps={{
                elevation: 0,
                sx: {
                    maxWidth: '500px',
                    width: '100%',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                    '@media screen and (max-width: 600px)': {
                        maxWidth: '340px',
                        width: '100%',
                    }
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <Stack direction={'row'} className='justify-end' >
                <Button size='small' variant='contained' className='bg-darkblue capitalize m-2 mt-0'>mark All read</Button>
            </Stack>
            <Box sx={{
                maxHeight: '500px',
                overflowY: 'scroll',
            }}>

                <MenuItem onClick={handleCloseMessage} className='c-border-bottom bg-gray-100'>
                    <div className='relative mr-2'>
                        <Image className=' rounded ' src={'/avatar-1.jpg'} width={'40'} height={'40'} alt='notification image'></Image>
                        <div className='absolute -right-[2px] -bottom-[2px] w-2 h-2 bg-green-600 rounded-full'></div>
                        {/* <div className='absolute -right-[2px] -bottom-[2px] w-2 h-2 bg-red-600 rounded-full'></div> */}
                        {/* <div className='absolute -right-[2px] -bottom-[2px] w-2 h-2 bg-yellow-600 rounded-full'></div> */}
                    </div>
                    <Box>
                        <Typography variant='body1' className='text-sm whitespace-normal'>My accountadashdksajhd asdjhsa jkdhas kdaskjhdkjas hdjkah sd j khas jkdh aksj</Typography>
                        <Stack direction={'row'} className='justify-between'>
                            <Typography className='text-xs italic text-gray-500'>july 23 at 9:15am</Typography>
                            <Typography className='text-xs italic text-gray-700 hover:text-gray-900'>mark as read</Typography>
                        </Stack>
                    </Box>
                </MenuItem>
                <MenuItem onClick={handleCloseMessage} className='c-border-bottom'>
                    <CheckCircleOutlineIcon className='mr-2 text-green-600' />
                    <Box>
                        <Typography variant='body1' className='text-sm whitespace-normal'>My accountadashdksajhd asdjhsa jkdhas kdaskjhdkjas hdjkah sd j khas jkdh aksj</Typography>
                        <Typography className='text-xs italic text-gray-500'>july 23 at 9:15am</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={handleCloseMessage} className='c-border-bottom'>
                    <WarningAmberIcon className='mr-2 text-yellow-600' />
                    <Box>
                        <Typography variant='body1' className='text-sm whitespace-normal'>My accountadashdksajhd asdjhsa jkdhas kdaskjhdkjas hdjkah sd j khas jkdh aksj</Typography>
                        <Typography className='text-xs italic text-gray-500'>july 23 at 9:15am</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={handleCloseMessage} className='c-border-bottom'>
                    <HighlightOffIcon className='mr-2 text-red-600' />
                    <Box>
                        <Typography variant='body1' className='text-sm whitespace-normal'>My accountadashdksajhd asdjhsa jkdhas kdaskjhdkjas hdjkah sd j khas jkdh aksj</Typography>
                        <Typography className='text-xs italic text-gray-500'>july 23 at 9:15am</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={handleCloseMessage} className='c-border-bottom'>
                    <Image className='mr-2 rounded' src={'/avatar-1.jpg'} width={'30'} height={'30'} alt='notification image'></Image>
                    <Box>
                        <Typography variant='body1' className='text-sm whitespace-normal'>My accountadashdksajhd asdjhsa jkdhas kdaskjhdkjas hdjkah sd j khas jkdh aksj</Typography>
                        <Typography className='text-xs italic text-gray-500'>july 23 at 9:15am</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={handleCloseMessage} className='c-border-bottom'>
                    <Image className='mr-2 rounded' src={'/avatar-1.jpg'} width={'30'} height={'30'} alt='notification image'></Image>
                    <Box>
                        <Typography variant='body1' className='text-sm whitespace-normal'>My accountadashdksajhd asdjhsa jkdhas kdaskjhdkjas hdjkah sd j khas jkdh aksj</Typography>
                        <Typography className='text-xs italic text-gray-500'>july 23 at 9:15am</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={handleCloseMessage} className='c-border-bottom'>
                    <Image className='mr-2 rounded' src={'/avatar-1.jpg'} width={'30'} height={'30'} alt='notification image'></Image>
                    <Box>
                        <Typography variant='body1' className='text-sm whitespace-normal'>My accountadashdksajhd asdjhsa jkdhas kdaskjhdkjas hdjkah sd j khas jkdh aksj</Typography>
                        <Typography className='text-xs italic text-gray-500'>july 23 at 9:15am</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={handleCloseMessage} className='c-border-bottom'>
                    <Image className='mr-2 rounded' src={'/avatar-1.jpg'} width={'30'} height={'30'} alt='notification image'></Image>
                    <Box>
                        <Typography variant='body1' className='text-sm whitespace-normal'>My accountadashdksajhd asdjhsa jkdhas kdaskjhdkjas hdjkah sd j khas jkdh aksj</Typography>
                        <Typography className='text-xs italic text-gray-500'>july 23 at 9:15am</Typography>
                    </Box>
                </MenuItem>

            </Box>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleOpenMessage}>
                <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                    aria-controls="message-menu"
                    aria-haspopup="true"
                >
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem onClick={handleClick}>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                    aria-controls="account-menu"
                    aria-haspopup="true"
                 aria-expanded={opennotification ? 'true' : undefined}
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Toolbar className='p-0'>
                <Search className='bg-gray-200 hover:bg-gray-300' >
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        className='cursor-pointer-wrapper'
                    />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '10px',alignItems:'center' }}>
                    <IconButton
                        onClick={handleOpenMessage}
                        size="large"
                        aria-label="show 4 new mails"
                        color="inherit"
                        aria-controls={openmessage ? 'message-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openmessage ? 'true' : undefined}
                        className='max-h-[48px]'
                    >
                        <Badge badgeContent={4} color="error">
                            <MailOutlineIcon />
                        </Badge>

                    </IconButton>


                    <IconButton
                        onClick={handleClick}
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                        aria-controls={opennotification ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={opennotification ? 'true' : undefined}
                        className='max-h-[48px]'
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsNoneIcon />
                        </Badge>
                    </IconButton>

                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                        className='rounded-none max-h-[48px]'
                    >
                        <AccountCircleOutlinedIcon />
                        <Box className="flex items-start justify-center flex-col ml-2">
                            <Typography variant='body2' className='font-semibold'>Amit Saini</Typography>
                            <Typography variant='caption'>Founder</Typography>
                        </Box>
                    </IconButton>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>
                </Box>
            </Toolbar>
            {rendermessageMenu}
            {renderNotificationMenu}
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}