import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => 
    createStyles({
        container:{
    marginTop: 10
    },
    inputbox: {
        width: '100%',
        border:'1px solid green',
        outline:'none',
        '&:focus': { // Use &:focus to specify focus styles
            borderColor: 'green', // Specify the color without hyphen
        },
    }
    })
)
// container:{
//     marginTop: 10
// },
// inputbox: {
//     width: '100%',
//     border:'1px solid green',
//     outline:'none',
//     '&:focus': { // Use &:focus to specify focus styles
//         borderColor: 'green', // Specify the color without hyphen
//     },
// }