import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Divider, FormControlLabel, FormGroup, Stack } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ShareIcon from '@mui/icons-material/Share';





interface MediaCardProps {
    imageUrl: string;
    cardTitle: string;
    place: string;
    modelYear: any;
    fuelType: string;
    travelled: any;
    price: any;

}
const StyledButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    color: '#000',
    fontSize: 14,
    padding: '6px 12px',
    border: '2px solid',
    lineHeight: 1.5,
    backgroundColor: '#fff',
    borderColor: '#949494',
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
        backgroundColor: '#2b3395',
        border: '2px solid',
        borderColor: '#2b3395',
        color: '#fff',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});



export default function MediaCard({ imageUrl, cardTitle, place, modelYear, fuelType, travelled, price }: MediaCardProps) {
    const [checked, setChecked] = useState(false);
    const [sharechecked, setSharechecked] = useState(false);

    const handleCheckboxChange = (event: any) => {
        setChecked(event.target.checked);
    };
    const handleCheckboxshareChange = (event: any) => {
        setSharechecked(event.target.sharechecked);
    };
    return (
        <Card elevation={5} className='relative'>
            <CardMedia
                component="img"
                sx={{ height: 240, p: 2, pb: 0 }}
                image={imageUrl}
                title="green iguana"
                className=''
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {cardTitle}
                </Typography>
                <Typography gutterBottom variant="body2" component="p">
                    {place}
                </Typography>
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                >
                    <Typography gutterBottom variant="body2" component="p">
                        {modelYear}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                        {fuelType}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                        {travelled} Km
                    </Typography>
                </Stack>
                <FormGroup>
                    <FormControlLabel control={<Checkbox/>} label="Add to compare" />
                </FormGroup>
                <Stack
                    direction="row"
                    justifyContent={'space-between'}
                    className='my-10'
                >
                    <Typography variant="h5" component="p" className='text-darkblue'>
                        {price}
                    </Typography>

                    <StyledButton size="small" className='text-capitalize' variant='outlined'>Calculate EMI</StyledButton>
                </Stack>
                <Box className='flex-class gap-2' >
                    <Button size="small" variant='contained' className='text-capitalize btn-darkblue whitespace-nowrap' fullWidth>Contact Dealer</Button>
                    <Button size="small" variant='contained' className='text-capitalize btn-darkblue-outline' fullWidth sx={{ m: 0, whiteSpace: 'nowrap' }}>Book a Test Drive</Button>
                </Box>
                <Checkbox className='absolute top-4 left-4 text-darkblue' icon={<FavoriteBorder />} checkedIcon={<Favorite />} checked={checked} onChange={handleCheckboxChange} />
                <Checkbox className='absolute top-4 right-4 ' icon={<ShareOutlinedIcon />} checkedIcon={<ShareIcon />} checked={sharechecked} onChange={handleCheckboxshareChange} />

            </CardContent>

        </Card>
    );
}