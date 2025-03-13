import React, { useState } from "react";
import { Container, TextField, Button, Box, Typography, Paper, CircularProgress } from "@mui/material";
import Logo from '../img/logo (1).png';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

function Login() {
    const [userid, setUserid] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Loader state
    const navigate = useNavigate();

    const defaultUser = {
        userid: "admin",
        password: "123456",
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true); // Show loader

        setTimeout(() => {  // Simulate API delay
            setIsLoading(false); // Hide loader

            if (userid === defaultUser.userid && password === defaultUser.password) {
                Swal.fire({
                    title: "Success!",
                    text: "Login Successful",
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK",
                }).then(() => {
                    navigate("/DashboardPage"); // Navigate after success
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Invalid User ID or Password",
                    icon: "error",
                    confirmButtonColor: "#d33",
                    confirmButtonText: "Try Again",
                });
            }
        }, 2000);
    };

    return (
        <Container maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 4, textAlign: "center", marginTop: 20 }}>
                <center> <img src={Logo} width="100px" alt="Logo" /></center>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                    Admin Login
                </Typography>
                <Box component="form" noValidate autoComplete="off" onSubmit={handleLogin}>
                    <TextField
                        fullWidth
                        label="User ID"
                        variant="outlined"
                        margin="normal"
                        type="text"
                        value={userid}
                        onChange={(e) => setUserid(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        variant="outlined"
                        type="password"
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{ marginTop: 2, fontSize: 18, fontWeight: "bold", padding: 1 }}
                        disabled={isLoading} // Disable button while loading
                    >
                        {isLoading ? <CircularProgress size={24} color="inherit" /> : "Login"}
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default Login;
