"use client"
import DrawerAppBar from '@/components/DrawerAppBar'
import React from 'react'
import { Box, Button, Checkbox, Container, Divider, Grid, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import Footer from '@/components/Footer';
import TopAppBar from '@/components/TopAppBar';
import HeaderMiddle from '@/components/HeaderMiddle';

const StyledBox = styled(Box)(({ theme }) => ({
    textAlign: 'center',
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
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

function varificationTab(index: number) {
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
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleTabChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };
    const [slidevalue, setSlideValue] = React.useState<number | string | Array<number | string>>(
        30,
    );

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setSlideValue(newValue);
    };

    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSlideValue(event.target.value === '' ? '' : Number(event.target.value));
    // };

    // const handleBlur = () => {
    //     if (slidevalue < '0') {
    //         setSlideValue(0);
    //     } else if (slidevalue > '100') {
    //         setSlideValue(100);
    //     }
    // };
    const [slideLoanvalue, setSlideLoanValue] = React.useState<number | string | Array<number | string>>(
        30,
    );

    const handleSliderLoanChange = (event: Event, newValue: number | number[]) => {
        setSlideLoanValue(newValue);
    };

    //   const handleInputLoanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSlideLoanValue(event.target.value === '' ? '' : Number(event.target.value));
    //   };

    //   const handleLoanBlur = () => {
    //     if (slideLoanvalue < '0') {
    //         setSlideLoanValue(0);
    //     } else if (slideLoanvalue > '100') {
    //         setSlideLoanValue(100);
    //     }
    //   };


    return (
        <>
            <TopAppBar />
            <HeaderMiddle />
            <DrawerAppBar />
            <div className='section-bg-color'>
                <Container maxWidth="xl" className=''>
                    <Grid container>
                        <Grid item xs={12} md={6} className='mt-12' order={{ xs: 2, sm: 1 }}>
                            <Typography variant='h5' color={'primary'} >Why Maruti Suzuki Smart Finance?</Typography>
                            <Typography variant='h4' className='md:text-3xl' color={'primary'}> The Simplest Way to Finance Your Car in Just a Few Clicks.</Typography>
                            <Grid container spacing={1} className='mt-10'>
                                <Grid item xs={6} md={3} className='flex'>
                                    <Box className='box-shadow-gray text-center p-3 py-4 rounded-md w-full bg-white'>
                                        <Box className='flex items-center justify-center mb-2 '>
                                            <Image className='text-center' src={'/banner-icon1.png'} width={'62'} height={'72'} alt='banner-icon1'></Image>
                                        </Box>
                                        <Typography className='text-center text-gray-600 text-sm' variant='body2'>Pre-Approved Loans</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} md={3} className='flex'>
                                    <Box className='box-shadow-gray text-center p-3 py-4 rounded-md w-full bg-white'>
                                        <Box className='flex items-center justify-center mb-2'>
                                            <Image className='text-center' src={'/banner-icon2.png'} width={'62'} height={'72'} alt='banner-icon1'></Image>
                                        </Box>
                                        <Typography className='text-center text-gray-600 text-sm' variant='body2'>Multiple Financiers</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} md={3} className='flex'>
                                    <Box className='box-shadow-gray text-center p-3 py-4 rounded-md w-full bg-white'>
                                        <Box className='flex items-center justify-center mb-2'>
                                            <Image className='text-center' src={'/banner-icon3.png'} width={'62'} height={'72'} alt='banner-icon1'></Image>
                                        </Box>
                                        <Typography className='text-center text-gray-600 text-sm' variant='body2'>Custom Generated Loans</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} md={3} className='flex'>
                                    <Box className='box-shadow-gray text-center p-3 py-4 rounded-md w-full bg-white'>
                                        <Box className='flex items-center justify-center mb-2'>
                                            <Image className='text-center' src={'/banner-icon4.png'} width={'62'} height={'72'} alt='banner-icon1'></Image>
                                        </Box>
                                        <Typography className='text-center text-gray-600 text-sm' variant='body2'>Loan Status Tracking</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} order={{ xs: 1, sm: 2 }}>
                            <Image src={'/banner-img.png'} width={'615'} height={'454'} alt='banner-img.png'></Image>
                        </Grid>
                    </Grid>
                    <Grid container className='justify-center mb-4'>
                        <Grid item xs={12} md={7} className='box-shadow-gray rounded-lg bg-white mb-6' >
                            <Box sx={{ width: '100%' }} >
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab label={<Typography>
                                            <FormControlLabel
                                                control={
                                                    <Radio
                                                        checked={selectedValue === 'a'}
                                                        onChange={handleTabChange}
                                                        value="a"
                                                        name="radio-buttons"
                                                        inputProps={{ 'aria-label': 'A' }}
                                                    />
                                                }
                                                label="I am a customer"
                                            />
                                        </Typography>} {...varificationTab(0)} />
                                        <Tab label={<Typography>
                                            <FormControlLabel
                                                control={
                                                    <Radio
                                                        checked={selectedValue === 'b'}
                                                        onChange={handleTabChange}
                                                        value="b"
                                                        name="radio-buttons"
                                                        inputProps={{ 'aria-label': 'B' }}
                                                    />
                                                }
                                                label="I am a dealer"
                                            />
                                        </Typography>} {...varificationTab(1)} />
                                    </Tabs>
                                </Box>
                                <TabPanel value={value} index={0}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={8}>
                                            <Typography gutterBottom>No need for registration. Just enter your mobile number to get started.</Typography>
                                            <Typography variant='caption' >(if you are an existing customer your journey will be started from your last saved step)</Typography>
                                            <Typography className='mt-2'>Maruti Suzuki Smart Finance <Link href={'/'} className='underline'>Partners</Link></Typography>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextField size='small' id="" label="Mobile" variant="outlined" fullWidth />
                                            <Button variant='contained' fullWidth className='bg-darkblue hover:bg-blue-700 mt-4'>Send OTP</Button>
                                        </Grid>
                                    </Grid>

                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={7}>
                                            <Typography gutterBottom>Please Enter Your MSPIN.</Typography>

                                        </Grid>
                                        <Grid item xs={12} md={5}>
                                            <TextField size='small' id="" label="MSPIN" variant="outlined" InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end" >
                                                        <IconButton className='rounded-md rounded-l-none bg-darkblue text-base relative -right-[14px] hover:bg-blue-800'>
                                                            verify
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }} fullWidth />

                                        </Grid>
                                    </Grid>
                                </TabPanel>
                            </Box>
                        </Grid>
                    </Grid>

                </Container>

            </div>
            <div>
                <Container maxWidth='xl' className='mt-10'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <Typography variant='h5' color={'primary'} className='font-light'>4 Simple Steps to </Typography>
                            <Typography variant='h5' color={'primary'} className='font-semibold'>Finance your car</Typography>
                            <Image src={'/easy-way.png'} width={'243'} height={'202'} alt='easy-way.png' ></Image>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Grid container spacing={1}>
                                <Grid item xs={6} md={3}>
                                    <Image src={'/step-icon1.png'} width={'136'} height={'101'} alt='easy-way.png' ></Image>
                                    <Typography variant='body1' fontWeight={'600'} mt={2} color={'primary'}>Verify your details</Typography>
                                    <Typography variant='body2' color="common.gray">Select your car and a ARENA dealership near you</Typography>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Image src={'/step-icon2.png'} width={'136'} height={'101'} alt='easy-way.png' ></Image>
                                    <Typography variant='body1' fontWeight={'600'} mt={2} color={'primary'}>Select the loan offer</Typography>
                                    <Typography variant='body2' color="common.gray">Compare and select the best offer</Typography>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Image src={'/step-icon3.png'} width={'136'} height={'101'} alt='easy-way.png' ></Image>
                                    <Typography variant='body1' fontWeight={'600'} mt={2} color={'primary'}>Upload your documents</Typography>
                                    <Typography variant='body2' color="common.gray">Apply for the loan online by uploading digital documents</Typography>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Image src={'/step-icon4.png'} width={'136'} height={'101'} alt='easy-way.png' ></Image>
                                    <Typography variant='body1' fontWeight={'600'} mt={2} color={'primary'}>Verification</Typography>
                                    <Typography variant='body2' color="common.gray">Financier verifies and sanctions loan online</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='section-bg-color my-4 py-12'>
                <Container maxWidth='xl' className='box-shadow-gray p-6 rounded-lg bg-white'>
                    <Grid container spacing={2} className='' >
                        <Grid item xs={12}>
                            <Typography variant='h5' color={'primary'} className='font-light' component={'h3'}>4 Simple Steps to Calculate <Box className='font-semibold' component={'span'}>YOUR EMI</Box></Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>

                            <Typography variant='body1'>1. Select your Loan Amount</Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography variant='body1'>2. Select your Loan Period</Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography variant='body1'>3. Select the Interest Rate</Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography variant='body1'>4. Estimated EMI</Typography>
                        </Grid>
                    </Grid>
                    <Grid container className='my-4'>

                        <Grid item xs={12} md={3}>
                            <Stack direction={'row'} className='justify-between'>
                                <Typography variant='body2' component={'h6'} color={'common.gray'}>Loan Amount</Typography>
                                <Typography variant='h5' fontWeight={'600'}> {slideLoanvalue}</Typography>
                            </Stack>
                            <Slider
                                value={typeof slideLoanvalue === 'number' ? slideLoanvalue : 0}
                                onChange={handleSliderLoanChange}
                                aria-labelledby="input-slider"
                            />

                        </Grid>
                        <Grid item xs={12} md={6} className='px-20'>
                            <Stack direction={'row'} className='justify-between'>
                                <Typography variant='body2' component={'h6'} color={'common.gray'}>Loan Period</Typography>
                                <Typography variant='h5' fontWeight={'600'}>5 Years</Typography>
                            </Stack>
                            <Stack direction={'row'} className='gap-[18px] justify-start my-2' >

                                <Typography className='border-1 p-1 w-[100px] text-center' variant='body1' component={'h6'} color={'common.gray'}><Link href={'/'}>1 year</Link></Typography>
                                <Typography className='border-1 p-1 w-[100px] text-center' variant='body1' component={'h6'} color={'common.gray'}><Link href={'/'}>2 year</Link></Typography>
                                <Typography className='border-1 p-1 w-[100px] text-center' variant='body1' component={'h6'} color={'common.gray'}><Link href={'/'}>3 year</Link></Typography>
                                <Typography className='border-1 p-1 w-[100px] text-center' variant='body1' component={'h6'} color={'common.gray'}><Link href={'/'}>4 year</Link></Typography>
                            </Stack>
                            <Stack direction={'row'} className='gap-[18px] justify-start  my-2' >

                                <Typography className='border-1 p-1 w-[100px] text-center' variant='body1' component={'h6'} color={'common.gray'}><Link href={'/'}>5 year</Link></Typography>
                                <Typography className='border-1 p-1 w-[100px] text-center' variant='body1' component={'h6'} color={'common.gray'}><Link href={'/'}>6 year</Link></Typography>
                                <Typography className='border-1 p-1 w-[100px] text-center' variant='body1' component={'h6'} color={'common.gray'}><Link href={'/'}>7 year</Link></Typography>

                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Stack direction={'row'} className='justify-between'>
                                <Typography variant='body2' component={'h6'} color={'common.gray'}>Interest Rate</Typography>
                                <Typography variant='h5' fontWeight={'600'}>
                                    {slidevalue}
                                </Typography>
                            </Stack>
                            <Slider
                                value={typeof slidevalue === 'number' ? slidevalue : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                            />
                        </Grid>
                    </Grid>
                    <Divider />
                    <Typography variant='h5' textAlign={'center'} mt={2} color={'common.gray'} fontWeight={'300'}>Estimated EMI <Box component={'span'} className='text-darkblue font-semibold text-5xl'>₹ 1 887</Box></Typography>
                </Container>
            </div>
            <div>
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item xs={12} md={9}>
                            <Typography variant='h4' my={3} color={'primary'}>Frequently asked questions</Typography>
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography variant='h6' fontWeight={'400'}>What is the Maruti Suzuki Smart Finance ?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Maruti Suzuki Smart Finance is an one-stop solution for all customer financing needs. Its an end to end digital auto financing platform where the customer can view, compare and apply for a loan of their choice. The customer can also derive his on-road price (by selecting accessories, insurance etc. as per the need) and track the loan application in real time. Maruti Suzuki Smart Finance is Indias first Online and end to end car finance platform providing an easy and convenient car financing solution to the Car buyer.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography variant='h6' fontWeight={'400'}>Is the platform only for salaried customers?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            The platform is catering to all profiles of customers :Salaried, Self Employed (Income proof) and Self Employed (without income proof)
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                    >
                                        <Typography variant='h6' fontWeight={'400'}>How many cities are covered under Maruti Suzuki Smart Finance?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            The platform is available to customers across India and the customer can avail finance from anywhere as the process is completely online.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel4a-content"
                                        id="panel4a-header"
                                    >
                                        <Typography variant='h6' fontWeight={'400'}> Are the offers competitive compared to other online marketplaces?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Yes, Offer will be competitive v/s the other online Marketplaces. However, there might be some change in the overall car loan pricing, as banks typically have less overheads and cost with regard to direct customer channels. One of the major USP in Maruti Suzuki Smart Finance is to showcase the Pre-approved Offer which is the best available offer in the market for the customer.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Button variant='contained' className='bg-darkblue my-2'>View more questions</Button>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Image src={'/faq-img.png'} width={'400'} height={'200'} alt='faq-img.png'></Image>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div>
                <Container maxWidth="xl">
                    <Grid container className='my-6'>
                        <Grid item xs={12}>
                            <Typography variant='h5' textAlign={'center'} color={'primary'}> Maruti Suzuki Smart Finance: Finance Your New Car in Just a Few Clicks</Typography>
                            <Typography variant='h6' textAlign={'center'} color={'primary'}> The Easiest Way to Buy Your Dream Car</Typography>
                            <Typography>
                                Maruti Suzuki, Indias largest carmaker, has launched an easy-to-use online platform to offer
                                customers end to end car finance related services. Maruti Suzuki Smart Finance is a ONE-STOP SHOP
                                for all Maruti Suzuki customers, where they can find myriad solutions for all their auto finance
                                related needs. This includ
                            </Typography>
                            <StyledBox>
                                <Button variant='contained' className='bg-darkblue my-2'>Read more</Button>
                            </StyledBox>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Footer />
        </>

    )
}
