import React, { useState } from "react";
import { Container, TextField, Button, Box, Typography, Paper, CircularProgress } from "@mui/material";
import Logo from '../img/logo (1).png';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Loader state
    const navigate = useNavigate();
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2Q5MmIzOGYxNzc0YjkxNGZjNTMyZjMiLCJlbWFpbCI6ImRoYW51c2hzaGV0dHk5NzQxQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImF1dGhUb2tlbiI6dHJ1ZSwiaWF0IjoxNzQyMjg2Mjk3LCJleHAiOjE4Mjg2ODYyOTd9.mPzKfMwyNii7Xt4BnKuUeyj2MyZrqYotL19p3fZFHVw"
    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Show loader

        try {
            const response = await fetch("https://goldfish-app-nczbc.ondigitalocean.app/api/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
          
            setIsLoading(false); // Hide loader

            if (response.ok) {
                localStorage.setItem("token",token); // Store token
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
                    text: data.message || "Invalid Email ID or Password",
                    icon: "error",
                    confirmButtonColor: "#d33",
                    confirmButtonText: "Try Again",
                });
            }
        } catch (error) {
            setIsLoading(false);
            Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please try again later.",
                icon: "error",
                confirmButtonColor: "#d33",
                confirmButtonText: "OK",
            });
        }
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
                        label="Email ID"
                        variant="outlined"
                        margin="normal"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
