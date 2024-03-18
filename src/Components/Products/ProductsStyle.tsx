import { makeStyles } from '@mui/styles';

export const ProductsStyle=makeStyles({
    productlist: {
        margin: 4,
        display: 'flex',
        flexWrap:'wrap',
    },
    h4:{
        padding:10,
    },
    '@media (max-width:600px)':{
        productlist:{
            margin:2,
        },
    }
})