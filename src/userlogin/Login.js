import React, { useState } from "react";
import { Container, TextField, Button, Box, Typography, Paper, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Logo from '../img/logo (1).png'

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 4, textAlign: "center", marginTop: 20 }}>
               <center> <img src={Logo} width="100px"/></center>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                   Admin Login
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                    <TextField
                        fullWidth
                        label={<Typography variant="h5">User ID</Typography>}
                        variant="outlined"
                        margin="normal"
                        InputProps={{
                            style: { fontSize: 18 }
                        }}
                    />
                    <TextField
                        fullWidth
                        label={<Typography variant="h5">Password</Typography>}
                        variant="outlined"
                        margin="normal"
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                            style: { fontSize: 18, },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button
                                        onClick={handleClickShowPassword}
                                        style={{ color: "#0072a0" }}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </Button>
                                </InputAdornment>
                            )
                        }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ marginTop: 2, fontSize: 18, fontWeight: "bold", padding: 1 }}
                    >
                        Login
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default Login;
