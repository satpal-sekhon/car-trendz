import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


interface MediaCardProps {
    imageUrl: string;
    cardTitle: string;
    description: string;

}


export default function MediaCard3({ imageUrl, cardTitle, description}: MediaCardProps) {
    return (
        <Card className='border flex-1' >
            <CardMedia
                component="img"
                sx={{ height: 200,p:2,pb:0 }}
                image={imageUrl}
                title="green iguana"
                className='object-fill'
            />
            <CardContent>
                <Typography gutterBottom fontWeight={600} variant="h5" component="div" className='text-darkblue'>
                    {cardTitle}
                </Typography>
                <Typography gutterBottom variant="body2" component="p" className='text-gray'>
                    {description}
                </Typography>
               
            </CardContent>
        </Card>
    );
}