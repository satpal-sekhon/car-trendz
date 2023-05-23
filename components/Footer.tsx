
import Image from 'next/image';

import { Box, Checkbox, Container, Grid, Typography } from '@mui/material';

import Link from 'next/link';



export default function Footer() {
    return (
        <>
            <Box className="bg-darkblue px-4">
                <Grid container >
                    <Grid item xs={12} lg={9} className='footer-head flex-class justify-start' >
                        <Box className='mr-2'>
                            <Image className='hidden md:block' src='/DesktopNewImage.png' width={'138'} height={'117'} alt='DesktopNewImage'></Image>
                            <Image className='block md:hidden' src='/mobile-mobileNew.png' width={'145'} height={'201'} alt='mobile-mobileNew'></Image>
                        </Box>
                        <Box className='flex-class gap-10 flex-col md:flex-row'>
                            <Box padding={'10px 0 0 20px'}>
                                <Typography className='text-white c-line-height-10' fontSize={'12px'} variant='body2'>Want to have over 10,000 cars to choose from, right at your fingertips?  </Typography>
                                <Typography className='text-white' variant='body1' fontWeight={'600'}>Download the True Value app now!</Typography>
                            </Box>
                            <Box className='flex-class gap-10 flex-col sm:flex-row'>
                                <Image className='w-[100px] h-[30px] md:w-36 md:h-11' src={'/app1.png'} width={'145'} height={'45'} alt=''></Image>
                                <Image className='w-[100px] h-[30px] md:w-36 md:h-11' src={'/app2.png'} width={'145'} height={'45'} alt=''></Image>
                            </Box>
                        </Box>
                    </Grid>
                    <h1>hello</h1>
                    <Grid item xs={3} className='footer-head items-center justify-center hidden lg:flex' >
                        <Typography variant='body1' className='text-white mr-10' fontWeight={'600'}>Connect with us</Typography>
                        <Image src={'/facebook.png'} className='mr-10' width={'33'} height={'33'} alt=''></Image>
                        <Image src={'/instagram.png'} className='mr-10' width={'33'} height={'33'} alt=''></Image>
                        <Image src={'/twitter.png'} className='mr-10' width={'33'} height={'33'} alt=''></Image>
                    </Grid>
                </Grid>
            </Box>
            <Box className='section-bg-color  p-5 pb-2'>
                <Grid container>
                    <Grid item xs={12} md={9}>
                        <Grid container>
                            <Grid item xs={6} md={3} >
                                <Link href={'/'} className='text-decoration-none'>
                                    <Typography variant='body2' className='footer-text'>EMI Calculator</Typography>
                                </Link>
                                <Link href={'/'} className='text-decoration-none'>
                                    <Typography variant='body2' className='footer-text'>True Value Advantage</Typography>
                                </Link>
                                <Link href={'/'} className='text-decoration-none'>
                                    <Typography variant='body2' className='footer-text'>Site Map</Typography>
                                </Link>
                                <Link href={'/'} className='text-decoration-none'>
                                    <Typography variant='body2' className='footer-text'>Showroom Locator</Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <Link href={'/'} className='text-decoration-none'>
                                    <Typography variant='body2' className='footer-text'>Complaint</Typography>
                                </Link>
                                <Link href={'/'} className='text-decoration-none'>
                                    <Typography variant='body2' className='footer-text'>About True Value</Typography>
                                </Link>
                                <Link href={'/'} className='text-decoration-none'>
                                    <Typography variant='body2' className='footer-text'>True Value Hub</Typography>
                                </Link>
                                <Link href={'/'} className='text-decoration-none'>
                                    <Typography variant='body2' className='footer-text'>Blog</Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <Link href={'/'} className='text-decoration-none'>
                                    <Typography variant='body2' className='footer-text'>Careers</Typography>
                                </Link>
                                <Link href={'/'} className='text-decoration-none'>
                                    <Typography variant='body2' className='footer-text'>Contact us</Typography>
                                </Link>
                                <Link href={'/'} className='text-decoration-none'>
                                    <Typography variant='body2' className='footer-text'>FAQs</Typography>
                                </Link>
                                <Link href={'/'} className='text-decoration-none'>
                                    <Typography variant='body2' className='footer-text'>Feedback</Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <Link href={'/'} className='text-decoration-none'>
                                    <Typography variant='body2' className='footer-text'>Buy</Typography>
                                </Link>
                                <Link href={'/'} className='text-decoration-none'>
                                    <Typography variant='body2' className='footer-text'>Sell</Typography>
                                </Link>
                                <Link href={'/'} className='text-decoration-none'>
                                    <Typography variant='body2' className='footer-text'>Finance</Typography>
                                </Link>
                                <Link href={'/'} className='text-decoration-none'>
                                    <Typography variant='body2' className='footer-text'>Privacy Policy</Typography>
                                </Link>
                                <Link href={'/'} className='text-decoration-none'>
                                    <Typography variant='body2' className='footer-text'>Terms Of Use</Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={3} className='hidden md:block'>
                        <Link href={'/'} className='text-decoration-none'>
                            <Typography textAlign={'right'} className='flex-class justify-end gap-10 font-weight-600'><Image src={'/call.png'} width={'33'} height={'33'} alt='phone logo'></Image> 18001021800</Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={3} >
                    <Typography variant='caption' component={'p'}>*The content and information available on this website is limited to the sales and services offered by Maruti Suzuki India Limited in the jurisdiction of India only.</Typography>
                    <Typography variant='caption'>*The outlet and city count is as on April 30, 2023</Typography>
                    <Typography variant='body1' fontWeight={'600'} mt={3}>*Caution: Beware of Fake Promotions or Offers</Typography>
                    <Typography variant='caption'>
                        Please do not believe or engage with any promotional messages (SMS) or Web-link which ask you to click on a link and fill in your details to win a Maruti Suzuki car. These SMS or Web-link based offers are fake, and Maruti Suzuki India Limited bears no liability or responsibility whatsoever for any such communication which is fraudulent or misleading in nature.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ borderTop: '1px solid #999' }}>
                {/* <Container maxWidth="xl" > */}
                    <Box className='flex-class justify-center md:justify-between md:my-[10px]' p={2}>
                        <Typography variant='caption' className='font-semibold md:font-normal'>All Rights Reserved. © 2019 Maruti Suzuki India Limited</Typography>
                        <Typography variant='caption' className='hidden md:block'>Head Office : Maruti Suzuki True Value, 1, Nelson Mandela Road, Vasant Kunj , New Delhi- 110070</Typography>
                    </Box>
                {/* </Container> */}
            </Box>
        </>
    )
}
