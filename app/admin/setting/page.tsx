"use client"
import ResponsiveDrawer from '@/components/DashboardSiderbar'
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Slider from '@mui/material/Slider';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import PinterestIcon from '@mui/icons-material/Pinterest';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import ComputerIcon from '@mui/icons-material/Computer';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { ThemeProvider, styled } from '@mui/material/styles';
import AntSwitch from '../../../styled/admin//setting/Page';
import Theme from '@/styled/theme/page'
import ScrollToTop from '@/components/ScrollToTop'



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
                <Box>
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

    const [year, setYear] = React.useState('');

    const handleyearChange = (event: any) => {
        setYear(event.target.value as string);
    };


    return (
        // <ThemeProvider theme={Theme}>
            <div>
                <ResponsiveDrawer />
                <div className='content-wrapper c-dashboard-bg-color'>
                    <div className='relative '>
                        <div className=' h-[320px] c-bg-color-profile'>
                            <Image className='h-full' src={'/profile-bg.jpg'} width={'1500'} height={'320'} alt='background image'></Image>
                        </div>
                    </div>
                    <div className='p-4 relative -top-16 z-10'>
                        <Grid spacing={2} container>
                            <Grid item xs={12} lg={3}>
                                <Card className='mb-4'>
                                    <CardContent className='text-center'>
                                        <Box className='flex items-center justify-center'>
                                            <Box className='w-[100px] rounded-full border-4 border-white overflow-hidden '>
                                                <Image className='h-full w-full' src={'/avatar-1.jpg'} width={'200'} height={'200'} alt='background image'></Image>
                                            </Box>
                                        </Box>
                                        <Typography variant='h6' className='text-gray-700'>Anna Adame</Typography>
                                        <Typography className='text-gray-500 mb-4 text-sm'>Lead Designer / Developer</Typography>
                                    </CardContent>
                                </Card>
                                <Card className='mb-4'>
                                    <CardContent>
                                        <Stack direction={'row'} className='justify-between'>
                                            <Typography className='font-semibold mb-6' gutterBottom>
                                                Complete Your Profile
                                            </Typography>
                                            <Button variant='text' className='bg-blue-100 capitalize text-sm h-[24px]' sx={{ color: 'gray', backgroundColor: '#edebeb' }} startIcon={<EditNoteIcon className='text-gray-4  00' />}>Edit</Button>
                                        </Stack>
                                        <Slider
                                            aria-label="Always visible"
                                            defaultValue={60}
                                            step={10}
                                            valueLabelDisplay="on"
                                            className='my-4'
                                        />
                                    </CardContent>
                                </Card>
                                <Card className='mb-4'>
                                    <CardContent>
                                        <Stack direction={'row'} className='justify-between'>
                                            <Typography className='font-semibold mb-6' gutterBottom>
                                                Portfolio
                                            </Typography>
                                            <Button variant='text' className='bg-blue-100 capitalize text-sm h-[24px]' sx={{ color: 'gray', backgroundColor: '#edebeb' }} startIcon={<AddIcon className='text-gray-4  00' />}>Add</Button>
                                        </Stack>
                                        <Stack direction={'row'} gap={2} className='my-4'>
                                            <Box className='w-10 h-8 m-1 bg-black rounded-full flex items-center justify-center'>
                                                <GitHubIcon className='text-white text-sm' />
                                            </Box>
                                            <TextField size='small' id="" label="GitHub" variant="outlined" placeholder='@daveadame' fullWidth />

                                        </Stack>
                                        <Stack direction={'row'} gap={2} className='my-4'>
                                            <Box className='w-8 h-8 m-1 bg-blue-900 rounded-full flex items-center justify-center'>
                                                <LanguageIcon className='text-white text-sm' />
                                            </Box>
                                            <TextField size='small' id="" label="Outlined" variant="outlined" placeholder='www.velzon.com' fullWidth />

                                        </Stack>
                                        <Stack direction={'row'} gap={2} className='my-4'>
                                            <Box className='w-8 h-8 m-1 bg-green-600 rounded-full flex items-center justify-center'>
                                                <SportsBasketballIcon className='text-white text-sm' />
                                            </Box>
                                            <TextField size='small' id="" label="Outlined" variant="outlined" placeholder='@dave_adame' fullWidth />
                                        </Stack>
                                        <Stack direction={'row'} gap={2} className='my-4'>
                                            <Box className='w-8 h-8 m-1 bg-red-400 rounded-full flex items-center justify-center'>
                                                <PinterestIcon className='text-white text-sm' />
                                            </Box>
                                            <TextField size='small' id="" label="Pinterest" variant="outlined" placeholder='Advance Dave' fullWidth />
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} lg={9}>
                                <Box className="bg-white rounded" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab className='text-sm md:text-md' label="Personal Details" {...tabpannelindex(0)} />
                                        <Tab label="Change Password" {...tabpannelindex(1)} />
                                        <Tab label="Experience" {...tabpannelindex(2)} />
                                        <Tab label="Privacy Policy" {...tabpannelindex(3)} />
                                    </Tabs>
                                </Box>
                                <Box className="bg-white p-5">
                                    <TabPanel value={value} index={0}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} lg={6}>
                                                <TextField size='small' className='my-2' id="" label="First Name" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item xs={12} lg={6}>
                                                <TextField size='small' className='my-2' id="" label="Last Name" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item xs={12} lg={6}>
                                                <TextField size='small' className='my-2' id="" label="Phone Number" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item xs={12} lg={6}>
                                                <TextField size='small' className='my-2' id="" label="Email Address" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item xs={12} lg={6}>
                                                <TextField size='small' className='my-2' id="" label="Joining Date" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item xs={12} lg={6}>
                                                <TextField size='small' className='my-2' id="" label="skill" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item xs={12} lg={6}>
                                                <TextField size='small' className='my-2' id="" label="Designation" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item xs={12} lg={6}>
                                                <TextField size='small' className='my-2' id="" label="Website" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item xs={12} lg={4}>
                                                <TextField size='small' className='my-2' id="" label="City" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item xs={12} lg={4}>
                                                <TextField size='small' className='my-2' id="" label="Country" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item xs={12} lg={4}>
                                                <TextField size='small' className='my-2' id="" label="Zip Code" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item xs={12} >
                                                <TextField minRows={'2'} maxRows={'6'} className='my-2' size='small' id="" label="description" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item xs={12} className='text-right' >
                                                <Button variant='contained' className='text-white bg-blue-800 hover:bg-blue-900 capitalize mx-2'>Updata</Button>
                                                <Button variant='contained' className='text-green-800 bg-green-100 hover:bg-green-800 hover:text-white capitalize mx-2'>Cancel</Button>
                                            </Grid>

                                        </Grid>
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <Grid container spacing={2}>

                                            <Grid item xs={12} lg={4}>
                                                <TextField size='small' className='my-2' id="" label="Old Password*" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item xs={12} lg={4}>
                                                <TextField size='small' className='my-2' id="" label="New Password*" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item xs={12} lg={4}>
                                                <TextField size='small' className='my-2' id="" label="Confirm Password*" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button className='underline underline-offset-1 capitalize text-blue-900 font-light'>Forgot Password?</Button>
                                            </Grid>
                                            <Grid item xs={12} className='text-right'>
                                                <Button className='capitalize bg-green-400 hover:bg-green-600 text-white'>Change Password</Button>
                                            </Grid>

                                            <Grid item xs={12} className='text-right' >
                                                <Stack direction={'row'} className='justify-between pb-2 border-b-2'>
                                                    <Typography variant='body2' className=''>Login History</Typography>
                                                    <Typography className='text-sm'>All Logout</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} className='text-right' >
                                                <Stack direction={'row'} className='justify-between items-center'>
                                                    <Box className='flex items-center justify-start'>
                                                        <Box className='w-12 h-12 flex justify-center items-center bg-slate-100 rounded mr-4'>
                                                            <SmartphoneIcon className='p-[2px]' />
                                                        </Box>
                                                        <Box >
                                                            <Typography variant='body2' className='text-left font-medium ' gutterBottom>iPhone 12 Pro</Typography>
                                                            <Typography variant='body2' className=' text-gray-400'>Los Angeles, United States - March 16 at 2:47PM</Typography>

                                                        </Box>
                                                    </Box>
                                                    <Typography className='text-sm'>Logout</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} className='text-right' >
                                                <Stack direction={'row'} className='justify-between items-center'>
                                                    <Box className='flex items-center justify-start'>
                                                        <Box className='w-12 h-12 flex justify-center items-center bg-slate-100 rounded mr-4'>
                                                            <TabletAndroidIcon className='p-[2px]' />
                                                        </Box>
                                                        <Box >
                                                            <Typography variant='body2' className='text-left font-medium ' gutterBottom>Apple iPad Pro</Typography>
                                                            <Typography variant='body2' className=' text-gray-400'>Washington, United States - November 06 at 10:43AM</Typography>

                                                        </Box>
                                                    </Box>
                                                    <Typography className='text-sm'>Logout</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} className='text-right' >
                                                <Stack direction={'row'} className='justify-between items-center'>
                                                    <Box className='flex items-center justify-start'>
                                                        <Box className='w-12 h-12 flex justify-center items-center bg-slate-100 rounded mr-4'>
                                                            <PhoneIphoneIcon className='p-[2px]' />
                                                        </Box>
                                                        <Box >
                                                            <Typography variant='body2' className='text-left font-medium ' gutterBottom>Galaxy S21 Ultra 5G</Typography>
                                                            <Typography variant='body2' className=' text-gray-400'>Conneticut, United States - June 12 at 3:24PM</Typography>

                                                        </Box>
                                                    </Box>
                                                    <Typography className='text-sm'>Logout</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} className='text-right' >
                                                <Stack direction={'row'} className='justify-between items-center'>
                                                    <Box className='flex items-center justify-start'>
                                                        <Box className='w-12 h-12 flex justify-center items-center bg-slate-100 rounded mr-4'>
                                                            <ComputerIcon className='p-[2px]' />
                                                        </Box>
                                                        <Box >
                                                            <Typography variant='body2' className='text-left font-medium ' gutterBottom>Dell Inspiron 14</Typography>
                                                            <Typography variant='body2' className=' text-gray-400'>Phoenix, United States - July 26 at 8:10AM</Typography>

                                                        </Box>
                                                    </Box>
                                                    <Typography className='text-sm'>Logout</Typography>
                                                </Stack>
                                            </Grid>

                                        </Grid>
                                    </TabPanel>
                                    <TabPanel value={value} index={2}>
                                        <div>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={6}><TextField id="" label="Job Title" variant="outlined" fullWidth /></Grid>
                                                <Grid item xs={12} md={6}><TextField id="" label="Company Name" variant="outlined" fullWidth /></Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Box >
                                                        <FormControl fullWidth>
                                                            <InputLabel id="">Experiance from</InputLabel>
                                                            <Select
                                                                labelId=""
                                                                id="demo-simple-select"
                                                                value={year}
                                                                label="Age"
                                                                onChange={handleyearChange}
                                                            >
                                                                <MenuItem value={10}>Ten</MenuItem>
                                                                <MenuItem value={20}>Twenty</MenuItem>
                                                                <MenuItem value={30}>Thirty</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Box >
                                                        <FormControl fullWidth>
                                                            <InputLabel id="">Experiance to</InputLabel>
                                                            <Select
                                                                labelId="Experiance to"
                                                                id="demo-simple-select"
                                                                value={year}
                                                                label="Age"
                                                                onChange={handleyearChange}
                                                            >
                                                                <MenuItem value={10}>Ten</MenuItem>
                                                                <MenuItem value={20}>Twenty</MenuItem>
                                                                <MenuItem value={30}>Thirty</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} md={12}>
                                                    <TextField id="" multiline rows={4} label="Company Name" variant="outlined" fullWidth value={`You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you're working with reputable font websites. `} />
                                                </Grid>
                                                <Grid item xs={12} md={12} className='text-right'>
                                                    <Button className='bg-green-600 text-white hover:bg-green-800 capitalize'  color='success'>Delete</Button>
                                                </Grid>
                                                <Grid item xs={12} md={12} >
                                                    <Stack direction={'row'} className='gap-4'>
                                                    <Button className='bg-green-600 text-white hover:bg-green-800 capitalize'  color='success'>update</Button>
                                                    <Button className='bg-blue-600 text-white hover:bg-blue-800 capitalize'  color='success'>Add new</Button>

                                                    </Stack>
                                                </Grid>

                                            </Grid>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value={value} index={3}>
                                        <div>
                                            <Box>
                                                <Typography variant='h5' className='text-md underline underline-offset-2' fontSize={'20px'} gutterBottom>Security:</Typography>
                                                <Box className='flex items-start flex-col lg:flex-row gap-2 mb-5 sm:mb-4 justify-center'>
                                                    <Box className="grow">
                                                        <Typography variant='h6' gutterBottom className='text-sm'>Two-factor Authentication</Typography>
                                                        <Typography variant='body2' className='text-sm text-gray-500' gutterBottom>Two-factor authentication is an enhanced security meansur. Once enabled, you will be required to give two types of identification when you log into Google Authentication and SMS are Supported.</Typography>
                                                    </Box>
                                                    <Box className='shrink-0'>
                                                        <Button size='small' color='primary' variant='contained' href='/' className='capitalize text-xs' >Enable Two-facor Authentication</Button>
                                                    </Box>
                                                </Box>
                                                <Box className='flex items-start flex-col lg:flex-row gap-2 mb-5 sm:mb-4 '>
                                                    <Box className="grow">
                                                        <Typography variant='h6' gutterBottom className='text-sm'>Secondary Verification</Typography>
                                                        <Typography variant='body2' className='text-sm text-gray-500' gutterBottom>The first factor is a password and the second commonly includes a text with a code sent to your smartphone, or biometrics using your fingerprint, face, or retina.</Typography>
                                                    </Box>
                                                    <Box className='shrink-0'>
                                                        <Button size='small' color='primary' variant='contained' href='/' className='capitalize text-xs' >Set up secondary method</Button>
                                                    </Box>
                                                </Box>
                                                <Box className='flex items-start flex-col lg:flex-row gap-2 mb-5 sm:mb-4 '>
                                                    <Box className="grow">
                                                        <Typography variant='h6' gutterBottom className='text-sm'>Backup Codes</Typography>
                                                        <Typography variant='body2' className='text-sm text-gray-500' gutterBottom>A backup code is automatically generated for you when you turn on two-factor authentication through your iOS or Android Twitter app. You can also generate a backup code on twitter.com.</Typography>
                                                    </Box>
                                                    <Box className='shrink-0'>
                                                        <Button size='small' color='primary' variant='contained' href='/' className='capitalize text-xs' >Generate backup codes</Button>
                                                    </Box>
                                                </Box>

                                            </Box>
                                            <Box>
                                                <Typography variant='h5' className='text-md underline underline-offset-2' fontSize={'20px'} gutterBottom>Application Notifications:</Typography>
                                                <Box className='flex items-start flex-col lg:flex-row gap-2 mb-5 sm:mb-4 justify-center'>
                                                    <Box className="grow">
                                                        <Typography variant='h6' gutterBottom className='text-sm'>Direct messages   </Typography>
                                                        <Typography variant='body2' className='text-sm text-gray-500' gutterBottom>Messages from people you follow</Typography>
                                                    </Box>
                                                    <Box className='shrink-0'>
                                                        <AntSwitch inputProps={{ 'aria-label': 'ant design' }} />

                                                    </Box>
                                                </Box>
                                                <Box className='flex items-start flex-col lg:flex-row gap-2 mb-5 sm:mb-4 '>
                                                    <Box className="grow">
                                                        <Typography variant='h6' gutterBottom className='text-sm'>Show desktop notifications</Typography>
                                                        <Typography variant='body2' className='text-sm text-gray-500' gutterBottom>{`Choose the option you want as your default setting. Block a site: Next to "Not allowed to send notifications," click Add.`}</Typography>
                                                    </Box>
                                                    <Box className='shrink-0'>
                                                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />

                                                    </Box>
                                                </Box>
                                                <Box className='flex items-start flex-col lg:flex-row gap-2 mb-5 sm:mb-4 '>
                                                    <Box className="grow">
                                                        <Typography variant='h6' gutterBottom className='text-sm'> Show email notifications</Typography>
                                                        <Typography variant='body2' className='text-sm text-gray-500' gutterBottom>{` Under Settings, choose Notifications. Under Select an account, choose the account to enable notifications for. `}</Typography>
                                                    </Box>
                                                    <Box className='shrink-0'>
                                                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />

                                                    </Box>
                                                </Box>
                                                <Box className='flex items-start flex-col lg:flex-row gap-2 mb-5 sm:mb-4 '>
                                                    <Box className="grow">
                                                        <Typography variant='h6' gutterBottom className='text-sm'>Show purchase notifications</Typography>
                                                        <Typography variant='body2' className='text-sm text-gray-500' gutterBottom>{` Get real-time purchase alerts to protect yourself from fraudulent charges. `}</Typography>
                                                    </Box>
                                                    <Box className='shrink-0'>
                                                        <AntSwitch inputProps={{ 'aria-label': 'ant design' }} />

                                                    </Box>
                                                </Box>
                                                <Box className='flex items-start flex-col lg:flex-row gap-2 mb-5 sm:mb-4 '>
                                                    <Box className="grow">
                                                        <Typography variant='h6' gutterBottom className='text-sm'>Show chat notifications</Typography>
                                                        <Typography variant='body2' className='text-sm text-gray-500' gutterBottom>{`To prevent duplicate mobile notifications from the Gmail and Chat apps, in settings, turn off Chat notifications.`}</Typography>
                                                    </Box>
                                                    <Box className='shrink-0'>
                                                        <Stack direction="row" spacing={1} alignItems="center">
                                                            <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                                                        </Stack>
                                                    </Box>
                                                </Box>

                                            </Box>
                                            <Box>
                                                <Typography variant='h5' className='text-md underline underline-offset-2' fontSize={'20px'} gutterBottom>Delete This Account:</Typography>
                                                <Typography variant='body2' className='text-sm text-gray-500'>{`Go to the Data & Privacy section of your profile Account. Scroll to "Your data & privacy options." Delete your Profile Account. Follow the instructions to delete your account :`}</Typography>
                                                <TextField size='small' id="" variant="outlined" type='password' value={'qhduiasd'} className='my-4' />
                                                <Stack direction={'row'} className='gap-4'>
                                                    <Button variant='text' color='error' className='bg-red-100 capitalize'>Close & Delete This Account</Button>
                                                    <Button variant='text' className='text-black text-sm bg-blue-100 capitalize'>Cancel</Button>
                                                </Stack>
                                            </Box>
                                        </div>
                                    </TabPanel>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <ScrollToTop/>
            </div>
        // </ThemeProvider>
    )
}
