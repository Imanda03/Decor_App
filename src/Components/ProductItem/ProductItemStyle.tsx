import { makeStyles } from "@mui/styles";

export const ProductItemStyle=makeStyles({
    productbox:{
        width:'25%',
    },
    productitem:{
        display:'flex',
        flexDirection:'column',
        height:'15rem',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        margin:10,
        boxShadow: ' 0 1px 3px rgba(0, 0, 0, 0.6)',
        '&:hover':{
            transform: 'scale(1.1)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.8)',
        },
    },
    img:{
        height:'60%',
        width:'100%',
    },
    info:{

    },
    '@media (max-width: 600px)':{
        productitem:{
            height:'10rem',
            margin:2,
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        },
    },
})