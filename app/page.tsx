"use client"
import { Box, Button, Card, CardContent, Checkbox, Chip, Container, FormControl, FormControlLabel, FormGroup, FormHelperText, Grid, MenuItem, Rating, Stack, TextField, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Link from 'next/link';
import AccountCircle from '@mui/icons-material/AccountCircle';
import React, { useEffect } from 'react'
import Image from 'next/image';
import TopAppBar from '@/components/TopAppBar';
import HeaderMiddle from '@/components/HeaderMiddle';
import DrawerAppBar from '@/components/DrawerAppBar';
import CarouselComponent from '@/components/Carousel';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MediaCard from '@/components/card';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import MediaCard2 from '@/components/card2';
import Footer from '@/components/Footer';



interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const modal = [
  {
    value: 'ALTO 800',
    label: 'ALTO',
  },
  {
    value: 'WAGON R',
    label: 'WAGON',
  },
  {
    value: 'SWIFT',
    label: 'SWIFT',
  },
  {
    value: 'DZIRE',
    label: 'DZIRE',
  },
];
const budget = [
  {
    value: '2',
    label: 'Less Than 2 Lakh',
  },
  {
    value: '4-6',
    label: '4 Lakh To 6 Lakh',
  },
  {
    value: '6-8',
    label: '6 Lakh To 8 Lakh',
  },
  {
    value: '8+',
    label: 'MORE THEN 8 Lakh',
  },
];
const city = [
  {
    value: 'Abohar',
    label: 'Abohar',
  },
  {
    value: 'Agra',
    label: 'Agra',
  },
  {
    value: 'Ahmedabad',
    label: 'Ahmedabad',
  },
  {
    value: 'Ahmednagar',
    label: 'Ahmednagar',
  },
];
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function Home() {
  useEffect(() => {
    document.title = `next-home`
  }, [])
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <main >
      <>
        <TopAppBar />
        <HeaderMiddle />
        <DrawerAppBar />
        <CarouselComponent />
        <Container maxWidth="xl" sx={{ position: 'relative', paddingTop: '10px', marginTop: '80px', zIndex: '999' }} >

          <Box className='w-full' sx={{ position: 'absolute', top: '-200px', left: '0px' }}>
            <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab className='c-tabs' label="BUY" {...a11yProps(0)} />
                <Tab className='c-tabs' label="SELL" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Grid xs={12} item className='flex items-center flex-wrap w-full bg-white px-4 py-6 rounded-md' sx={{ boxShadow: '0px 10px 20px #e2e2e2' }}>
                <div className='basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2 my-1'>
                  <TextField
                    id=""
                    select
                    label="Select modal"
                    defaultValue=""
                    variant="outlined"
                    fullWidth
                  >
                    {modal.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className='basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2 my-1'>
                  <TextField
                    id=""
                    select
                    label="Select modal"
                    defaultValue=""
                    variant="outlined"
                    fullWidth
                  >
                    {modal.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className='basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2 my-1'>
                  <TextField
                    id=""
                    select
                    label="Select budget"
                    defaultValue=""
                    variant="outlined"
                    fullWidth
                  >
                    {budget.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className='basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2 my-1'>
                  <Button size='large' className='bg-primary h-[56px] capitalize' variant='contained' fullWidth>Submit</Button>
                </div>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Grid xs={12} item className='flex items-center flex-wrap w-full bg-white px-4 py-6 rounded-md' sx={{ boxShadow: '0px 10px 20px #e2e2e2' }}>
                <div className='basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2 my-1'>
                  <TextField id="" label="Registration Number" variant="outlined" fullWidth />
                </div>
                <div className='basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2 my-1'>
                  <TextField id="" label="Name" variant="outlined" fullWidth />
                </div>
                <div className='basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2 my-1'>
                  <TextField id="" label="Email" variant="outlined" fullWidth />
                </div>
                <div className='basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2 my-1'>
                  <Button size='large' className='bg-primary h-[56px] capitalize' variant='contained' fullWidth>Submit</Button>
                </div>

              </Grid>
            </TabPanel>


          </Box>
          <Grid container spacing={2}>
            <Grid xs={12} sm={6} md={3} item >
              <Typography variant='h4' fontWeight={'600'}>Quick Search</Typography>
            </Grid>
            <Grid xs={12} sm={6} md={3} item >
              <Stack direction="row" spacing={1}>
                <Chip label="By Model" variant="outlined" color="primary" className='bg-darkblue' />
                <Chip label="By Budget" variant="outlined" color="primary" />
                <Chip label="By Body Type" variant="outlined" color="primary" />
              </Stack>
            </Grid>
            <Grid xs={12} item className='flex items-center flex-wrap'>
              <div className='basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5 px-1 my-1'>
                <Box className='flex-class justify-between border-1 border-radius-4'>
                  <Image src="/alto-800.png" width={'150'} height={'200'} alt='ritz'></Image>
                  <Link href={'/'}>
                    <Button className='text-black capitalize' endIcon={<NavigateNextIcon />}>Ritz</Button>
                  </Link>
                </Box>
              </div>
              <div className='basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5 px-1 my-1'>
                <Box className='flex-class justify-between border-1 border-radius-4'>
                  <Image src="/baleno.png" width={'150'} height={'200'} alt='ritz'></Image>
                  <Link href={'/'}>
                    <Button className='text-black capitalize' endIcon={<NavigateNextIcon />}>wagnar</Button>
                  </Link>
                </Box>
              </div>
              <div className='basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5 px-1 my-1'>
                <Box className='flex-class justify-between border-1 border-radius-4'>
                  <Image src="/ertiga.png" width={'150'} height={'200'} alt='ritz'></Image>
                  <Link href={'/'}>
                    <Button className='text-black capitalize' endIcon={<NavigateNextIcon />}>verna</Button>
                  </Link>
                </Box>
              </div>
              <div className='basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5 px-1 my-1'>
                <Box className='flex-class justify-between border-1 border-radius-4' >
                  <Image src="/ignis-h5-static.png" width={'150'} height={'200'} alt='ritz'></Image>
                  <Link href={'/'}>
                    <Button className='text-black capitalize' endIcon={<NavigateNextIcon />}>Alto</Button>
                  </Link>
                </Box>
              </div>
              <div className='basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5 px-1 my-1'>
                <Box className='flex-class justify-between border-1 border-radius-4' >
                  <Image src="/eeco.png" width={'150'} height={'200'} alt='ritz'></Image>
                  <Link href={'/'}>
                    <Button className='text-black capitalize' endIcon={<NavigateNextIcon />}>swift</Button>
                  </Link>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} className='block sm:hidden pl-5 pr-1 my-1'>
              <Button variant='contained' className='bg-darkblue ' fullWidth>view All</Button>
            </Grid>
          </Grid>
        </Container>

        <Box className='my-40 py-20' sx={{ backgroundColor: '#e8e8e8' }}>
          <Typography fontWeight={'600'} gutterBottom variant='h4' textAlign={'center'} className='py-2'>Top Rated</Typography>
          <Container maxWidth="xl" >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <MediaCard imageUrl={'card-1.jpg'} cardTitle='Swift' place='delhi' modelYear='2020' fuelType='petrol' travelled='50000' price='1,50,000' />

              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>

                <MediaCard imageUrl={'card-2.jpg'} cardTitle='Swift Dizare' place='mohali' modelYear='2016' fuelType='CNG' travelled='200000' price='1,00,000' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>

                <MediaCard imageUrl={'card-3.jpg'} cardTitle='weginer' place='delhi' modelYear='2014' fuelType='petrol' travelled='300000' price='2,20,000' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <MediaCard imageUrl={'ritz.png'} cardTitle='Ritiz' place='delhi' modelYear='2019' fuelType='Diesel' travelled='100000' price='3,20,000' />
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container maxWidth="xl" className='p-0 lg:p-4' >
          <div className='banner-wrapper flex items-center'>
            <div className='bannerimage-wrapper lg:px-8'>
              <Image src="/banner-img.jpg" width={'450'} height={'232'} alt='banner Image'></Image>
            </div>
            <div>
              <Typography variant='h4' gutterBottom fontWeight={'600'} className='text-darkblue hidden lg:block' >Your Search for a Fair and <br /> Transparent price for your used <br /> car ends here!</Typography>
              <Typography variant='body2' gutterBottom fontWeight={'600'} className='text-gray hidden lg:block'>Get started with our AI-based scientific pricing engine and book a home evaluation today!</Typography>
              <Typography variant='h6' fontWeight={'600'} className='lg:hidden text-darkblue'>Sell your car Hassle-Free</Typography>
            </div>
          </div>
          <div className='px-4 sm:px-14'>
            <Grid container className='my-40 box-shadow-1 car-detail-form car-detail-form-home'>
              <Grid xs={12} item >
                <Typography className='car-detail-form-heading md:pl-8' variant='h5'>Enter your car details for a hassle-free experience</Typography>
                <Grid container >
                  <Grid xs={12} md={4} item className='md:px-8 my-2'>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                      <TextField id="" label="Name" variant="standard" fullWidth />
                    </Box>
                  </Grid>
                  <Grid xs={12} md={4} item className='md:px-8 my-2'>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                      <TextField id="" label="Email" variant="standard" fullWidth />
                    </Box>
                  </Grid>
                  <Grid xs={12} md={4} item className='md:px-8 my-2'>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      <WifiCalling3Icon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                      <TextField id="" label="Mobile Number" variant="standard" fullWidth />
                    </Box>
                  </Grid>
                  <Grid xs={12} md={4} item className='md:px-8 my-2'>
                    <FormControl variant="standard" fullWidth>
                      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AppRegistrationIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="" label="Registration Number" variant="standard" fullWidth />
                      </Box>
                      <FormHelperText id="component-helper-text" className='ml-20 w-full' >
                        Please enter without any space
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs={12} lg={9} item className='my-2'>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label={<Typography className='text-sm md:text-md'> I authorize Maruti Suzuki India Ltd. or its partners to call me. Please read our <Link href={'/'}>Privacy Policy</Link></Typography>} />
                </FormGroup>
              </Grid>
              <Grid xs={12} lg={3} item >
                <Button variant='contained' fullWidth className='bg-darkblue '>Submit</Button>
              </Grid>
            </Grid>
          </div>
        </Container>
        <Container maxWidth='xl'>
          <Grid container>
            <Grid xs={12} sm={6} md={7} lg={5} item className='px-2 my-2'>
              <Typography variant='h6' fontWeight={'600'} className='mb-4'>About True Value</Typography>
              <Image className='w-full' src={'/about-img.jpg'} width={'600'} height={'293'} alt='about Image'></Image>
              <div className='p-4 border'>
                <Typography variant='h6'>About Us</Typography>
                <Typography variant='body2' className='text-gray'>Since foraying into India’s pre-owned car market in 2001, True Value, Maruti Suzuki’s channel for pre-owned cars, has grown in both size and stature. With 558 outlets spread across 279 cities, the new True Value caters to the diverse and burgeoning needs of pre-owned car buyers across the country.</Typography>
                <Button variant='text' className='text-capitalize' endIcon={<NavigateNextIcon />}>read more</Button>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={5} lg={3} item className='px-2 my-2'>
              <div>
                <Box className='flex items-start justify-between'>
                  <Typography variant='h6' fontWeight={'600'} className='mb-4'>From the Auto Experts</Typography>
                  <Button variant='contained' className='bg-darkblue'>view all</Button>
                </Box>
                <Box className='flex-class align-items-start gap-5 mb-4' >
                  <Box className='width-40 flex-none '>
                    <Image src={'/what_makes1.jpg'} width={'552'} height={'272'} alt='auto expert'></Image>
                  </Box>
                  <Box>
                    <Typography variant='body1' className='text-sm'>What Makes Maruti Suzuki True Value A Trusted Name in the Pre-Owned Car Market? </Typography>
                    <Button variant='text' className='text-capitalize' endIcon={<NavigateNextIcon />}>read more</Button>
                  </Box>
                </Box>
                <Box className='flex-class align-items-start gap-5 mb-4' >
                  <Box className='width-40 flex-none'>
                    <Image src={'/5-factors1.jpg'} width={'552'} height={'272'} alt='auto expert'></Image>
                  </Box>
                  <Box>
                    <Typography variant='body1' className='text-sm'>5 Factors To Consider Before You Buy A Pre-Owned Car...</Typography>
                    <Button variant='text' className='text-capitalize' endIcon={<NavigateNextIcon />}>read more</Button>
                  </Box>
                </Box>
              </div>
              <div className='sm:mt-8'>
                <Box className='flex items-start justify-between'>
                  <Typography variant='h6' fontWeight={'600'} className='mb-4'>Blog</Typography>
                  <Button variant='contained' className='bg-darkblue'>view all</Button>
                </Box>
                <Box className='flex-class align-items-start gap-5 mb-4' >
                  <Box className='width-40 flex-none'>

                    <Image src={'/More_Affordable.png'} width={'552'} height={'272'} alt='auto expert'></Image>
                  </Box>
                  <Box>
                    <Typography variant='body2' className='text-sm'>What Makes Used Cars More Affordable? </Typography>
                    <Button variant='text' className='text-capitalize' endIcon={<NavigateNextIcon />}>read more</Button>
                  </Box>
                </Box>
                <Box className='flex-class align-items-start gap-5 mb-4' >
                  <Box className='width-40 flex-none'>

                    <Image src={'/Guide_to_Buying.png'} width={'552'} height={'272'} alt='auto expert'></Image>
                  </Box>
                  <Box>
                    <Typography variant='body2' className='text-sm'>Your Guide to Buying a Used Car in India</Typography>
                    <Button variant='text' className='text-capitalize' endIcon={<NavigateNextIcon />}>read more</Button>
                  </Box>
                </Box>
              </div>
            </Grid>
            <Grid xs={12} sm={6} lg={4} item className='px-2 my-2'>
              <Typography variant='h6' fontWeight={'600'} className='mb-4'>The True Value Advantages</Typography>
              <Image src={'/about-img.jpg'} width={'592'} height={'293'} alt='about Image'></Image>
              <div className='p-4 border'>
                <Typography variant='h6'>True Value Advantages</Typography>
                <Typography variant='body2' className='text-gray'>At Maruti Suzuki True Value, the term ‘True Value’ takes on an all-important meaning. It is a sum of key aspects that every True Value certified pre-owned car adheres to, and value-adds that the car comes with, to ensure transparency, reliability and most importantly, customer delight.</Typography>
                <Button variant='text' className='text-capitalize' endIcon={<NavigateNextIcon />}>read more</Button>
              </div>
            </Grid>
          </Grid>
        </Container>
        <div className='section-bg-color'>
          <Container maxWidth='xl' >
            <Grid container className='py-20'>
              <Grid xs={12} lg={6} item >
                <Typography variant='h4' fontSize={'24px'} fontWeight={'600'} className='pb-4'>Review & Recommendation</Typography>
                <Grid container>
                  <Grid xs={12} sm={6} item className='px-2 my-4'>
                    <Card>
                      <CardContent>
                        <Box className='flex-Class items-start pb-2'>
                          <Stack spacing={1}>
                            <Rating className='text-darkblue' name="half-rating" defaultValue={2.5} precision={0.5} />
                          </Stack>
                        </Box>
                        <Typography variant='body2' className='text-gray'>
                          {
                            `"I purchased a pre-owned Alto from True Value Shaheedpath. My overall experience has been wonderful. I got the kind of car I was looking for well within my budget. They have quite a wide-ranging stock of cars and the way the staff helped me throughout was quite admirable. Very satisfied with my purchase from True Value and Maruti Suzuki."`
                          }
                        </Typography>
                        <Typography variant='h6' className='font-light text-gray-400' >
                          Mrs. Krishna
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid xs={12} sm={6} item className='px-2 my-4'>
                    <Card>
                      <CardContent>
                        <Box className='flex-Class items-start pb-2'>
                          <Checkbox className='p-0' icon={<StarBorderIcon />} checkedIcon={<StarIcon className='text-darkblue' />} />
                          <Checkbox className='p-0' icon={<StarBorderIcon />} checkedIcon={<StarIcon className='text-darkblue' />} />
                          <Checkbox className='p-0' icon={<StarBorderIcon />} checkedIcon={<StarIcon className='text-darkblue' />} />
                          <Checkbox className='p-0' icon={<StarBorderIcon />} checkedIcon={<StarIcon className='text-darkblue' />} />
                          <Checkbox className='p-0' icon={<StarBorderIcon />} checkedIcon={<StarIcon className='text-darkblue' />} />
                        </Box>
                        <Typography variant='body2' className='text-gray'>
                          {
                            `"I purchased a pre-owned Alto from True Value Shaheedpath. My overall experience has been wonderful. I got the kind of car I was looking for well within my budget. They have quite a wide-ranging stock of cars and the way the staff helped me throughout was quite admirable. Very satisfied with my purchase from True Value and Maruti Suzuki."`
                          }
                        </Typography>
                        <Typography variant='h6' className='font-light text-gray-400' >
                          Mrs. Krishna
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Grid container>
                  <Grid xs={12} md={12} item className='px-2 flex-class justify-between pb-4'>
                    <Typography variant='h4' fontSize={'24px'} fontWeight={'600'} >Most Compared Cars</Typography>
                    <Button className='bg-darkblue hidden md:block' variant='contained'>Compare Now</Button>
                  </Grid>
                  <Grid xs={12} sm={6} item className='px-2 my-4'>
                    <MediaCard2 imageUrl={'card-2.jpg'} cardTitle='Swift' modelYear='2020' fuelType='petrol' travelled='50000' price='200000' />
                  </Grid>
                  <Grid xs={12} sm={6} item className='px-2 my-4'>
                    <MediaCard2 imageUrl={'card-3.jpg'} cardTitle='Swift' modelYear='2020' fuelType='petrol' travelled='50000' price='200000' />
                  </Grid>
                  <Grid xs={12} md={12} item className='px-2 flex-class  pb-4 block md:hidden'>
                    <Button className='bg-darkblue ' variant='contained'>Compare Now</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Footer />
      </>
    </main>
  )
}
