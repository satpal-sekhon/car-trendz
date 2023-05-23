import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
    Box,
    Divider,
    FormControlLabel,
    FormGroup,
    Stack,
} from "@mui/material";
import Image from 'next/image';
import Checkbox from "@mui/material/Checkbox";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import IconButton from '@mui/material/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


interface MediaCardProps {
    imageUrl: string;
    cardTitle: string;
    place: string;
    location: String;
    modelYear: any;
    fuelType: string;
    travelled: any;
    price: any;
}

export default function MediaCard({
    imageUrl,
    cardTitle,
    place,
    location,
    modelYear,
    fuelType,
    travelled,
    price,
}: MediaCardProps) {
    return (
        <Card elevation={5}>
            <CardMedia
                component="img"
                sx={{ height: 240 }}
                image={imageUrl}
                title="green iguana"
            />
            <Box className="relative z-10">
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent={'center'}
                    className="absolute -top-11 w-full "
                >
                    <Image src={'/trv-certified.png'} width={'92'} height={'19'} alt="trv-certified.png"></Image>
                    <Image src={'/i-icon.png'} width={'17'} height={'17'} alt="i-icon.png"></Image>
                </Stack>
                <Box className='btn-wrapper-hart-shear absolute -top-11 right-4 bg-white' >
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem className="c-ml-0" />}
                        spacing={2}
                        className=""
                    >
                        <IconButton aria-label="FavoriteBorderIcon" size="small" className="p-2 py-1">
                            <Checkbox className="p-0"  {...label} icon={<FavoriteBorder className="text-sm" />} checkedIcon={<Favorite className="text-sm" />} />
                        </IconButton>
                        <IconButton aria-label="ShareOutlinedIcon" size="small" className="c-ml-0 p-2 py-1">
                            <Checkbox className="p-0"  {...label} icon={<ShareOutlinedIcon className="text-sm" />} checkedIcon={<ShareOutlinedIcon className="text-sm" />} />
                        </IconButton>
                    </Stack>
                </Box>
            </Box>
            <CardContent className="relative">
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                    justifyContent={'center'}
                    className="border-b-2 text-gray-400 p-1 pt-3 absolute -top-8 w-full bg-white left-0"
                >
                    <Typography gutterBottom variant="caption" component="div">
                        1 Year Warranty
                    </Typography>
                    <Typography gutterBottom variant="caption" component="span">
                        3 Free Service
                    </Typography>
                </Stack>
                <Typography gutterBottom variant="h5" component="div" >
                    {cardTitle}
                </Typography>
                <Typography gutterBottom variant="body2" component="span" className="text-gray-600">
                    {place}
                </Typography>
                <Typography gutterBottom variant="body2" component="span" className="text-gray-600">
                    <LocationOnIcon className="c-font-size-18 ml-1" /> {location}
                </Typography>
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                    className="my-3"
                >
                    <Typography gutterBottom variant="body2" component="p" className="text-gray-500">
                        {modelYear}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p" className="text-gray-500">
                        {fuelType}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p" className="text-gray-500">
                        {travelled} Km
                    </Typography>
                </Stack>

                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent={"space-between"}
                    className="my-10"
                >
                    <Typography variant="h5" component="p" className="text-darkblue">
                        {price}
                    </Typography>

                    <Button size="small" className="text-capitalize border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white" variant="outlined" >
                        Calculate EMI
                    </Button>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent={"space-around"}
                    className="my-6"
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    <Box className='flex items-center justify-center flex-col'>
                        <Image src="/about-car.png" width='36' height='36' alt='about-car.png'></Image>
                        <Typography variant="caption" className="text-gray">About car</Typography>

                    </Box>
                    <Box className='flex items-center justify-center flex-col'>
                        <Image src="/compare-cars.png" width='36' height='36' alt='about-car.png'></Image>
                        <Typography variant="caption" className="text-gray">compare car</Typography>
                    </Box>
                    <Box className='flex items-center justify-center flex-col'>
                        <Image src="/smart-finance.png" width='36' height='36' alt='about-car.png'></Image>
                        <Typography variant="caption" className="text-gray">compare car</Typography>
                    </Box>
                </Stack>
                <Box className="flex-class gap-10">
                    <Button
                        size="small"
                        variant="contained"
                        className="border-2 text-capitalize btn-darkblue-outline shadow-none"
                        fullWidth
                    >
                        Contact Dealer
                    </Button>
                    <Button
                        size="small"
                        variant="contained"
                        className="border-2 text-capitalize btn-darkblue shadow-none"
                        fullWidth
                        sx={{ m: 0, whiteSpace: "nowrap" }}
                    >
                        Book a Test Drive
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}
