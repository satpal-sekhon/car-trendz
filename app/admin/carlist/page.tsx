"use client"
import React, { useState, ChangeEvent } from 'react'
import ResponsiveDrawer from '@/components/DashboardSiderbar'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import ScrollToTop from '@/components/ScrollToTop';
import Image from 'next/image';
import Footer from '@/components/dasboardFooter';


export default function Page() {
    const city = ["Ambala", "Delhi", "mohali", 'Goa', 'Kurukshetra']
    const brand = ["BMW", "Alto 800", "verna", 'Swift', 'Mahindra']
    const fuel = ["CNG", "Petrol", "Desiel", 'Battery']
    const Modal = ["2010", "2011", "2012", '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
    const budget = ["0-2 lakh", "2-4 lakh", "4-6 lakh", '6-8 lakh', '8lakh +']
    const certificate = ["True Value Certified", "Smart Finance Available", "Remove Booked Cars"]
    const bodyType = ["HATCHBACK", "SEDAN", "VAN", "SUV", "MUV"]
    const carAge = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "More then 10+"]
    const Owner = ["1", "2", "2+ owner"]
    const Kilometers = ["10k km", "25k km", "50k km", "75k km", "75+k km"];
    const Colors = ["red", "blue", "green", "yellow", 'purple']
    const Transmission = ["Automatic", "Maual"]


    const [fileArray, setFileArray] = useState<string[]>([]);

    const uploadMultipleFiles = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            const fileUrls = files.map((file) => URL.createObjectURL(file));
            setFileArray(fileUrls);
        }
    };

    const uploadFiles = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(fileArray);
    };

    return (

        <div>
            <ResponsiveDrawer />
            <div className='content-wrapper c-dashboard-bg-color'>
                <div className='relative '>
                    <div className=' h-[320px] c-bg-color-profile'>
                        <Image className='h-full' src={'/dasktop-banner-image.jpg'} width={'1500'} height={'320'} alt='background image'></Image>
                    </div>
                </div>
                <div className='p-4 relative -top-16 z-10 bg-white md:mx-10 mx-4 rounded'>
                    <Grid container spacing={2}>

                        <Grid item xs={12} md={4}>
                            <TextField
                                id=""
                                select
                                label="Location"
                                fullWidth
                                className='bg-white'
                            >
                                {city.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                id=""
                                select
                                label="Brand"
                                fullWidth
                                className='bg-white'
                            >
                                {brand.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                id=""
                                select
                                label="Colors"
                                fullWidth
                                className='bg-white'
                            >
                                {Colors.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                id=""
                                select
                                label="Fuel Type"
                                fullWidth
                                className='bg-white'
                            >
                                {fuel.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                id=""
                                select
                                label="Modal"
                                fullWidth
                                className='bg-white'
                            >
                                {Modal.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                id=""
                                select
                                label="budget"
                                fullWidth
                                className='bg-white'
                            >
                                {budget.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                id=""
                                select
                                label="certificate"
                                fullWidth
                                className='bg-white'
                            >
                                {certificate.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                id=""
                                select
                                label="body Type"
                                fullWidth
                                className='bg-white'
                            >
                                {bodyType.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                id=""
                                select
                                label="Car Age"
                                fullWidth
                                className='bg-white label-wrapper'
                            >
                                {carAge.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                id=""
                                select
                                label="Owner"
                                fullWidth
                                className='bg-white'
                            >
                                {Owner.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                id=""
                                select
                                label="Kilometers Driven"
                                fullWidth
                                className='bg-white'
                            >
                                {Kilometers.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                id=""
                                select
                                label="Transmission"
                                fullWidth
                                className='bg-white'
                            >
                                {Transmission.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                </div>
                <div className='p-4 relative -top-16 z-10 bg-white md:mx-10 mx-4 rounded mt-4'>
                    <form>
                        <Grid container spacing={2} className=''>
                            <Grid item xs={12} >
                                <Typography variant='h5'>Please select your car Image </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="form-group">
                                    <input
                                        type="file"
                                        className="form-control w-full text-sm"
                                        onChange={uploadMultipleFiles}
                                        multiple
                                        
                                    />
                                </div>
                                <Typography variant='caption'>Please press control to select multipal image </Typography>
                            </Grid>
                            <Grid item xs={12} md={6} className='text-right'>
                                <button
                                    type="button"
                                    className="bg-darkblue text-white hover:bg-blue-700 py-1 px-3 rounded"
                                    onClick={uploadFiles}
                                >
                                    Upload
                                </button>

                            </Grid>
                            {fileArray && fileArray.length > 0 &&
                                <Grid item xs={12} >
                                    <div className="form-group multi-preview my-2">
                                        <Grid container spacing={2} className='my-4'>
                                            {fileArray.map((url) => (
                                                <Grid key={url} item xs={12} md={4} >
                                                    <img src={url} className='w-full h-[250px]' alt="..." />
                                                </Grid>
                                            ))}

                                        </Grid>
                                    </div>
                                </Grid>
                            }
                        </Grid>
                    </form>
                </div>
            </div>
                <Footer />
            <ScrollToTop />
        </div>
    )
}
