import { makeStyles } from "@mui/styles";

export const ShopProductsStyle=makeStyles({
    right:{
        padding:12,
        margin:24,
        marginRight:150,
    },
    box:{
        display:'flex',
        flexWrap:'wrap',
    },
    '@media (min-width: 601px) and (max-width: 960px)':{
        right: {
            padding: 8,
            margin: 12,
             marginRight:60,
        },
    },
    '@media (max-width: 600px)':{
        right:{
            padding:4,
            margin:6,
        },

    },
})