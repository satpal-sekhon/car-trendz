import React from 'react';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { TransitionProps } from '@mui/material/transitions';
import { useState } from 'react';
import { Slide } from '@mui/material';



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
        className='py-[10px] px-[15px] md:py-[15px] md:px-[60px] gap-4 md:gap-0'
      >
        <Grid item xs={12} sm={6} className='justify-center md:justify-start flex'>
          <Image className='' src="/true-value-logo.png" width={'204'} height={'33'} alt='true value logo' />
        </Grid>

        <Grid item xs={12} sm={6}  className='headermiddle-logo-2 flex justify-center md:justify-end'>
          <Image className='' src="/maruti-suziki-logo.png" width={'209'} height={'23'} alt='maruti suziki logo' />
          {/* <Box className='block md:hidden'>
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
          </Box> */}

        </Grid>
      </Grid>
    </div >
  )
}
