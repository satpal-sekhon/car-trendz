"use client"
import DrawerAppBar from '@/components/DrawerAppBar'
import HeaderMiddle from '@/components/HeaderMiddle'
import TopAppBar from '@/components/TopAppBar'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import { Container } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundImage: 'url(https://s7template.com/tf/carace/assets/img/other/bredcrumb-bg.png)',
    width: '100%',
    height: '500px',
    // Use theme breakpoints
    [theme.breakpoints.down('sm')]: {
        height: '300px',
    },
}));
const CardBox = styled(Box)(({ theme }) => ({
    borderRadius: '8px',
    padding: '20px',
    WebkitTransition: 'backgroundImage 2s ease-out',
    MozTransition: 'backgroundImage 2s ease-out',
    OTransition: 'backgroundImage 2s ease-out',
    transition: 'backgroundImage 2s ease-out',
    boxShadow: '0 0 4px #999',
    backgroundImage: 'none',
    position: 'relative',
    '&:hover': {
        backgroundImage: 'url(https://s7template.com/tf/carace/assets/img/other/bredcrumb-bg.png)',
        transition: 'backgroundImage 2s ease-out',
        '& > button, & .card-text': {
            color: '#fff',
            borderColor: '#fff'
        },
        
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#00000030',
        top: 0,
        left: 0,
        borderRadius: '8px',
        transition: 'opacity 0.5s ease',
        opacity: 0,

    },

    '&:hover::after': {
        opacity: 1,
    },
    [theme.breakpoints.down('sm')]: {

    },
}));
const StyledButton = styled(Button)(({ theme }) => ({
    color: '#999',
    borderRadius: '50%',
    border: '2px solid #999',
    padding: '15px',
    transition: 'all .3s',
    '&:hover': {
        transform: 'scale(1.1)', // Apply scale transform on hover
    },
    [theme.breakpoints.down('sm')]: {

    },
}));

