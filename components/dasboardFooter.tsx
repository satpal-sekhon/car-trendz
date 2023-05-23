import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <div>
            <Stack direction={'row'} className='justify-between bg-white py-2 px-2 mt-2'>
                <Typography variant='body1'>2023 © Velzon.</Typography>
                <Typography variant='body1'>Design & Develop by Themesbrand</Typography>
            </Stack>
        </div>
    )
}
