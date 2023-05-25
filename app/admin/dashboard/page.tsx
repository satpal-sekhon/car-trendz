"use client"
import React from 'react'
import ResponsiveDrawer from '@/components/DashboardSiderbar'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Avatar from '@mui/material/Avatar';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import Link from 'next/link';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import UserList from '@/components/dasboardDatatable';
import { DataGrid } from "@mui/x-data-grid";
import { Card, CardHeader } from "@mui/material";
import PostAddIcon from '@mui/icons-material/PostAdd';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/dasboardFooter';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Page() {
  const columns1 = [
    { field: "id", headerName: "ID", width: 10 },
    {
      field: "user",
      headerName: "User",
      width: 200,
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
    { field: "price", headerName: "Price", width: 100 },
    {
      field: "Order",
      headerName: "Order",
      width: 90
    },
    {
      field: "stock",
      headerName: "stock",
      width: 100
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 100
    }
  ];

  const rows1 = [
    {
      id: 1,
      user: {
        username: "Harry Potter",
        avatar:
          "https://themesbrand.com/velzon/html/default/assets/images/products/img-1.png"
      },
      price: "$180",
      Order: "Active",
      stock: "$120",
      amount: "$120"
    },
    {
      id: 2,
      user: {
        username: "Harry Potter",
        avatar:
          "https://themesbrand.com/velzon/html/default/assets/images/products/img-2.png"
      },
      price: "$160",
      Order: "Active",
      stock: "$120",
      amount: "$120"
    },
    {
      id: 3,
      user: {
        username: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png"
      },
      price: "$120",
      Order: "Active",
      stock: "$120",
      amount: "$120"
    },
    {
      id: 4,
      user: {
        username: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png"
      },
      price: "$140",
      Order: "Active",
      stock: "$120",
      amount: "$120"
    },
  ];
  const columns2 = [
    { field: "id", headerName: "ID", width: 10 },
    {
      field: "user",
      headerName: "User",
      width: 200,
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
    { field: "price", headerName: "Price", width: 100 },
    {
      field: "Order",
      headerName: "Order",
      width: 90
    },
    {
      field: "stock",
      headerName: "stock",
      width: 100
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 100
    }
  ];

  const rows2 = [
    {
      id: 1,
      user: {
        username: "Harry Potter",
        avatar:
          "https://themesbrand.com/velzon/html/default/assets/images/products/img-1.png"
      },
      price: "$180",
      Order: "Active",
      stock: "$120",
      amount: "$120"
    },
    {
      id: 2,
      user: {
        username: "Harry Potter",
        avatar:
          "https://themesbrand.com/velzon/html/default/assets/images/products/img-2.png"
      },
      price: "$160",
      Order: "Active",
      stock: "$120",
      amount: "$120"
    },
    {
      id: 3,
      user: {
        username: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png"
      },
      price: "$120",
      Order: "Active",
      stock: "$120",
      amount: "$120"
    },
    {
      id: 4,
      user: {
        username: "Harry Potter",
        avatar:
          "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png"
      },
      price: "$140",
      Order: "Active",
      stock: "$120",
      amount: "$120"
    },
  ];
  return (
    <div>
      <ResponsiveDrawer />
      <div className='content-wrapper p-4 c-dashboard-bg-color'>

        <Grid container spacing={2} className='mt-2' >
          <Grid item xs={12} md={6}>
            <Typography variant='h6' className='font-medium'>Good Morning, Anna!</Typography>
            <Typography variant='body2' className='text-gray'>Here what happening with your store today.</Typography>
          </Grid>
          <Grid item xs={12} md={6} className='text-right'>
            <Button variant="contained" className='capitalize shadow-none bg-darkblue hover:bg-blue-700'><AddCircleOutlineIcon className='mr-2 text-sm' /> Add Product</Button>
          </Grid>
        </Grid>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} className='my-1' >
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
            <Grid item xs={12} sm={6} >
              <Card className=' bg-white'>
                <CardHeader
                  title="Best Selling Products"
                />
                <DataGrid
                  autoHeight
                  rows={rows1}
                  columns={columns1}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} >
              <Card className=' bg-white'>
                <CardHeader
                  title="Top seller "
                />
                <DataGrid
                  autoHeight
                  rows={rows2}
                  columns={columns2}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className=' bg-white'>
                <CardHeader
                  title="Top seller "
                />
                <DataGrid
                  autoHeight
                  rows={rows2}
                  columns={columns2}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Card className=' bg-white'>
                  <Stack direction={'row'} className='justify-between bg-white py-2 px-4 mt-2'>
                    <Typography variant='body1' className='text-3xl'>Recent Orders</Typography>
                    <Button className='bg-darkblue px-4 text-sm capitalize hover:bg-blue-700 hover:text-white' startIcon={<PostAddIcon/>}>Generate Report</Button>
                  </Stack>
                
                <DataGrid
                  autoHeight
                  rows={rows2}
                  columns={columns2}
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
      <ScrollToTop/>
    </div>
  )
}
