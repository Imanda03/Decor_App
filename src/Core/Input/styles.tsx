import { makeStyles } from "@mui/styles";

export const styles = makeStyles({
    container:{
        marginTop: 10
    },
    inputbox: {
        width: '100%',
        border:'1px solid-blue',
        outline:'none',
        '&:focus': { // Use &:focus to specify focus styles
            borderColor: 'blue', // Specify the color without hyphen
        },
    }
})