// SignupForm.js
import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  CssBaseline,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "../redux/actions";
import { toast, ToastContainer } from "react-toastify";

const SignupForm = () => {

  const dispatch=useDispatch()
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const message=useSelector(state=>state.register.message);
  if(message==="User Saved Sucessfully"){
    toast.success(message)
  }else{
    toast.error(message)
  }
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerRequest(formValues))



  // Add further submission logic or validation
  };

  return (
    <Container component="main" maxWidth="xs">
      <ToastContainer/>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            value={formValues.username}
            onChange={handleInputChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formValues.password}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignupForm;
