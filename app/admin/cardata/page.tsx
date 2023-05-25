"use client"
import React from 'react'
import ResponsiveDrawer from '@/components/DashboardSiderbar'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Avatar from '@mui/material/Avatar';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import Link from 'next/link';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { DataGrid } from "@mui/x-data-grid";
import { Card, CardHeader } from "@mui/material";
import PostAddIcon from '@mui/icons-material/PostAdd';
import ScrollToTop from '@/components/ScrollToTop';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Footer from '@/components/dasboardFooter';




export default function Page() {

  const cardatacolumns = [
    { field: "id", headerName: "ID", width: 40 },
    {
      field: "user",
      headerName: "User",
      width: 150,
      renderCell: (params: any) => {
        console.log(params);
        return (
          <>
            <Avatar src={params.value.avatar} />
            {params.value.username}
          </>
        );
      }
    },
    { field: "Location", headerName: "Location", width: 150 },
    {
      field: "Order",
      headerName: "Order",
      width: 120
    },
    {
      field: "brand",
      headerName: "brand",
      width: 120
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 150
    },
    {
      field: "modal",
      headerName: "Modal",
      width: 120
    },
    {
      field: "kilometer",
      headerName: "kilometer driven",
      width: 150
    },
    {
      field: "Transmission",
      headerName: "Transmission",
      width: 120
    },
    {
      field: "carage",
      headerName: "car Age",
      width: 120
    },
    {
      field: "Button",
      headerName: "Button",
      width: 150,
      renderCell: () => (
        <Button variant="outlined" color="primary">
          View More
        </Button>
      )
    }
  ];

  const cardatarow = [
    {
      id: 1,
      user: {
        username: "Potter",
        avatar:
          "https://themesbrand.com/velzon/html/default/assets/images/products/img-1.png"
      },
      Location: "Ambala",
      Order: "Active",
      brand: "BMW",
      amount: "$120",
      modal: '2016',
      kilometer: '10000',
      Transmission: 'Automatic',
      carage: '4',
    },
    {
      id: 2,
      user: {
        username: "Harry",
        avatar:
          "https://themesbrand.com/velzon/html/default/assets/images/products/img-2.png"
      },
      Location: "Delhi",
      Order: "Active",
      brand: "verna",
      amount: "$120",
      modal: '2010',
      kilometer: '20000',
      Transmission: 'Automatic',
      carage: '6',
    },
    {
      id: 3,
      user: {
        username: "Peter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png"
      },
      Location: "Goa",
      Order: "Active",
      brand: "Honda",
      amount: "$120",
      modal: '2013',
      kilometer: '75000',
      Transmission: 'Manual',
      carage: '8',
    },
    {
      id: 4,
      user: {
        username: " Anna",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png"
      },
      Location: "Ambala",
      Order: "Active",
      brand: "Hero",
      amount: "$120",
      modal: '2017',
      kilometer: '75000+',
      Transmission: 'Manual',
      carage: '5',
    },
  ];
  return (
    <div>
      <ResponsiveDrawer />
      <div className='content-wrapper p-4 c-dashboard-bg-color h-full'>
        <Grid container spacing={2} className='mt-2'>

          <Grid item xs={12} md={6}>
            <Typography variant='body1' className='font-medium'>Good Morning, Anna!</Typography>
            <Typography variant='caption' className='text-gray'>Here what happening with your store today.</Typography>
          </Grid>
          <Grid item xs={12} md={6} className='text-right'>
            <Link href={'http://localhost:3000/admin/carlist'}>
              <Button variant="contained" className='bg-darkblue hover:bg-blue-800 capitalize shadow-none'><AddCircleOutlineIcon className='mr-2 text-lg' /> Add New listing</Button>
            </Link>
          </Grid>

        </Grid>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} className='my-1'>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box className='rounded-md p-3 bg-white shadow hover:shadow-lg hover:-translate-y-2 transition-all'>
                <Box className="flex items-center justify-between">
                  <Typography variant='body2' className='text-gray-500'>TOTAL EARNINGS</Typography>
                  <Typography className='text-center c-text-green'> <NorthEastIcon className='text-sm c-text-green' />+16.24%</Typography>
                </Box>
                <Box className="flex items-end justify-between mt-6">
                  <Box>
                    <Typography variant='h5' className='mb-6 font-semibold c-text-gray'>$ 559.25 k </Typography>
                    <Link href={'/'}>
                      <Typography variant='body2' className='underline c-text-blue'>View net earnings</Typography>
                    </Link>
                  </Box>
                  <Box >
                    <Avatar className='c-green-color-icon' variant="rounded">
                      <AttachMoneyIcon />
                    </Avatar>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box className='rounded-md p-3 bg-white shadow hover:shadow-lg hover:-translate-y-2 transition-all' >
                <Box className="flex items-center justify-between">
                  <Typography variant='body2' className='text-gray-500 uppercase'>Orders</Typography>
                  <Typography className='text-center c-text-red'> <SouthEastIcon className='text-sm c-text-red' />-3.57 %</Typography>
                </Box>
                <Box className="flex items-end justify-between mt-6">
                  <Box>
                    <Typography variant='h5' className='mb-6 font-semibold c-text-gray'>36,894</Typography>
                    <Link href={'/'}>
                      <Typography variant='body2' className='underline c-text-blue'>View all orders</Typography>
                    </Link>
                  </Box>
                  <Box >
                    <Avatar className='text-blue-500 bg-blue-200' variant="rounded">
                      <ShoppingBagOutlinedIcon />
                    </Avatar>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box className='rounded-md p-3 bg-white shadow hover:shadow-lg hover:-translate-y-2 transition-all'>
                <Box className="flex items-center justify-between">
                  <Typography variant='body2' className='text-gray-500 uppercase'>Customers</Typography>
                  <Typography className='text-center c-text-green'> <NorthEastIcon className='text-sm c-text-green' />+29.08 %</Typography>
                </Box>
                <Box className="flex items-end justify-between mt-6">
                  <Box>
                    <Typography variant='h5' className='mb-6 font-semibold c-text-gray'>$ 167M</Typography>
                    <Link href={'/'}>
                      <Typography variant='body2' className='underline c-text-blue'>See details</Typography>
                    </Link>
                  </Box>
                  <Box >
                    <Avatar className='text-yellow-500 bg-yellow-100' variant="rounded">
                      <AccountCircleOutlinedIcon />
                    </Avatar>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box className='rounded-md p-3 bg-white shadow hover:shadow-lg hover:-translate-y-2 transition-all' >
                <Box className="flex items-center justify-between">
                  <Typography variant='body2' className='text-gray-500 uppercase'> My Balance</Typography>
                  <Typography className='text-center text-gray-600'> <SouthEastIcon className='text-sm text-gray-600' />+0.00%</Typography>
                </Box>
                <Box className="flex items-end justify-between mt-6">
                  <Box>
                    <Typography variant='h5' className='mb-6 font-semibold c-text-gray'>$ 1599.58 k </Typography>
                    <Link href={'/'}>
                      <Typography variant='body2' className='underline c-text-blue'>Withdraw Money</Typography>
                    </Link>
                  </Box>
                  <Box >
                    <Avatar className='text-slate-500 bg-slate-200' variant="rounded">
                      <AccountBalanceWalletOutlinedIcon />
                    </Avatar>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} className='my-1'>
            <Grid item xs={12}>
              <Card className=' bg-white'>
                <Stack direction={'row'} className='justify-between bg-white py-2 px-4 mt-2'>
                  <Typography variant='body1' className='font-semibold'>Car Order Details</Typography>
                  <Button className='bg-darkblue px-4 text-sm capitalize hover:bg-blue-700 hover:text-white' startIcon={<PostAddIcon />}>Generate Report</Button>
                </Stack>
                <DataGrid
                  autoHeight
                  rows={cardatarow}
                  columns={cardatacolumns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Footer/>
      <ScrollToTop />
    </div>
  )
}
