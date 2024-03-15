import { Button, Box} from "@mui/material";
import {styles} from './styles'

interface ButtonInterface {
    title: string;
    onClick?: (value: any) => void;
    variant?: "text" | "outlined" | "contained";
    style?: any,
    others?: any
}

const AButton = ({title, onClick, variant, ...others}: ButtonInterface) => {
    //this call the styles components
    const classes = styles();
    
    return(
        <Box className={classes.container}>
            <Button variant={variant} onClick={onClick} className={classes.button} {...others}>{title}</Button>
        </Box>
    )
}

export default AButton