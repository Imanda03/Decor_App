import React from 'react';
import { motion } from 'framer-motion';
import { Container, Grid, Paper, Avatar, FormControlLabel, Checkbox } from '@mui/material';
import { LockClockOutlined } from '@mui/icons-material';
import AInput from '../../Core/Input';
import AButton from '../../Core/Button';
import { Link } from 'react-router-dom';
import { styles } from './styles';
import { ATitle } from '../../Core/Title';

const LoginPage = () => {
    const classes = styles();
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={classes.main}
        >
            <Container component="main" maxWidth="xs" className={classes.secondContainer}>
                <Paper elevation={24} className={classes.paper} sx={{
                    background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 40%, rgb(255, 253, 253,0.6) 100%)",
                    // boxShadow: "0px 0px 10px #406fb2b3"
                }}>
                    <Avatar className={classes.avatarContainer}>
                        <LockClockOutlined color='action' />
                    </Avatar>

                    <Grid container direction="column" alignItems="center">
                        <Grid item>
                            <ATitle title='Sign in' varaiant='h5'/>
                        </Grid>
                        <Grid item>
                            <form onSubmit={handleSubmit} className={classes.FormContainer}>
                                <AInput label='Email Address' name='email' variant='standard' />
                                <AInput label='Password' name='password' isPassword variant='standard' />
                                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                                <AButton variant='contained' title='Sign In' />
                            </form>
                        </Grid>
                        <Grid item xs>
                            <Link to="/forgot-password" className={classes.link}>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/register" className={classes.link}>
                                Don't have an account? <strong>Sign Up</strong>
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </motion.div>
    );
};

export default LoginPage;
