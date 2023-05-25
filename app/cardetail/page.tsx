"use client"
import BasicBreadcrumbs from '@/components/Breadcrum'
import DrawerAppBar from '@/components/DrawerAppBar'
import Footer from '@/components/Footer'
import HeaderMiddle from '@/components/HeaderMiddle'
import TopAppBar from '@/components/TopAppBar'
import { Box, Container, Grid, Stack, Typography, Checkbox, FormGroup, FormControlLabel } from '@mui/material'
import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Image from 'next/image'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import EventIcon from '@mui/icons-material/Event';
import Divider from '@mui/material/Divider';
import PersonIcon from '@mui/icons-material/Person';
import ShareIcon from '@mui/icons-material/Share';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import TextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import Link from 'next/link'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MediaCard from '@/components/card'
import Rating from '@mui/material/Rating';

const StyledTab = styled(Tab)(({ theme }) => ({
    fontSize: '20px',
    '&.Mui-selected': {
        backgroundColor: '#ededed',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
    },
}));

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

                <div>{children}</div>

            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const BootstrapButton = styled(Button)({

    fontSize: 22,
    padding: '12px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    boxShadow: 'none',
    borderColor: '#2b33a2',
    color: '#2b33a2',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#2b33a2',
        borderColor: '#2b33a2',
        boxShadow: 'none',
        color: '#fff',
    },
    '&:active': {
        backgroundColor: '#2b33a2',
        borderColor: '#2b33a2',
        boxShadow: 'none',
        color: '#fff',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});




