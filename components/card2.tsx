import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Divider, FormControlLabel, FormGroup, Stack } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';


interface MediaCardProps {
    imageUrl: string;
    cardTitle: string;
    modelYear: any;
    fuelType: string;
    travelled: any;
    price: any;

}


export default function MediaCard2({ imageUrl, cardTitle, modelYear, fuelType, travelled, price }: MediaCardProps) {
    return (
        <Card  elevation={2}>
            <CardMedia
                component="img"
                sx={{ height: 200 }}
                image={imageUrl}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {cardTitle}
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
               
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent={'space-between'}
                    className='my-10'
                >
                    <Typography variant="h5" component="p" className='text-darkblue'>
                        {price}
                    </Typography>

                    <Button size="small" className='text-capitalize' variant='outlined'>Calculate EMI</Button>
                </Stack>
                
            </CardContent>
        </Card>
    );
}