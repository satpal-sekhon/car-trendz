"use client"
import React from 'react'
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { Alert, Box, Button, Stack, TextField, Typography } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from "react";
import LoginIcon from '@mui/icons-material/Login';




export default function Index() {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Cpassword, setCPassword] = useState('');
    const [allEntery, setAllEntery] = useState<any>([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [successAlert, setSuccessAlert] = useState('');
    const [errorAlert, setErrorAlert] = useState('');
    const [warningAlert, setWarningAlert] = useState('');


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password === '') {
            setWarningAlert('the password should not be empty')
        }
        else if (password !== Cpassword) {
            setErrorMessage('Passwords do not match');
            setErrorAlert('Passwords do not match')

        }
        else {
            const newEntry = { firstName, secondName, email, password };
            setAllEntery([...allEntery, newEntry]);
            console.log(allEntery);
            setFirstName("");
            setSecondName("");
            setEmail("");
            setPassword("");
            setCPassword("");
            setErrorMessage("");
            setSuccessAlert('you have succesfully create acount');
        }
    };
    return (
        <>
            <Grid container spacing={2}
                className="flex-class" sx={{height:'100vh'}}
            >
                <Grid item xs={10} sm={8} md={4}>
                    <form action="" onSubmit={handleSubmit}>
                        <div
                            className="icon-wrapper"
                        >
                            <LoginIcon sx={{ fontSize: '50px' }} color="success" /></div>
                        <Typography variant="h4" textAlign={'center'} mb={3}>Signup</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                            <TextField className="mb-20" InputProps={{ startAdornment: <AccountCircleOutlinedIcon sx={{ fontSize: '20px', mr: 1, color: '#999' }} />, }} size="small" color="secondary" label="First Name" variant="outlined" autoComplete="off" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <TextField className="mb-20" InputProps={{ startAdornment: <AccountCircleOutlinedIcon sx={{ fontSize: '20px', mr: 1, color: '#999' }} />, }} size="small" color="secondary" label="Second Name" variant="outlined" autoComplete="off" placeholder="Second Name" value={secondName} onChange={(e) => setSecondName(e.target.value)} />
                        </Box>
                        <TextField className="mb-20" InputProps={{ startAdornment: <EmailOutlinedIcon sx={{ fontSize: '20px', mr: 1, color: '#999' }} />, }} size="small" color="secondary" id="email" label="Email" variant="outlined" autoComplete="off" fullWidth placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField className="mb-20" InputProps={{ startAdornment: <LockOutlinedIcon sx={{ fontSize: '20px', mr: 1, color: '#999' }} />, }} size="small" color="secondary" id="Password" type="password" label="Password" variant="outlined" autoComplete="off" fullWidth placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <TextField className="mb-20" InputProps={{ startAdornment: <LockOutlinedIcon sx={{ fontSize: '20px', mr: 1, color: '#999' }} />, }} size="small" color="secondary" id="Password" type="password" label="Confirm Password" variant="outlined" autoComplete="off" fullWidth placeholder="Confirm Password" value={Cpassword} onChange={(e) => setCPassword(e.target.value)} />
                        <Box sx={{ color: 'red', mb: 2 }}>{errorMessage}</Box>
                        <Button type="submit" className='bg-success' variant="contained" color="success" href='/' fullWidth>SIGNUP</Button>
                    </form>
                    <Typography textAlign={'center'}>
                        <Button href="#" variant="text" color="primary">alrady have an account</Button>
                    </Typography>
                    <Typography textAlign={'center'}>
                        <Button href="/" variant="text" color="primary">Forgot Password</Button>
                    </Typography>

                    <div>
                        <Typography variant="body2" textAlign={'center'}>or sign up using</Typography>
                        <div
                          className="flex-class"
                        >
                            <Image className="mr-10" src="/567-5670137_round-facebook-logo-transparent-hd-png-download.png" width='30' height='30' alt="facbook icon" />
                            <Image className="mr-10" src="/new-Instagram-logo-png-full-colour-glyph.png" width='30' height='30' alt="facbook icon" />
                            <Image src="/pngtree-twitter-social-media-round-icon-png-image_6315985.png" width='30' height='30' alt="facbook icon" />
                        </div>
                    </div>

                </Grid>
            </Grid>
            <Stack sx={{ width: '100%' }} spacing={2}>
                {errorAlert && <Alert severity="error">{errorAlert}</Alert>}
                {warningAlert && <Alert severity="warning">{warningAlert}</Alert>}
                {/*<Alert severity="info">This is an info alert — check it out!</Alert> */}
                {successAlert && <Alert severity="success" >{successAlert}</Alert>
                }
            </Stack>

            <Box textAlign={'center'}>
                {
                    allEntery.map((item: any) => {
                        return (
                            <div key={item.email}>
                                <h4>first Name:{item.firstName}, second Name:{item.secondName}, email:{item.email}, password:{item.password}</h4>
                            </div>
                        )
                    })
                }
            </Box>
        </>
    );
}
