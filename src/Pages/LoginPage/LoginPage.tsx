import { Avatar, Box, Checkbox, Container, CssBaseline, FormControlLabel, Grid, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import { styles } from './styles';
import { CheckBox, LockClockOutlined } from '@mui/icons-material';
import { ATitle } from '../../Core/Title';
import AInput from '../../Core/Input';
import AButton from '../../Core/Button';
import { Link } from 'react-router-dom';

const defaultTheme = createTheme();


const LoginPage = () => {
    const classes = styles()
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
  return (
    <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box className={classes.container}>
                <Avatar className={classes.avatarContainer}>
                    <LockClockOutlined />
                </Avatar>

                <ATitle title='Sign in' varaiant='h1' />

                <Box component="form" onSubmit={handleSubmit} noValidate mt={1}>
                    <AInput label='Email Address' name='email' variant='standard' />
                    
                    <AInput label='Password' name='password' isPassword variant='standard'/>
                    
                    <FormControlLabel control={<Checkbox value="remeber" color="primary" />} label="Remember me" />
                    
                    <AButton variant='contained' title='Sign In'/>

                    <Grid container className={classes.gridContainer}>
                        <Grid item xs>
                            <Link to={'#'}>
                                Forget Password
                            </Link>
                        </Grid>
                        
                        <Grid item>
                            <Link to="/register">
                                "Don't have an account? <strong> Sign Up</strong>"
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    </ThemeProvider>
  )
}

export default LoginPage