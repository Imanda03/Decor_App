import React, { useState } from 'react';
import { Box, TextField, InputAdornment, IconButton, TextFieldVariants } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { styles } from './styles';

interface InputInterface {
    label?: string,
    helperText?: string,
    isPassword?: boolean,
    value?: string | [string],
    name: string,
    onChange?: (value: any) => void,
    style?: any,
    type?: any,
    variant?: TextFieldVariants,
    props?: any
}

const AInput: React.FC<InputInterface> = ({ label, helperText, isPassword, value, name, onChange, style, type, variant, ...props }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const classes = styles()

    const handleIconClick = () => {
        setIsPasswordVisible((show) => !show);
    }

    return (
        <Box className={classes.container}>
            {isPassword ?
                <TextField
                    type={isPasswordVisible ? 'text' : 'password'}
                    helperText={helperText}
                    label={label}
                    style={style}
                    className={classes.inputbox}
                    onChange={onChange}
                    variant={variant}
                    value={value}
                    {...props}
                    name={name}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleIconClick}
                                    edge="end"
                                >
                                    {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                : (
                    <TextField
                        type={type}
                        helperText={helperText}
                        label={label}
                        name={name}
                        style={style}
                        className={classes.inputbox}
                        onChange={onChange}
                        variant={variant}
                        value={value}
                        {...props}
                    />
                )
            }
        </Box>
    )
}

export default AInput;