const customTheme = (outerTheme: Theme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '--TextField-brandBorderColor': '#E0E3E7',
                        '--TextField-brandBorderHoverColor': '#B2BAC2',
                        '--TextField-brandBorderFocusedColor': '#6F7E8C',
                        '& label.Mui-focused': {
                            color: 'var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        borderColor: 'var(--TextField-brandBorderColor)',
                    },
                    root: {
                        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--TextField-brandBorderHoverColor)',
                        },
                        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
            MuiFilledInput: {
                styleOverrides: {
                    root: {
                        '&:before, &:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderColor)',
                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                        },
                        '&.Mui-focused:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
            MuiInput: {
                styleOverrides: {
                    root: {
                        '&:before': {
                            borderBottom: '2px solid var(--TextField-brandBorderColor)',
                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                        },
                        '&.Mui-focused:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
        },
    });




export default function Page() {
    const outerTheme = useTheme();
    const [value, setValue] = React.useState(0);
    const [image, setImage] = React.useState('banner-image-cardetail-1.jpg');

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const handleImage = (image_src: string) => {
        setImage(image_src);
    };

    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <div>
                <TopAppBar />
                <HeaderMiddle />
                <DrawerAppBar />

                <Container maxWidth='xl'>
                    <Box className='px-3'>
                        <BasicBreadcrumbs breadcrumb1={"Home"} breadcrumb2={'Buy Car'} breadcrumb3={''} breadcrumb4={''} breadcrumbend={'Swift'} />
                    </Box>
                    <Grid container spacing={3} >

                        <Grid item xs={12} lg={7} className='mt-4'>
                            <Image src={`/${image}`} width={'1500'} height={'1500'} className='rounded-md' alt='banner-image-cardetail'></Image>
                            <Grid container spacing={1} className='my-4'>
                                <Grid item xs={3} md={3}>
                                    <Image className='rounded-md' src={'/banner-image-cardetail-2.jpg'} width={'1500'} height={'1500'} alt='banner-image-cardetail' onClick={() => handleImage('banner-image-cardetail-2.jpg')}></Image>
                                </Grid>
                                <Grid item xs={3} md={3}>
                                    <Image className='rounded-md' src={'/banner-image-cardetail-3.jpg'} width={'1500'} height={'1500'} alt='banner-image-cardetail' onClick={() => handleImage('banner-image-cardetail-3.jpg')}></Image>
                                </Grid>
                                <Grid item xs={3} md={3}>
                                    <Image className='rounded-md' src={'/banner-image-cardetail-4.jpg'} width={'1500'} height={'1500'} alt='banner-image-cardetail' onClick={() => handleImage('banner-image-cardetail-4.jpg')}></Image>
                                </Grid>
                                <Grid item xs={3} md={3}>
                                    <Image className='rounded-md' src={'/banner-image-cardetail-1.jpg'} width={'1500'} height={'1500'} alt='banner-image-cardetail' onClick={() => handleImage('banner-image-cardetail-1.jpg')}></Image>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={5} className=''>
                            <Typography variant='h4' className='mb-2' fontWeight={'600'}>Swift VXI</Typography>
                            <Stack direction="row" className='mb-2' spacing={1}>
                                <LocationOnOutlinedIcon />
                                <Typography variant='body2'>Eakansh Wheels</Typography>
                                <Typography variant='body2'>Ambala</Typography>
                            </Stack>
                            <Typography variant='h5' className='mb-2' fontWeight={'600'}>₹6 70 000</Typography>
                            <Stack direction="row" className='mb-2 mt-4 justify-between' spacing={1}>
                                <Image src={'/truevalue.jpg'} width={'155'} height={'32'} alt='true value image'></Image>
                                <Box className='flex items-start justify-center pb-2'>
                                    {/* <Checkbox className='p-0' icon={<StarBorderIcon />} checkedIcon={<StarIcon className='text-darkblue' />} checked />
                                    <Checkbox className='p-0' icon={<StarBorderIcon />} checkedIcon={<StarIcon className='text-darkblue' />} checked />
                                    <Checkbox className='p-0' icon={<StarBorderIcon />} checkedIcon={<StarIcon className='text-darkblue' />} checked />
                                    <Checkbox className='p-0' icon={<StarBorderIcon />} checkedIcon={<StarIcon className='text-darkblue' />} checked />
                                    <Checkbox className='p-0' icon={<StarBorderIcon />} checkedIcon={<StarIcon className='text-darkblue' />} checked /> */}
                                    <Stack spacing={1}>
                                        <Rating className='text-darkblue' name="half-rating" defaultValue={2.5} precision={0.5} />
                                    </Stack>
                                </Box>
                            </Stack>
                            <Stack direction="row" className='justify-start sm:justify-around flex-wrap  my-7 gap-1 md:gap-3' divider={<Divider orientation="vertical" flexItem />} spacing={1}>
                                <Box>
                                    <EventIcon className='text-darkblue text-5xl mb-2' />
                                    <Typography variant='h5' className='text-xl' textAlign={'center'}>2019</Typography>
                                </Box>
                                <Box>
                                    <LocalGasStationIcon className='text-darkblue text-5xl mb-2' />
                                    <Typography variant='h5' className='text-xl' textAlign={'center'}>petrol</Typography>
                                </Box>
                                <Box>
                                    <SpeedIcon className='text-darkblue text-5xl mb-2' />
                                    <Typography variant='h5' className='text-xl' textAlign={'center'}>39666</Typography>
                                </Box>
                                <Box>
                                    <ShareIcon className='text-darkblue text-5xl mb-2' />
                                    <Typography variant='h5' className='text-xl' textAlign={'center'}>manual</Typography>
                                </Box>
                                <Box>
                                    <PersonIcon className='text-darkblue text-5xl mb-2' />
                                    <Typography variant='h5' className='text-xl' textAlign={'center'}>1st Owner</Typography>
                                </Box>
                            </Stack>
                            <Grid container>
                                <Grid item xs={12} sm={6}>
                                    <Box className='flex items-start section-bg-color m-2 rounded-md'>
                                        <Image className='m-3' src={'/warranty.svg'} width={'27'} height={'36'} alt='warranty image'></Image>
                                        <Typography variant='body1' className='m-auto text-center'>1 Year Waranty*</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box className='flex items-start section-bg-color  m-2 rounded-md' >
                                        <Image className='m-3' src={'/service.svg'} width={'27'} height={'36'} alt='warranty image'></Image>
                                        <Typography variant='body1' className='m-auto text-center'>3 Free Service</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box className='flex items-start section-bg-color  m-2 rounded-md'>
                                        <Image className='m-3' src={'/refur.svg'} width={'27'} height={'36'} alt='warranty image'></Image>
                                        <Typography variant='body1' className='m-auto text-center'>Refurbished with Maruti Suzuki Genuine Parts</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box className='flex items-start section-bg-color  m-2 rounded-md'>
                                        <Image className='m-3' src={'/verify.svg'} width={'27'} height={'36'} alt='warranty image'></Image>
                                        <Typography variant='body1' className='m-auto text-center'>2 Step Verification</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className='my-2'>
                                    <TextField label="Name" fullWidth required />
                                </Grid>
                                <Grid item xs={12} className='my-2'>
                                    <TextField label="Mobile Number" fullWidth required />
                                </Grid>
                                <Grid item xs={12} className='my-2'>
                                    <TextField label="Email" fullWidth />
                                </Grid>
                                <Grid item xs={12} className='my-2'>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label={<Typography variant='caption'>I authorize Maruti Suzuki India Ltd. or its partners to call me. Please read our <Link href={'/'} className='underline text-darkblue'>Privacy Policy</Link></Typography>} />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} className='my-2'>
                                    <Stack direction="row" className='flex-col gap-2 md:flex-row '>
                                        <BootstrapButton variant="outlined" fullWidth>Book a Test Drive</BootstrapButton>
                                        <BootstrapButton variant="contained" fullWidth>Contact Dealer</BootstrapButton>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} className='my-2'>
                                    <Button variant="contained" className='btn-darkblue p-3 text-2xl' fullWidth>VIEW MY SMART FINANCE OFFERS</Button>
                                    <Typography variant='caption' className='text-gray'>*Prices are indicative and are exclusive of additional charges which may change from time to time. For accurate price and information, kindly contact the respective Dealership.
                                        <Link href={'/'} className='underline text-darkblue'>A&C</Link>
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <StyledTab label="Overview" {...a11yProps(0)} />
                                        <StyledTab label="Certification Report" {...a11yProps(1)} />

                                    </Tabs>
                                </Box>
                                <TabPanel value={value} index={0} >
                                    <Grid container className='section-bg-color p-4 lg:p-6'>
                                        <Grid item xs={12} md={4}>
                                            <Box className='flex items-center py-4 sm:mx-4 border-b-2 border-text-gray'>
                                                <Image src={'/overicon1.png'} width={'15'} height={'25'} alt='overicon1'></Image>
                                                <Typography variant='body1' className='ml-2'>city of Registration</Typography>
                                                <Typography variant='body1' className='ml-auto'>New Delhi</Typography>
                                            </Box>
                                            <Box className='flex items-center py-4 sm:mx-4 border-b-2'>
                                                <Image src={'/overicon2.png'} width={'22'} height={'25'} alt='overicon1'></Image>
                                                <Typography variant='body1' className='ml-2'>Number of Owners</Typography>
                                                <Typography variant='body1' className='ml-auto'>1st Owner</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Box className='flex items-center py-4 sm:mx-4 border-b-2'>
                                                <Image src={'/overicon3.png'} width={'22'} height={'25'} alt='overicon1'></Image>
                                                <Typography variant='body1' className='ml-2'>Color</Typography>
                                                <Typography variant='body1' className='ml-auto'>Gray</Typography>
                                            </Box>
                                            <Box className='flex items-center py-4 sm:mx-4 border-b-2'>
                                                <Image src={'/overicon4.png'} width={'22'} height={'25'} alt='overicon1'></Image>
                                                <Typography variant='body1' className='ml-2'>Transmission Rating</Typography>
                                                <Typography variant='body1' className='ml-auto'>Manual</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Box className='flex items-center py-4 sm:mx-4 border-b-2'>
                                                <Image src={'/overicon5.png'} width={'22'} height={'25'} alt='overicon1'></Image>
                                                <Typography variant='body1' className='ml-2'>External Fitment</Typography>
                                                <Typography variant='body1' className='ml-auto'>No</Typography>
                                            </Box>
                                            <Box className='flex items-center py-4 sm:mx-4 border-b-2'>
                                                <Image src={'/overicon6.png'} width={'22'} height={'25'} alt='overicon1'></Image>
                                                <Typography variant='body1' className='ml-2'>Year of Manufacture</Typography>
                                                <Typography variant='body1' className='ml-auto'>2020</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <Grid container className='section-bg-color p-4 lg:p-6'>
                                        <Grid item xs={12} md={6} lg={4}>
                                            <Box className='flex items-center py-2 md:mx-4 border-b-2 border-text-gray'>
                                                <Typography variant='body1' className='ml-2'>Overall rating</Typography>
                                                <Box className='flex justify-center items-start ml-auto'>
                                                    <Stack spacing={1}>
                                                        <Rating className='text-darkblue' name="half-rating" defaultValue={2.5} precision={0.5} />
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={4}>
                                            <Box className='flex items-center py-2 md:mx-4 border-b-2 border-text-gray'>
                                                <Typography variant='body1' className='ml-2'>Exterior rating</Typography>
                                                <Box className='flex justify-center items-start ml-auto'>
                                                    <Stack spacing={1}>
                                                        <Rating className='text-darkblue' name="half-rating" defaultValue={2.5} precision={0.5} />
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={4}>
                                            <Box className='flex items-center py-2 md:mx-4 border-b-2 border-text-gray'>
                                                <Typography variant='body1' className='ml-2'>Seats and interior rating</Typography>
                                                <Box className='flex justify-center items-start ml-auto'>
                                                    <Stack spacing={1}>
                                                        <Rating className='text-darkblue' name="half-rating" defaultValue={2.5} precision={0.5} />
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={4}>
                                            <Box className='flex items-center py-2 md:mx-4 border-b-2 border-text-gray'>
                                                <Typography variant='body1' className='ml-2'>Engine Rating</Typography>
                                                <Box className='flex justify-center items-start ml-auto'>
                                                    <Stack spacing={1}>
                                                        <Rating className='text-darkblue' name="half-rating" defaultValue={2.5} precision={0.5} />
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={4}>
                                            <Box className='flex items-center py-2 md:mx-4 border-b-2 border-text-gray'>
                                                <Typography variant='body1' className='ml-2'>Suspension Rating</Typography>
                                                <Box className='flex justify-center items-start ml-auto'>
                                                    <Stack spacing={1}>
                                                        <Rating className='text-darkblue' name="half-rating" defaultValue={2.5} precision={0.5} />
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={4}>
                                            <Box className='flex items-center py-2 md:mx-4 border-b-2 border-text-gray'>
                                                <Typography variant='body1' className='ml-2'>Brakes Rating</Typography>
                                                <Box className='flex justify-center items-start ml-auto'>
                                                    <Stack spacing={1}>
                                                        <Rating className='text-darkblue' name="half-rating" defaultValue={2.5} precision={0.5} />
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={4}>
                                            <Box className='flex items-center py-2 md:mx-4 border-b-2 border-text-gray'>
                                                <Typography variant='body1' className='ml-2'>Transmission Rating</Typography>
                                                <Box className='flex justify-center items-start ml-auto'>
                                                    <Stack spacing={1}>
                                                        <Rating className='text-darkblue' name="half-rating" defaultValue={2.5} precision={0.5} />
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={4}>
                                            <Box className='flex items-center py-2 md:mx-4 border-b-2 border-text-gray'>
                                                <Typography variant='body1' className='ml-2'>Electrical Rating</Typography>
                                                <Box className='flex justify-center items-start ml-auto'>
                                                    <Stack spacing={1}>
                                                        <Rating className='text-darkblue' name="half-rating" defaultValue={2.5} precision={0.5} />
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={4}>
                                            <Box className='flex items-center py-2 md:mx-4 border-b-2 border-text-gray'>
                                                <Typography variant='body1' className='ml-2'>Frame Rating</Typography>
                                                <Box className='flex justify-center items-start ml-auto'>
                                                    <Stack spacing={1}>
                                                        <Rating className='text-darkblue' name="half-rating" defaultValue={2.5} precision={0.5} />
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </TabPanel>
                            </Box>
                        </Grid>
                        <Grid item xs={12} className='my-7'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54870.46555200139!2d76.72232940667634!3d30.735148719315465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1683868375984!5m2!1sen!2sin" width="100%" height="500" loading="lazy" ></iframe>
                        </Grid>
                        <Grid item xs={12}>
                            <Stack direction="row" className='mb-2 justify-between'>
                                <Typography variant='h4' className='text-2xl md:text-3xl'>View Similar Cars</Typography>
                                <Button variant='contained' className='btn-darkblue'>View All</Button>
                            </Stack>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} lg={3} >
                                    <MediaCard imageUrl={'card-1.jpg'} cardTitle='Swift' place='delhi' modelYear='2020' fuelType='petrol' travelled='50000' price='200000' />
                                </Grid>
                                <Grid item xs={12} sm={6} lg={3} >
                                    <MediaCard imageUrl={'card-2.jpg'} cardTitle='Swift' place='delhi' modelYear='2020' fuelType='petrol' travelled='50000' price='200000' />
                                </Grid>
                                <Grid item xs={12} sm={6} lg={3} >
                                    <MediaCard imageUrl={'card-3.jpg'} cardTitle='Swift' place='delhi' modelYear='2020' fuelType='petrol' travelled='50000' price='200000' />
                                </Grid>
                                <Grid item xs={12} sm={6} lg={3} >
                                    <MediaCard imageUrl={'ritz.png'} cardTitle='Swift' place='delhi' modelYear='2020' fuelType='petrol' travelled='50000' price='200000' />
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item xs={12} className='my-6'>
                            <Typography variant='h4' className='text-2xl md:text-3xl'>Recommended Picks in New Delhi</Typography>
                            <Grid container spacing={2} className='mt-6' >
                                <Grid item xs={12} md={6} className='' >
                                    <Box className='border p-4 flex items-center justify-center gap-8' >
                                        <Image src={'/recommended-icon1.png'} width={'118'} height={'118'} alt='recommended-icon1'></Image>
                                        <Box className="flex items-start justify-start flex-col">
                                            <Typography variant='h6' fontWeight={'600'} gutterBottom>More Hatchback Cars</Typography>
                                            <Button variant='contained' className='btn-darkblue capitalize '>View All</Button>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} className=' ' >
                                    <Box className='border p-4 flex items-center justify-center gap-8' >
                                        <Image src={'/recommended-icon2.png'} width={'118'} height={'118'} alt='recommended-icon2'></Image>
                                        <Box className="flex items-start justify-start flex-col">
                                            <Typography variant='h6' fontWeight={'600'} gutterBottom>Cars Above 6 Lakhs</Typography>
                                            <Button variant='contained' className='btn-darkblue capitalize '>View All</Button>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <Footer />
            </div>
        </ThemeProvider>
    )
}
