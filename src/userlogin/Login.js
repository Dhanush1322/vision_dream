import React, { useState } from "react";
import { Container, TextField, Button, Box, Typography, Paper, CircularProgress } from "@mui/material";
import Logo from '../img/logo (1).png';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate loading effect
        setTimeout(() => {
            setIsLoading(false);
            alert("Login logic not implemented. Add API integration here.");
        }, 1000);
    };

    return (
        <Container maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 4, textAlign: "center", marginTop: 20 }}>
                <center>
                    <img src={Logo} width="100px" alt="Logo" />
                </center>
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
                        disabled={isLoading}
                    >
                        {isLoading ? <CircularProgress size={24} color="inherit" /> : "Login"}
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default Login;