export default function page() {
    return (
        <div>
            <TopAppBar />
            <HeaderMiddle />
            <DrawerAppBar />
            <StyledBox className=''>
                <div className='breadcrumb-area '>
                    <Box className='relative z-10'>
                        <Typography variant='h3' color={'common.white'}>Our Services</Typography>
                    </Box>
                </div>
            </StyledBox>

            <div>
                <Container maxWidth="xl" className=''>

                    <Grid container justifyContent={'center'}>
                        <Grid item xs={6} >
                            <Typography variant='h3'>Provide our best services</Typography>
                            <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className='my-8'>
                        <Grid item xs={4} >
                            <CardBox className={'py-15 px-9 text-center'} >
                                <Box className="flex items-center justify-center my-4">
                                    <Image src={'/1.png'} width={'50'} height={'50'} alt=''></Image>
                                </Box>
                                <Typography variant='h5' fontWeight={'600'} textAlign={'center'} className='my-4 card-text'>Engin Repair</Typography>
                                <Typography variant='body1' textAlign={'center'} className='my-6 card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </Typography>
                                <StyledButton><NavigateNextIcon /></StyledButton>
                            </CardBox>
                        </Grid>
                        <Grid item xs={4} >
                            <CardBox className={'py-15 px-9 text-center'} >
                                <Box className="flex items-center justify-center my-4">
                                    <Image src={'/2.png'} width={'50'} height={'50'} alt=''></Image>
                                </Box>
                                <Typography variant='h5' fontWeight={'600'} textAlign={'center'} className='my-4 card-text'>Engin Repair</Typography>
                                <Typography variant='body1' textAlign={'center'} className='my-6 card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </Typography>
                                <StyledButton><NavigateNextIcon /></StyledButton>
                            </CardBox>
                        </Grid>
                        <Grid item xs={4} >
                            <CardBox className={'py-15 px-9 text-center'} >
                                <Box className="flex items-center justify-center my-4">
                                    <Image src={'/3.png'} width={'50'} height={'50'} alt=''></Image>
                                </Box>
                                <Typography variant='h5' fontWeight={'600'} textAlign={'center'} className='my-4 card-text'>Engin Repair</Typography>
                                <Typography variant='body1' textAlign={'center'} className='my-6 card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </Typography>
                                <StyledButton><NavigateNextIcon /></StyledButton>
                            </CardBox>
                        </Grid>
                        <Grid item xs={4} >
                            <CardBox className={'py-15 px-9 text-center'} >
                                <Box className="flex items-center justify-center my-4">
                                    <Image src={'/4.png'} width={'50'} height={'50'} alt=''></Image>
                                </Box>
                                <Typography variant='h5' fontWeight={'600'} textAlign={'center'} className='my-4 card-text'>Engin Repair</Typography>
                                <Typography variant='body1' textAlign={'center'} className='my-6 card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </Typography>
                                <StyledButton><NavigateNextIcon /></StyledButton>
                            </CardBox>
                        </Grid>
                        <Grid item xs={4} >
                            <CardBox className={'py-15 px-9 text-center'} >
                                <Box className="flex items-center justify-center my-4">
                                    <Image src={'/1.png'} width={'50'} height={'50'} alt=''></Image>
                                </Box>
                                <Typography variant='h5' fontWeight={'600'} textAlign={'center'} className='my-4'>Engin Repair</Typography>
                                <Typography variant='body1' textAlign={'center'} className='my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </Typography>
                                <StyledButton><NavigateNextIcon /></StyledButton>
                            </CardBox>
                        </Grid>
                        <Grid item xs={4} >
                            <CardBox className={'py-15 px-9 text-center'} >
                                <Box className="flex items-center justify-center my-4">
                                    <Image src={'/1.png'} width={'50'} height={'50'} alt=''></Image>
                                </Box>
                                <Typography variant='h5' fontWeight={'600'} textAlign={'center'} className='my-4 card-text'>Engin Repair</Typography>
                                <Typography variant='body1' textAlign={'center'} className='my-6 card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </Typography>
                                <StyledButton><NavigateNextIcon /></StyledButton>
                            </CardBox>
                        </Grid>
                        <Grid item xs={4} >
                            <CardBox className={'py-15 px-9 text-center'} >
                                <Box className="flex items-center justify-center my-4">
                                    <Image src={'/1.png'} width={'50'} height={'50'} alt=''></Image>
                                </Box>
                                <Typography variant='h5' fontWeight={'600'} textAlign={'center'} className='my-4 card-text'>Engin Repair</Typography>
                                <Typography variant='body1' textAlign={'center'} className='my-6 card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </Typography>
                                <StyledButton><NavigateNextIcon /></StyledButton>
                            </CardBox>
                        </Grid>
                        <Grid item xs={4} >
                            <CardBox className={'py-15 px-9 text-center'} >
                                <Box className="flex items-center justify-center my-4">
                                    <Image src={'/1.png'} width={'50'} height={'50'} alt=''></Image>
                                </Box>
                                <Typography variant='h5' fontWeight={'600'} textAlign={'center'} className='my-4 card-text'>Engin Repair</Typography>
                                <Typography variant='body1' textAlign={'center'} className='my-6 card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </Typography>
                                <StyledButton><NavigateNextIcon /></StyledButton>
                            </CardBox>
                        </Grid>
                        <Grid item xs={4} >
                            <CardBox className={'py-15 px-9 text-center'} >
                                <Box className="flex items-center justify-center my-4">
                                    <Image src={'/1.png'} width={'50'} height={'50'} alt=''></Image>
                                </Box>
                                <Typography variant='h5' fontWeight={'600'} textAlign={'center'} className='my-4 card-text'>Engin Repair</Typography>
                                <Typography variant='body1' textAlign={'center'} className='my-6 card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </Typography>
                                <StyledButton><NavigateNextIcon /></StyledButton>
                            </CardBox>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}
