"use client"
import ResponsiveDrawer from '@/components/DashboardSiderbar'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Slider from '@mui/material/Slider';
import PersonIcon from '@mui/icons-material/Person';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import PinterestIcon from '@mui/icons-material/Pinterest';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ScrollToTop from '@/components/ScrollToTop'
import Footer from '@/components/dasboardFooter'




interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ py: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

function tabpannelindex(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Page() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <ResponsiveDrawer />
            <div className='content-wrapper c-dashboard-bg-color'>
                <div className='relative '>
                    <div className='absolute top-0 h-[320px] c-bg-color-profile'>
                        <Image className='h-full' src={'/profile-bg.jpg'} width={'1500'} height={'320'} alt='background image'></Image>
                    </div>
                </div>
                <div className='p-4'>
                    <Grid container >
                        <Grid item lg={1} className='z-10'>
                            <Box className='w-[100px] rounded-full border-4 border-white overflow-hidden'>
                                <Image className='h-full w-full' src={'/avatar-1.jpg'} width={'200'} height={'200'} alt='background image'></Image>
                            </Box>
                        </Grid>
                        <Grid item lg={9} className='z-10 pl-4'>
                            <Typography variant='h6' className='text-white'>Anna Adame</Typography>
                            <Typography className='text-gray-300 mb-4'>Owner & Founder</Typography>
                            <Box className='flex items-center justify-start flex-wrap gap-2'>
                                <Typography className='text-gray-300' variant='body2'> <PersonPinCircleOutlinedIcon />California, United States</Typography>
                                <Typography className='text-gray-300' variant='body2'><BusinessOutlinedIcon /> Themesbrand</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={2} className='z-10'>
                            <Stack direction={'row'} className='justify-around' >
                                <Box className='flex items-center justify-center flex-col'>
                                    <Typography variant='h6' className='text-white'>24.5k</Typography>
                                    <Typography className='text-gray-300'>Followers</Typography>
                                </Box>
                                <Box className='flex items-center justify-center flex-col'>
                                    <Typography variant='h6' className='text-white'>1.3k</Typography>
                                    <Typography className='text-gray-300'>Following</Typography>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid xs={12} item className='z-10 my-4'>
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab className='text-white' label="Overview" {...tabpannelindex(0)} />
                                        <Tab className='text-white' label="Projects" {...tabpannelindex(1)} />
                                        {/* <Tab className='text-white' label="Projects" {...tabpannelindex(2)} /> */}
                                    </Tabs>
                                </Box>
                                <TabPanel value={value} index={0}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} lg={3}>
                                            <Card className='mb-4'>
                                                <CardContent>
                                                    <Typography className='font-semibold mb-6' gutterBottom>
                                                        Complete Your Profile
                                                    </Typography>
                                                    <Slider
                                                        aria-label="Always visible"
                                                        defaultValue={80}
                                                        step={10}
                                                        valueLabelDisplay="on"
                                                    />
                                                </CardContent>
                                            </Card>
                                            <Card className='mb-4'>
                                                <CardContent>
                                                    <Typography className='font-semibold mb-6' gutterBottom>
                                                        Info
                                                    </Typography>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={4} className='mb-4'>
                                                            <Typography className='font-semibold text-sm'> Full Name :</Typography>
                                                        </Grid>
                                                        <Grid item xs={8} className='mb-4'>
                                                            <Typography className='text-gray-400 text-sm'>Anna Adame</Typography>
                                                        </Grid>
                                                        <Grid item xs={4} className='mb-4'>
                                                            <Typography className='font-semibold text-sm'>Mobile :</Typography>
                                                        </Grid>
                                                        <Grid item xs={8} className='mb-4'>
                                                            <Typography className='text-gray-400 text-sm'>+91 9991263789</Typography>
                                                        </Grid>
                                                        <Grid item xs={4} className='mb-4'>
                                                            <Typography className='font-semibold text-sm'>E-mail :</Typography>
                                                        </Grid>
                                                        <Grid item xs={8} className='mb-4'>
                                                            <Typography className='text-gray-400 text-sm'>daveadame@velzon.com</Typography>
                                                        </Grid>
                                                        <Grid item xs={4} className='mb-4'>
                                                            <Typography className='font-semibold text-sm'>Location :</Typography>
                                                        </Grid>
                                                        <Grid item xs={8} className='mb-4'>
                                                            <Typography className='text-gray-400 text-sm'>California, United States</Typography>
                                                        </Grid>
                                                        <Grid item xs={4} className='mb-4'>
                                                            <Typography className='font-semibold text-sm'>Joining Date</Typography>
                                                        </Grid>
                                                        <Grid item xs={8} className='mb-4'>
                                                            <Typography className='text-gray-400 text-sm'>24 Nov 2021</Typography>
                                                        </Grid>

                                                    </Grid>
                                                </CardContent>

                                            </Card>

                                            <Card className='mb-4'>
                                                <CardContent>
                                                    <Typography className='font-semibold mb-3' gutterBottom>
                                                        Portfolio
                                                    </Typography>
                                                    <Stack direction={'row'}>
                                                        <Box className='w-8 h-8 m-1 bg-black rounded-full flex items-center justify-center'>
                                                            <GitHubIcon className='text-white text-sm' />
                                                        </Box>
                                                        <Box className='w-8 h-8 m-1 bg-blue-900 rounded-full flex items-center justify-center'>
                                                            <LanguageIcon className='text-white text-sm' />
                                                        </Box>
                                                        <Box className='w-8 h-8 m-1 bg-green-600 rounded-full flex items-center justify-center'>
                                                            <SportsBasketballIcon className='text-white text-sm' />
                                                        </Box>
                                                        <Box className='w-8 h-8 m-1 bg-red-400 rounded-full flex items-center justify-center'>
                                                            <PinterestIcon className='text-white text-sm' />
                                                        </Box>
                                                    </Stack>
                                                </CardContent>
                                            </Card>
                                            <Card className='mb-4'>
                                                <CardContent>
                                                    <Typography className='font-semibold mb-3' gutterBottom>
                                                        Skills
                                                    </Typography>
                                                    <Stack direction={'row'} className='flex-wrap gap-2'>
                                                        <Typography className='text-sm bg-slate-200 px-2 font-medium text-blue-900 rounded-sm'>Photoshop</Typography>
                                                        <Typography className='text-sm bg-slate-200 px-2 font-medium text-blue-900 rounded-sm'>illustrator</Typography>
                                                        <Typography className='text-sm bg-slate-200 px-2 font-medium text-blue-900 rounded-sm'>HTML</Typography>
                                                        <Typography className='text-sm bg-slate-200 px-2 font-medium text-blue-900 rounded-sm'>CSS</Typography>
                                                        <Typography className='text-sm bg-slate-200 px-2 font-medium text-blue-900 rounded-sm'>Javascript</Typography>
                                                        <Typography className='text-sm bg-slate-200 px-2 font-medium text-blue-900 rounded-sm'>Php</Typography>
                                                        <Typography className='text-sm bg-slate-200 px-2 font-medium text-blue-900 rounded-sm'>Python</Typography>
                                                    </Stack>
                                                </CardContent>
                                            </Card>

                                            <Card className='mb-4'>
                                                <CardContent>
                                                    <Stack direction={'row'} className='justify-between'>
                                                        <Typography className='font-semibold mb-3' gutterBottom>
                                                            Suggestions
                                                        </Typography>
                                                        <Button
                                                            id="basic-button"
                                                            aria-controls={open ? 'basic-menu' : undefined}
                                                            aria-haspopup="true"
                                                            aria-expanded={open ? 'true' : undefined}
                                                            onClick={handleClick}
                                                        >
                                                            <MoreVertIcon />
                                                        </Button>
                                                        <Menu
                                                            id="basic-menu"
                                                            anchorEl={anchorEl}
                                                            open={open}
                                                            onClose={handleClose}
                                                            MenuListProps={{
                                                                'aria-labelledby': 'basic-button',
                                                            }}
                                                        >
                                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                                                        </Menu>
                                                    </Stack>
                                                    <Stack direction={'row'} className='w-full items-center my-4'>
                                                        <Image className='rounded-full max-h-[32px] mr-2' src='/avatar-3.jpg' width={'32'} height={'32'} alt='avatar-5.jpg'></Image>
                                                        <Box className='flex-grow'>
                                                            <Typography component={'h5'} className='text-md font-medium' >Esther James</Typography>
                                                            <Typography className='text-sm'>Frontend Developer</Typography>

                                                        </Box>
                                                        <Button sx={{ border: '1px solid green', minWidth: '30px' }} className='p-1 text-green-400 text-sm border-green-400 hover:bg-green-600 hover:text-white '><PersonAddAltOutlinedIcon /></Button>

                                                    </Stack>
                                                    <Stack direction={'row'} className='w-full items-center my-4'>
                                                        <Image className='rounded-full max-h-[32px] mr-2' src='/avatar-4.jpg' width={'32'} height={'32'} alt='avatar-5.jpg'></Image>
                                                        <Box className='flex-grow'>
                                                            <Typography component={'h5'} className='text-md font-medium' >Esther James</Typography>
                                                            <Typography className='text-sm'>Frontend Developer</Typography>

                                                        </Box>
                                                        <Button sx={{ border: '1px solid green', minWidth: '30px' }} className='p-1 text-green-400 text-sm border-green-400 hover:bg-green-600 hover:text-white '><PersonAddAltOutlinedIcon /></Button>

                                                    </Stack>
                                                    <Stack direction={'row'} className='w-full items-center my-4'>
                                                        <Image className='rounded-full max-h-[32px] mr-2' src='/avatar-5.jpg' width={'32'} height={'32'} alt='avatar-5.jpg'></Image>
                                                        <Box className='flex-grow'>
                                                            <Typography component={'h5'} className='text-md font-medium' >Esther James</Typography>
                                                            <Typography className='text-sm'>Frontend Developer</Typography>

                                                        </Box>
                                                        <Button sx={{ border: '1px solid green', minWidth: '30px' }} className='p-1 text-green-400 text-sm border-green-400 hover:bg-green-600 hover:text-white '><PersonAddAltOutlinedIcon /></Button>

                                                    </Stack>
                                                </CardContent>
                                            </Card>
                                            <Card className='mb-4'>
                                                <CardContent>
                                                    <Stack direction={'row'} className='justify-between'>
                                                        <Typography className='font-semibold mb-3' gutterBottom>
                                                            Popular Posts
                                                        </Typography>
                                                        <Button
                                                            id="basic-button"
                                                            aria-controls={open ? 'basic-menu' : undefined}
                                                            aria-haspopup="true"
                                                            aria-expanded={open ? 'true' : undefined}
                                                            onClick={handleClick}
                                                        >
                                                            <MoreVertIcon />
                                                        </Button>
                                                        <Menu
                                                            id="basic-menu"
                                                            anchorEl={anchorEl}
                                                            open={open}
                                                            onClose={handleClose}
                                                            MenuListProps={{
                                                                'aria-labelledby': 'basic-button',
                                                            }}
                                                        >
                                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                                                        </Menu>
                                                    </Stack>
                                                    <Stack direction={'row'} className='w-full items-center my-4'>
                                                        <Image className='mr-2' src='/img-4.jpg' width={'80'} height={'60'} alt='avatar-5.jpg'></Image>
                                                        <Box className='flex-grow overflow-hidden '>
                                                            <Typography component={'h5'} className='text-md font-medium whitespace-nowrap  text-md overflow-hidden text-ellipsis'>Design your apps in your own way</Typography>
                                                            <Typography className='text-sm'>15 Dec 2021</Typography>
                                                        </Box>
                                                    </Stack>
                                                    <Stack direction={'row'} className='w-full items-center my-4'>
                                                        <Image className='mr-2' src='/img-5.jpg' width={'80'} height={'60'} alt='avatar-5.jpg'></Image>
                                                        <Box className='flex-grow overflow-hidden'>
                                                            <Typography component={'h5'} className='text-md font-medium whitespace-nowrap overflow-hidden text-ellipsis text-md'>Smartest Applications for Business</Typography>
                                                            <Typography className='text-sm'>15 Dec 2021</Typography>
                                                        </Box>
                                                    </Stack>
                                                    <Stack direction={'row'} className='w-full items-center my-4'>
                                                        <Image className='mr-2' src='/img-6.jpg' width={'80'} height={'60'} alt='avatar-5.jpg'></Image>
                                                        <Box className='flex-grow overflow-hidden'>
                                                            <Typography component={'h5'} className='text-md font-medium whitespace-nowrap text-md overflow-hidden text-ellipsis'>How to get creative in your work</Typography>
                                                            <Typography className='text-sm'>15 Dec 2021</Typography>
                                                        </Box>
                                                    </Stack>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                        <Grid item xs={12} lg={9}>
                                            <Card className='mb-4'>
                                                <CardContent>
                                                    <Typography className='font-semibold mb-4' gutterBottom>
                                                        About
                                                    </Typography>
                                                    <Typography className='text-sm text-gray-500 font-light mb-4' gutterBottom>
                                                        Hi Im Anna Adame, It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family.
                                                    </Typography>
                                                    <Typography className='text-sm text-gray-500 font-light mb-4' gutterBottom>
                                                        You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites. This may be the most commonly encountered tip I received from the designers I spoke with. They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard.
                                                    </Typography>
                                                    <Grid container className='mt-8'>
                                                        <Grid item xs={12} lg={4}>
                                                            <Stack direction={'row'} >
                                                                <Box className='w-8 h-8 mx-1 mr-4 bg-blue-100 rounded-full flex items-center justify-center'>
                                                                    <PersonIcon className='text-blue-900' />
                                                                </Box>
                                                                <Box>
                                                                    <Typography className='text-sm text-gray-500'>Designation :</Typography>
                                                                    <Typography className='text-sm'>Lead Designer / Developer</Typography>
                                                                </Box>
                                                            </Stack>
                                                        </Grid>
                                                        <Grid item xs={12} lg={4}>
                                                            <Stack direction={'row'}>
                                                                <Box className='w-8 h-8 m-1 mr-4 bg-blue-100 rounded-full flex items-center justify-center'>
                                                                    <PersonIcon className='text-blue-900' />
                                                                </Box>
                                                                <Box>
                                                                    <Typography className='text-sm text-gray-500'>Designation :</Typography>
                                                                    <Typography className='text-sm'>Lead Designer / Developer</Typography>
                                                                </Box>
                                                            </Stack>
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                            <Card className='mb-4'>
                                                <CardContent>
                                                    <Typography className='font-semibold mb-4' gutterBottom>
                                                        Project
                                                    </Typography>
                                                    <Grid container spacing={2} className='mt-4 '>
                                                        <Grid item xs={12} lg={4} className='rounded'>
                                                            <Box sx={{ border: '1px solid #ccc' }} className='rounded'>
                                                                <Box className='border-l-4 border-l-red-400 p-4 rounded'>
                                                                    <Stack direction={'row'} className='items-center my-4'>
                                                                        <Box className='flex-grow overflow-hidden'>
                                                                            <Typography component={'h5'} className='text-md font-medium whitespace-nowrap text-md overflow-hidden text-ellipsis'>ABC Project Customization</Typography>
                                                                            <Typography className='text-sm text-gray-400'> Last Update : <Box component={'span'} className='text-gray-600'>4hrs ago</Box></Typography>
                                                                        </Box>
                                                                        <Typography variant='caption' className='m-2 p-1 bg-yellow-100 text-yellow-400 rounded'>Inprogress</Typography>
                                                                    </Stack>
                                                                    <Stack direction={'row'} className='items-center my-4'>
                                                                        <Typography className='text-sm text-gray-400'>Member :</Typography>
                                                                        <AvatarGroup total={8}>
                                                                            <Avatar alt="Remy Sharp" src="/avatar-1.jpg" />
                                                                            <Avatar alt="Travis Howard" src="/avatar-4.jpg" />
                                                                            <Avatar alt="Agnes Walker" src="/avatar-3.jpg" />
                                                                        </AvatarGroup>
                                                                    </Stack>
                                                                </Box>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12} lg={4} className='rounded'>
                                                            <Box sx={{ border: '1px solid #ccc' }} className='rounded'>
                                                                <Box className='border-l-4 border-l-red-400 p-4 rounded'>
                                                                    <Stack direction={'row'} className='items-center my-4'>
                                                                        <Box className='flex-grow overflow-hidden'>
                                                                            <Typography component={'h5'} className='text-md font-medium whitespace-nowrap text-md overflow-hidden text-ellipsis'>ABC Project Customization</Typography>
                                                                            <Typography className='text-sm text-gray-400'> Last Update : <Box component={'span'} className='text-gray-600'>4hrs ago</Box></Typography>
                                                                        </Box>
                                                                        <Typography variant='caption' className='m-2 p-1 bg-yellow-100 text-yellow-400 rounded'>Inprogress</Typography>
                                                                    </Stack>
                                                                    <Stack direction={'row'} className='items-center my-4'>
                                                                        <Typography className='text-sm text-gray-400'>Member :</Typography>
                                                                        <AvatarGroup total={8}>
                                                                            <Avatar alt="Remy Sharp" src="/avatar-1.jpg" />
                                                                            <Avatar alt="Travis Howard" src="/avatar-4.jpg" />
                                                                            <Avatar alt="Agnes Walker" src="/avatar-3.jpg" />
                                                                        </AvatarGroup>
                                                                    </Stack>
                                                                </Box>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12} lg={4} className='rounded'>
                                                            <Box sx={{ border: '1px solid #ccc' }} className='rounded'>
                                                                <Box className='border-l-4 border-l-red-400 p-4 rounded'>
                                                                    <Stack direction={'row'} className='items-center my-4'>
                                                                        <Box className='flex-grow overflow-hidden'>
                                                                            <Typography component={'h5'} className='text-md font-medium whitespace-nowrap text-md overflow-hidden text-ellipsis'>ABC Project Customization</Typography>
                                                                            <Typography className='text-sm text-gray-400'> Last Update : <Box component={'span'} className='text-gray-600'>4hrs ago</Box></Typography>
                                                                        </Box>
                                                                        <Typography variant='caption' className='m-2 p-1 bg-yellow-100 text-yellow-400 rounded'>Inprogress</Typography>
                                                                    </Stack>
                                                                    <Stack direction={'row'} className='items-center my-4'>
                                                                        <Typography className='text-sm text-gray-400'>Member :</Typography>
                                                                        <AvatarGroup total={8}>
                                                                            <Avatar alt="Remy Sharp" src="/avatar-1.jpg" />
                                                                            <Avatar alt="Travis Howard" src="/avatar-4.jpg" />
                                                                            <Avatar alt="Agnes Walker" src="/avatar-3.jpg" />
                                                                        </AvatarGroup>
                                                                    </Stack>
                                                                </Box>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </TabPanel>
                                <TabPanel value={value} index={1} >
                                    <Box className='bg-white px-4 pb-4 rounded-md'>
                                    <Grid container spacing={2} >
                                        <Grid item xs={12} sm={6}md={4} xl={3} className='rounded'>
                                            <Box sx={{ border: '1px solid #ccc' }} className='rounded'>
                                                <Box className='border-l-4 border-l-red-400 p-4 rounded'>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Box className='flex-grow overflow-hidden'>
                                                            <Typography component={'h5'} className='text-md font-medium whitespace-nowrap text-md overflow-hidden text-ellipsis'>ABC Project Customization</Typography>
                                                            <Typography className='text-sm text-gray-400'> Last Update : <Box component={'span'} className='text-gray-600'>4hrs ago</Box></Typography>
                                                        </Box>
                                                        <Typography variant='caption' className='m-2 p-1 bg-yellow-100 text-yellow-400 rounded'>Inprogress</Typography>
                                                    </Stack>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Typography className='text-sm text-gray-400'>Member :</Typography>
                                                        <AvatarGroup total={8}>
                                                            <Avatar alt="Remy Sharp" src="/avatar-1.jpg" />
                                                            <Avatar alt="Travis Howard" src="/avatar-4.jpg" />
                                                            <Avatar alt="Agnes Walker" src="/avatar-3.jpg" />
                                                        </AvatarGroup>
                                                    </Stack>
                                                </Box>
                                            </Box>


                                        </Grid>
                                        <Grid item xs={12} sm={6}md={4} xl={3} className='rounded'>
                                            <Box sx={{ border: '1px solid #ccc' }} className='rounded'>
                                                <Box className='border-l-4 border-l-red-400 p-4 rounded'>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Box className='flex-grow overflow-hidden'>
                                                            <Typography component={'h5'} className='text-md font-medium whitespace-nowrap text-md overflow-hidden text-ellipsis'>ABC Project Customization</Typography>
                                                            <Typography className='text-sm text-gray-400'> Last Update : <Box component={'span'} className='text-gray-600'>4hrs ago</Box></Typography>
                                                        </Box>
                                                        <Typography variant='caption' className='m-2 p-1 bg-yellow-100 text-yellow-400 rounded'>Inprogress</Typography>
                                                    </Stack>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Typography className='text-sm text-gray-400'>Member :</Typography>
                                                        <AvatarGroup total={8}>
                                                            <Avatar alt="Remy Sharp" src="/avatar-1.jpg" />
                                                            <Avatar alt="Travis Howard" src="/avatar-4.jpg" />
                                                            <Avatar alt="Agnes Walker" src="/avatar-3.jpg" />
                                                        </AvatarGroup>
                                                    </Stack>
                                                </Box>
                                            </Box>


                                        </Grid>
                                        <Grid item xs={12} sm={6}md={4} xl={3} className='rounded'>
                                            <Box sx={{ border: '1px solid #ccc' }} className='rounded'>
                                                <Box className='border-l-4 border-l-red-400 p-4 rounded'>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Box className='flex-grow overflow-hidden'>
                                                            <Typography component={'h5'} className='text-md font-medium whitespace-nowrap text-md overflow-hidden text-ellipsis'>ABC Project Customization</Typography>
                                                            <Typography className='text-sm text-gray-400'> Last Update : <Box component={'span'} className='text-gray-600'>4hrs ago</Box></Typography>
                                                        </Box>
                                                        <Typography variant='caption' className='m-2 p-1 bg-yellow-100 text-yellow-400 rounded'>Inprogress</Typography>
                                                    </Stack>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Typography className='text-sm text-gray-400'>Member :</Typography>
                                                        <AvatarGroup total={8}>
                                                            <Avatar alt="Remy Sharp" src="/avatar-1.jpg" />
                                                            <Avatar alt="Travis Howard" src="/avatar-4.jpg" />
                                                            <Avatar alt="Agnes Walker" src="/avatar-3.jpg" />
                                                        </AvatarGroup>
                                                    </Stack>
                                                </Box>
                                            </Box>


                                        </Grid>
                                        <Grid item xs={12} sm={6}md={4} xl={3} className='rounded'>
                                            <Box sx={{ border: '1px solid #ccc' }} className='rounded'>
                                                <Box className='border-l-4 border-l-red-400 p-4 rounded'>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Box className='flex-grow overflow-hidden'>
                                                            <Typography component={'h5'} className='text-md font-medium whitespace-nowrap text-md overflow-hidden text-ellipsis'>ABC Project Customization</Typography>
                                                            <Typography className='text-sm text-gray-400'> Last Update : <Box component={'span'} className='text-gray-600'>4hrs ago</Box></Typography>
                                                        </Box>
                                                        <Typography variant='caption' className='m-2 p-1 bg-yellow-100 text-yellow-400 rounded'>Inprogress</Typography>
                                                    </Stack>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Typography className='text-sm text-gray-400'>Member :</Typography>
                                                        <AvatarGroup total={8}>
                                                            <Avatar alt="Remy Sharp" src="/avatar-1.jpg" />
                                                            <Avatar alt="Travis Howard" src="/avatar-4.jpg" />
                                                            <Avatar alt="Agnes Walker" src="/avatar-3.jpg" />
                                                        </AvatarGroup>
                                                    </Stack>
                                                </Box>
                                            </Box>


                                        </Grid>
                                        <Grid item xs={12} sm={6}md={4} xl={3} className='rounded'>
                                            <Box sx={{ border: '1px solid #ccc' }} className='rounded'>
                                                <Box className='border-l-4 border-l-red-400 p-4 rounded'>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Box className='flex-grow overflow-hidden'>
                                                            <Typography component={'h5'} className='text-md font-medium whitespace-nowrap text-md overflow-hidden text-ellipsis'>ABC Project Customization</Typography>
                                                            <Typography className='text-sm text-gray-400'> Last Update : <Box component={'span'} className='text-gray-600'>4hrs ago</Box></Typography>
                                                        </Box>
                                                        <Typography variant='caption' className='m-2 p-1 bg-yellow-100 text-yellow-400 rounded'>Inprogress</Typography>
                                                    </Stack>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Typography className='text-sm text-gray-400'>Member :</Typography>
                                                        <AvatarGroup total={8}>
                                                            <Avatar alt="Remy Sharp" src="/avatar-1.jpg" />
                                                            <Avatar alt="Travis Howard" src="/avatar-4.jpg" />
                                                            <Avatar alt="Agnes Walker" src="/avatar-3.jpg" />
                                                        </AvatarGroup>
                                                    </Stack>
                                                </Box>
                                            </Box>


                                        </Grid>
                                        <Grid item xs={12} sm={6}md={4} xl={3} className='rounded'>
                                            <Box sx={{ border: '1px solid #ccc' }} className='rounded'>
                                                <Box className='border-l-4 border-l-red-400 p-4 rounded'>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Box className='flex-grow overflow-hidden'>
                                                            <Typography component={'h5'} className='text-md font-medium whitespace-nowrap text-md overflow-hidden text-ellipsis'>ABC Project Customization</Typography>
                                                            <Typography className='text-sm text-gray-400'> Last Update : <Box component={'span'} className='text-gray-600'>4hrs ago</Box></Typography>
                                                        </Box>
                                                        <Typography variant='caption' className='m-2 p-1 bg-yellow-100 text-yellow-400 rounded'>Inprogress</Typography>
                                                    </Stack>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Typography className='text-sm text-gray-400'>Member :</Typography>
                                                        <AvatarGroup total={8}>
                                                            <Avatar alt="Remy Sharp" src="/avatar-1.jpg" />
                                                            <Avatar alt="Travis Howard" src="/avatar-4.jpg" />
                                                            <Avatar alt="Agnes Walker" src="/avatar-3.jpg" />
                                                        </AvatarGroup>
                                                    </Stack>
                                                </Box>
                                            </Box>


                                        </Grid>
                                        <Grid item xs={12} sm={6}md={4} xl={3} className='rounded'>
                                            <Box sx={{ border: '1px solid #ccc' }} className='rounded'>
                                                <Box className='border-l-4 border-l-red-400 p-4 rounded'>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Box className='flex-grow overflow-hidden'>
                                                            <Typography component={'h5'} className='text-md font-medium whitespace-nowrap text-md overflow-hidden text-ellipsis'>ABC Project Customization</Typography>
                                                            <Typography className='text-sm text-gray-400'> Last Update : <Box component={'span'} className='text-gray-600'>4hrs ago</Box></Typography>
                                                        </Box>
                                                        <Typography variant='caption' className='m-2 p-1 bg-yellow-100 text-yellow-400 rounded'>Inprogress</Typography>
                                                    </Stack>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Typography className='text-sm text-gray-400'>Member :</Typography>
                                                        <AvatarGroup total={8}>
                                                            <Avatar alt="Remy Sharp" src="/avatar-1.jpg" />
                                                            <Avatar alt="Travis Howard" src="/avatar-4.jpg" />
                                                            <Avatar alt="Agnes Walker" src="/avatar-3.jpg" />
                                                        </AvatarGroup>
                                                    </Stack>
                                                </Box>
                                            </Box>


                                        </Grid>
                                        <Grid item xs={12} sm={6}md={4} xl={3} className='rounded'>
                                            <Box sx={{ border: '1px solid #ccc' }} className='rounded'>
                                                <Box className='border-l-4 border-l-red-400 p-4 rounded'>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Box className='flex-grow overflow-hidden'>
                                                            <Typography component={'h5'} className='text-md font-medium whitespace-nowrap text-md overflow-hidden text-ellipsis'>ABC Project Customization</Typography>
                                                            <Typography className='text-sm text-gray-400'> Last Update : <Box component={'span'} className='text-gray-600'>4hrs ago</Box></Typography>
                                                        </Box>
                                                        <Typography variant='caption' className='m-2 p-1 bg-yellow-100 text-yellow-400 rounded'>Inprogress</Typography>
                                                    </Stack>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Typography className='text-sm text-gray-400'>Member :</Typography>
                                                        <AvatarGroup total={8}>
                                                            <Avatar alt="Remy Sharp" src="/avatar-1.jpg" />
                                                            <Avatar alt="Travis Howard" src="/avatar-4.jpg" />
                                                            <Avatar alt="Agnes Walker" src="/avatar-3.jpg" />
                                                        </AvatarGroup>
                                                    </Stack>
                                                </Box>
                                            </Box>


                                        </Grid>
                                        <Grid item xs={12} sm={6}md={4} xl={3} className='rounded'>
                                            <Box sx={{ border: '1px solid #ccc' }} className='rounded'>
                                                <Box className='border-l-4 border-l-red-400 p-4 rounded'>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Box className='flex-grow overflow-hidden'>
                                                            <Typography component={'h5'} className='text-md font-medium whitespace-nowrap text-md overflow-hidden text-ellipsis'>ABC Project Customization</Typography>
                                                            <Typography className='text-sm text-gray-400'> Last Update : <Box component={'span'} className='text-gray-600'>4hrs ago</Box></Typography>
                                                        </Box>
                                                        <Typography variant='caption' className='m-2 p-1 bg-yellow-100 text-yellow-400 rounded'>Inprogress</Typography>
                                                    </Stack>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Typography className='text-sm text-gray-400'>Member :</Typography>
                                                        <AvatarGroup total={8}>
                                                            <Avatar alt="Remy Sharp" src="/avatar-1.jpg" />
                                                            <Avatar alt="Travis Howard" src="/avatar-4.jpg" />
                                                            <Avatar alt="Agnes Walker" src="/avatar-3.jpg" />
                                                        </AvatarGroup>
                                                    </Stack>
                                                </Box>
                                            </Box>


                                        </Grid>
                                        <Grid item xs={12} sm={6}md={4} xl={3} className='rounded'>
                                            <Box sx={{ border: '1px solid #ccc' }} className='rounded'>
                                                <Box className='border-l-4 border-l-red-400 p-4 rounded'>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Box className='flex-grow overflow-hidden'>
                                                            <Typography component={'h5'} className='text-md font-medium whitespace-nowrap text-md overflow-hidden text-ellipsis'>ABC Project Customization</Typography>
                                                            <Typography className='text-sm text-gray-400'> Last Update : <Box component={'span'} className='text-gray-600'>4hrs ago</Box></Typography>
                                                        </Box>
                                                        <Typography variant='caption' className='m-2 p-1 bg-yellow-100 text-yellow-400 rounded'>Inprogress</Typography>
                                                    </Stack>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Typography className='text-sm text-gray-400'>Member :</Typography>
                                                        <AvatarGroup total={8}>
                                                            <Avatar alt="Remy Sharp" src="/avatar-1.jpg" />
                                                            <Avatar alt="Travis Howard" src="/avatar-4.jpg" />
                                                            <Avatar alt="Agnes Walker" src="/avatar-3.jpg" />
                                                        </AvatarGroup>
                                                    </Stack>
                                                </Box>
                                            </Box>


                                        </Grid>
                                        <Grid item xs={12} sm={6}md={4} xl={3} className='rounded'>
                                            <Box sx={{ border: '1px solid #ccc' }} className='rounded'>
                                                <Box className='border-l-4 border-l-red-400 p-4 rounded'>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Box className='flex-grow overflow-hidden'>
                                                            <Typography component={'h5'} className='text-md font-medium whitespace-nowrap text-md overflow-hidden text-ellipsis'>ABC Project Customization</Typography>
                                                            <Typography className='text-sm text-gray-400'> Last Update : <Box component={'span'} className='text-gray-600'>4hrs ago</Box></Typography>
                                                        </Box>
                                                        <Typography variant='caption' className='m-2 p-1 bg-yellow-100 text-yellow-400 rounded'>Inprogress</Typography>
                                                    </Stack>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Typography className='text-sm text-gray-400'>Member :</Typography>
                                                        <AvatarGroup total={8}>
                                                            <Avatar alt="Remy Sharp" src="/avatar-1.jpg" />
                                                            <Avatar alt="Travis Howard" src="/avatar-4.jpg" />
                                                            <Avatar alt="Agnes Walker" src="/avatar-3.jpg" />
                                                        </AvatarGroup>
                                                    </Stack>
                                                </Box>
                                            </Box>


                                        </Grid>
                                        <Grid item xs={12} sm={6}md={4} xl={3} className='rounded'>
                                            <Box sx={{ border: '1px solid #ccc' }} className='rounded'>
                                                <Box className='border-l-4 border-l-red-400 p-4 rounded'>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Box className='flex-grow overflow-hidden'>
                                                            <Typography component={'h5'} className='text-md font-medium whitespace-nowrap text-md overflow-hidden text-ellipsis'>ABC Project Customization</Typography>
                                                            <Typography className='text-sm text-gray-400'> Last Update : <Box component={'span'} className='text-gray-600'>4hrs ago</Box></Typography>
                                                        </Box>
                                                        <Typography variant='caption' className='m-2 p-1 bg-yellow-100 text-yellow-400 rounded'>Inprogress</Typography>
                                                    </Stack>
                                                    <Stack direction={'row'} className='items-center my-4'>
                                                        <Typography className='text-sm text-gray-400'>Member :</Typography>
                                                        <AvatarGroup total={8}>
                                                            <Avatar alt="Remy Sharp" src="/avatar-1.jpg" />
                                                            <Avatar alt="Travis Howard" src="/avatar-4.jpg" />
                                                            <Avatar alt="Agnes Walker" src="/avatar-3.jpg" />
                                                        </AvatarGroup>
                                                    </Stack>
                                                </Box>
                                            </Box>


                                        </Grid>
                                    </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    Item Three
                                </TabPanel>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}
