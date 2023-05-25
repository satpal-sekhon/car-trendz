import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <div className=' md:ml-[239px]'>
            <Stack direction={'row'} className='justify-between bg-white py-2 px-2 mt-2 flex-col md:flex-row items-center'>
                <Typography variant='body1'>2023 © Velzon.</Typography>
                <Typography variant='body1'>Design & Develop by Themesbrand</Typography>
            </Stack>
        </div>
    )
}
