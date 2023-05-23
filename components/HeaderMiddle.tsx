import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from 'next/image';
import SplitButton from './SplitButton';
import PersonIcon from '@mui/icons-material/Person';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import CloseIcon from '@mui/icons-material/Close';





const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide className='admin-dialog ' direction="down" ref={ref} {...props} />;
});

export default function HeaderMiddle() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Grid container
        className='py-[10px] px-[15px] md:py-[15px] md:px-[60px] d-flex items-center'
      >
        <Grid item xs={6}>
          <Image src="/true-value-logo.png" width={'204'} height={'33'} alt='true value logo' />
        </Grid>

        <Grid item xs={6} textAlign={'right'} className='headermiddle-logo-2 flex'>
          <Image className='hidden md:block' src="/maruti-suziki-logo.png" width={'209'} height={'23'} alt='maruti suziki logo' />
          <Box className='block md:hidden'>
            <SplitButton index1="Hindi" index2="English" />
            <Button variant="outlined" onClick={handleClickOpen} className='p-0 min-w-0'>
              <PersonIcon className='text-darkblue bg-gray-300' />
            </Button>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
              className=''
            >
              <DialogTitle className='flex items-center '>
                <PersonOutlineRoundedIcon className='admin-modal bg-darkblue mr-2' />Login<CloseIcon onClick={handleClose} className='ml-auto'/>
              </DialogTitle>
              <DialogContent className='m-6 mt-0 rounded-md p-0' sx={{ boxShadow: '0 0 10px #999' }}>
                <DialogContentText id="alert-dialog-slide-description">
                  <Box className='p-6'>
                    <TextField className='my-3' id="mobile" label="Mobile Number" variant="standard" fullWidth />
                    <FormGroup className='my-3 flex items-center justify-between flex-row'>
                      <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                      <Button className='bg-darkblue'>Submit</Button>
                    </FormGroup>
                  </Box>
                  <Grid container className='px-6 py-4 bg-slate-300'>
                    <Grid item xs={6}>
                      <Typography variant='h5' className='text-black'>Login With</Typography>

                    </Grid>
                    <Grid item xs={6}>
                      <Box className='flex items-center justify-evenly'>
                        <Link href={'/'}><FacebookIcon className='facbook-icon social-media-modalicon' /></Link>
                        <Link href={'/'}><TwitterIcon className='twitter-icon social-media-modalicon' /></Link>
                        <Link href={'/'}><GoogleIcon className='google-icon social-media-modalicon' /></Link>
                      </Box>
                    </Grid>
                  </Grid>
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </Box>

        </Grid>
      </Grid>
    </div >
  )
}
