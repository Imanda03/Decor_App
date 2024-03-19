import { Button, Box, ButtonProps} from "@mui/material";
import {styles} from './styles'

interface ButtonInterface {
    title: string;
    onClick?: (value: any) => void;
    variant?: "text" | "outlined" | "contained";
    others?: any
}

const AButton: React.FC<ButtonProps & ButtonInterface> = ({title, onClick, variant, ...others}) => {
    const classes = styles();
    
    return(
        <Box className={classes.container}>
            <Button variant={variant} onClick={onClick} className={classes.button} {...others}>{title}</Button>
        </Box>
    )
}

export default AButton