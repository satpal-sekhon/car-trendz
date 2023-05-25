"use client"
import React from 'react'
import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, FormHelperText, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Link from 'next/link';
import Footer from '@/components/Footer';
import TopAppBar from '@/components/TopAppBar';
import HeaderMiddle from '@/components/HeaderMiddle';
import DrawerAppBar from '@/components/DrawerAppBar';
import MediaCard3 from '@/components/card3';
import EditNoteIcon from '@mui/icons-material/EditNote';





export default function Home() {
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    'https://example.com/image4.jpg',
  ];

  const carouselOptions = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true,
  };

  return (
    <>
      <TopAppBar />
      <HeaderMiddle />
      <DrawerAppBar />
      <Container maxWidth="2xl" >
        <div>
          <Grid container spacing={2} className='my-40'>
            <Grid xs={12} lg={6} item className='p-4'>
              <Typography variant='h4' fontWeight={'600'} component={'h2'}>Contact us</Typography>
              <Typography variant='body1'>
              Welcome to our car dealing website! We are thrilled to assist you in finding your dream car. At maruti suzuki, we understand the importance of excellent customer service, and our Contact Us page is designed to provide you with a seamless experience. Our dedicated team of professionals is here to answer any questions you may have regarding our inventory, financing options, or trade-in process. Whether you prefer to call, email, or fill out the convenient contact form, we promise to respond promptly and offer personalized guidance. Trust us to make your car buying journey enjoyable and stress-free. Contact us today and lets get started!
              </Typography>
            </Grid>
            <Grid xs={12} lg={6} item className='box-shadow-1 p-4 rounded-lg bg-white'>
              <Typography className='car-detail-form-heading text-center' variant='h5'>Enter your car details for a hassle-free experience</Typography>
              <Grid container spacing={2}>
                <Grid xs={12} md={4} item className=''>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle className="mr-2 text-darkblue" />
                    <TextField id="" label="Name" variant="standard" fullWidth />
                  </Box>
                </Grid>
                <Grid xs={12} md={4} item className=''>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <EmailIcon className="mr-2 text-darkblue" />
                    <TextField id="" label="Email" variant="standard" fullWidth />
                  </Box>
                </Grid>
                <Grid xs={12} md={4} item className=''>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <WifiCalling3Icon className="mr-2 text-darkblue" />
                    <TextField id="" label="Mobile Number" variant="standard" fullWidth />
                  </Box>
                </Grid>
                <Grid xs={12} md={4} item className=''>
                  <FormControl variant="standard" fullWidth>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      <AppRegistrationIcon className="mr-2 text-darkblue" />
                      <TextField id="" label="Registration Number" variant="standard" fullWidth />
                    </Box>
                    <FormHelperText id="component-helper-text" className='ml-20 w-full' >
                      Please enter without any space
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid xs={12} lg={9} item className='my-2 lg:m-0'>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox className='text-darkblue'/>} label={<Typography className='text-sm md:text-md'> I authorize Maruti Suzuki India Ltd. or its partners to call me. Please read our <Link href={'/'}>Privacy Policy</Link></Typography>} />
                  </FormGroup>
                </Grid>
                <Grid xs={12} lg={3} item className='my-2 lg:m-0'>
                  <Button variant='contained' fullWidth className='bg-darkblue '>Submit</Button>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </div>
        <Box>
          <Typography variant='h5' fontWeight={'600'} gutterBottom>Get True Value For Your Car</Typography>
          <Typography variant='body2' fontSize={'13px'} gutterBottom >From free home evaluation to complete documentation Maruti Suzuki True Value takes care of everything. Watch the videos to know the benefits of selling car at Maruti Suzuki True Value.</Typography>
          <Grid container spacing={2} className='my-20'>
            <Grid item xs={12} sm={6} md={4} className='flex'>
              <MediaCard3 imageUrl={'ritz.png'} cardTitle='Swift' description='Making an informed decision is imperative for every car seller to get the right price for their car. Book an evaluation for your pre-owned vehicle now.' />
            </Grid>
            <Grid item xs={12} sm={6} md={4} className='flex'>
              <MediaCard3 imageUrl={'ritz.png'} cardTitle='Easy RC Transfer' description='Watch how Rajkumar Rao steered clear of the tall claims from his relatives and sold his car at a fair price.' />
            </Grid>
            <Grid item xs={12} sm={6} md={4} className='flex'>
              <MediaCard3 imageUrl={'ritz.png'} cardTitle='On-Time Payment' description='Why settle for late payment excuses when you can settle a deal with True Value, and get on-time payment for your used car.' />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography variant='h5' fontWeight={'600'} gutterBottom>Maruti Suzuki True Value – Get the Fair Price for Your Used Car</Typography>
          <Typography variant='body2' fontSize={'13px'}>Maruti Suzuki True Value offers you the easiest, most convenient, and the most trustworthy online platform, as well as outlets, to help you sell your second hand car. With the True Value Advantage, you can be assured of thorough used car evaluation processes that are put in place to ensure that you can get the transparent price for your pre-owned cars.</Typography>
          <Typography variant='body2' fontSize={'13px'} gutterBottom pb={2}>At Maruti Suzuki True Value, the process to sell your car starts online as you book an evaluation for your pre-owned vehicle. The process for selling a car at Maruti Suzuki True Value is thorough, yet has been kept simple for your convenience. Right from the detailed evaluation of the old car and providing a fair and transparent price using an AI-based scientific pricing engine to completing the documentation and post-sale formalities - the dedicated relationship officers at Maruti Suzuki True Value take care of everything for you.</Typography>

        </Box>
        <Box>
          <Typography variant='h5' fontWeight={'600'} gutterBottom>Meet Our AI-Based Scientific Pricing Engine</Typography>
          <Typography variant='body2' fontSize={'13px'}>Getting the right price and figuring out how much your car is worth is something that worries every person who wants to sell their used car. Offering the right way to sell a car online, Maruti Suzuki True Value promises an easy and completely transparent platform for car owners. Instead of scouring car selling websites to guess the value of the second-hand car you want to sell, allow Maruti Suzuki True Value’s AI-based, scientific pricing engine to provide you with a fair and transparent price for your car!</Typography>
          <Typography variant='body2' fontSize={'13px'}>When you sell your old car, all you need to do is provide the registration details and information about its condition and our pricing engine will do the rest*. The AI-based pricing engine assesses market trends in real-time to see price fluctuations in the second-hand car market. Based on the market analysis and the condition of your car, its year of manufacture, the number of owners, details about the car, like its colour, model, variant, kilometres covered, etc., the pricing engine will return an estimate of the price at which you can sell your old car.</Typography>
          <Typography variant='body2' fontSize={'13px'} gutterBottom pb={2}>You can also book an online evaluation before you sell your car. Once you do this, the evaluator will visit you for a physical evaluation of the car. At Maruti Suzuki True Value, cars also undergo a digital evaluation on 376 quality checks that cover every aspect of the car to offer an accurate estimated value when you sell your second-hand car with Maruti Suzuki True Value.</Typography>
          <Grid container spacing={2} className='my-20'>
            <Grid item xs={12} sm={6} md={4} className='flex'>
              <MediaCard3 imageUrl={'Ai-1.png'} cardTitle='At Home Evaluation' description='We help ensure that selling your car is a comfortable process. All you have to do is submit your details for the ‘Request for Evaluation’ to opt for our free doorstep Evaluation service. We’ll take care of the rest.' />
            </Grid>
            <Grid item xs={12} sm={6} md={4} className='flex'>
              <MediaCard3 imageUrl={'Ai-2.png'} cardTitle='Hassle Free' description='Selling a pre-owned car becomes hassle-free when all the paperwork is in place. At Maruti Suzuki True Value, we take complete care of the documentation so that your car selling experience is a convenient one.' />
            </Grid>
             <Grid item xs={12} sm={6} md={4} className='flex'>
              <MediaCard3 imageUrl={'Ai-3.png'} cardTitle='AI Based Scientific Engine' description='Maruti Suzuki True Value’s AI based scientific pricing engine is based on several parameters that help us arrive at the most accurate price for your car.' />
            </Grid>
          </Grid>

        </Box>
        <Box>
          <Typography variant='h5' fontWeight={'600'} my={2} gutterBottom>Frequently asked questions (FAQs)</Typography>
          <Grid container>
            <Grid item xs={12} md={6} paddingRight={4}>
              <Typography variant='body1' gutterBottom fontWeight={'600'}>Where can I get my car evaluated?</Typography>
              <Typography variant='body2' className='text-gray' gutterBottom pb={2}>Experience complete ease when you sell your old car to Maruti Suzuki True Value. An online evaluation can be booked with ease using the Maruti Suzuki True Value app or website. After you submit your details to ‘Request for Evaluation’, you can either go for a doorstep evaluation or get your car evaluated at the nearest Maruti Suzuki True Value outlet.</Typography>
              <Typography variant='body1' gutterBottom fontWeight={'600'}>What is the procedure to get my car evaluated?</Typography>
              <Typography variant='body2' className='text-gray' gutterBottom pb={2}>You can visit the Maruti Suzuki True Value website or use the app to book an evaluation online to sell your car. What’s more, you can either opt for a doorstep evaluation or get it done at your nearest Maruti Suzuki True Value outlet.</Typography>
              <Typography variant='body1' gutterBottom fontWeight={'600'}>What all do you check during a pre-owned car evaluation?</Typography>
              <Typography variant='body2' className='text-gray' gutterBottom pb={2}>Maruti Suzuki True Value has an exhaustive checklist of 376 quality checkpoints for the digital evaluation of pre-owned cars. The evaluation includes a thorough inspection of the exteriors, interiors, structural damage, and engine for mechanical wear and tear, and more, ensuring you get nothing less than the right way to sell a car.</Typography>
              <Typography variant='body1' gutterBottom fontWeight={'600'}>Do I need to pay any additional charges or commissions when getting my car evaluated, or selling to Maruti Suzuki True Value?</Typography>
              <Typography variant='body2' className='text-gray' gutterBottom pb={2}>No. You do not need to pay any additional charges or commissions when you get your car evaluated or when you sell your car at a Maruti Suzuki True Value outlet.</Typography>
              <Typography variant='body1' gutterBottom fontWeight={'600'}>How will you ensure that I am getting the right price?</Typography>
              <Typography variant='body2' className='text-gray' gutterBottom pb={2}>What makes Maruti Suzuki True Value the good place to sell a preowned car is our transparent pricing process. We utilise an AI-based scientific pricing engine that takes the condition of the car, its year of manufacture, model, colour, etc. into consideration and performs a real-time assessment of prevalent market trends to monitor price fluctuations and returns an accurate estimate for your car’s value. Our digital evaluation process with 376 checkpoints ensures a thorough assessment of the car’s condition as well.</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='body1' gutterBottom fontWeight={'600'}>How will you ensure that the process is hassle-free?</Typography>
              <Typography variant='body2' className='text-gray' gutterBottom pb={2}>Once you decide to sell your car to Maruti Suzuki True Value, our professionals evaluate your car as per the defined process and our Ai-based pricing engine provides you with a fair and transparent price, based on the car’s condition and prevalent market trends. Thereafter, we make the payment in full, allowing you to sell your car instantly.</Typography>
              <Typography variant='body1' gutterBottom fontWeight={'600'}>What happens to my car once I sell it to Maruti Suzuki True Value?</Typography>
              <Typography variant='body2' gutterBottom pb={2}>Once you sell your car to Maruti Suzuki True Value, it undergoes a stringent quality assessment, followed by a refurbishment process, to ensure that it is in top condition. After that, it will be put on sale.</Typography>
              <Typography variant='body1' gutterBottom fontWeight={'600'}>In how much time will I get my money after selling my car?</Typography>
              <Typography variant='body2' className='text-gray' gutterBottom pb={2}>The payment is made at the earliest** and in full once the seller’s, i.e., your bona fides are verified at the RTO.</Typography>
              <Typography variant='body1' gutterBottom fontWeight={'600'}>Is it necessary to have valid insurance on my car at the time of selling?</Typography>
              <Typography variant='body2' className='text-gray' gutterBottom pb={2}>Car Insurance is mandated by law. So, when you sell your car, whether it is an old car you have or a relatively new one, it is always ideal that your car is insured</Typography>
              <Typography variant='body1' gutterBottom fontWeight={'600'}>My car is hypothecated to the bank I took the loan from. Can I still sell it?</Typography>
              <Typography variant='body2' className='text-gray' gutterBottom pb={2}>If your car is hypothecated to the loan providing bank, you can only sell the car once you have repaid the loan amount in full and received the hypothecation removed.</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body2' className='text-gray' gutterBottom>*The pricing engine only provides price estimates for Maruti Suzuki cars. For cars from other brands, users will be required to select their car (from a drop-down or by entering it if not mentioned in the drop-down.</Typography>
              <Typography variant='body2' className='text-gray' gutterBottom>**The time frame for payment is provided at the True Value outlet at the time of dealing.</Typography>

            </Grid>
          </Grid>


        </Box>

      </Container>
      <Footer />
      <div className='fixed bottom-2 sm:bottom-10 right-2 sm:right-10'>
        <Button className='btn-float-right px-5 py-2 capitalize' startIcon={<EditNoteIcon />} variant='contained'>Enquire <Box className='hidden sm:block ml-1' component={'span'}>Now</Box> </Button>
      </div>
    </>
  )
}
