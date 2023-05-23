// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       login
//     </div>
//   )
// }

// export default page
"use client"
import { Box, Button, TextField,Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import React from "react";
import LoginIcon from '@mui/icons-material/Login';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allEntery, setAllEntery] = useState<any>([]);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      const newEntry = { email, password };
    setAllEntery([...allEntery, newEntry]);
    console.log(allEntery);
    setEmail("");
    setPassword("");
    }
    else{
      alert("please complete the blank filled")
    }
  };
  return (
    <>
      <Grid container spacing={2} className="loginwrapper"  sx={{height:'100vh'}}>
        <Grid item xs={10} sm={8} md={4}>
          <form action="" onSubmit={handleSubmit}>
            <div className="loginIconWrapper"> <LoginIcon color="success" className="loginIcon"/></div>
            <Typography variant="h4" textAlign={'center'} mb={3}>Login</Typography>
            <Box>
              <TextField className="emailtextfield" InputProps={{startAdornment: <EmailOutlinedIcon sx={{fontSize:'20px',mr:1,color:'#999'}}/>,}} size="small" color="primary" id="email" label="Email" variant="outlined" autoComplete="off" fullWidth  placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </Box>
            <Box>
              <TextField className="passwordtextfield" InputProps={{startAdornment: <LockOutlinedIcon sx={{fontSize:'20px',mr:1,color:'#999'}}/>,}} size="small" color="primary" id="Password" type="password" label="Password" variant="outlined" autoComplete="off" fullWidth  placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </Box>
            <Link href="http://localhost:3000/admin/dashboard">
            <Button type="submit" className="loginbutton bg-success" variant="contained" color="success" fullWidth>Login</Button>
            </Link>
          </form>
          <div className="forgotpasswordwrapper">
            <Button href="#" variant="text" color="primary">Forgot Password</Button>
          </div>
          
          <div>
            {
              allEntery.map((item:any)=>{
                return(
                 <div key={item.email}>
                   <h4>email:{item.email},password:{item.password}</h4>
                 </div>
                )
              })
            }
          </div>
        </Grid>
      </Grid>
    </>
  );
}

