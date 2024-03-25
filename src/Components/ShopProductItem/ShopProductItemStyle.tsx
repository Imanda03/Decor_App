import { makeStyles } from "@mui/styles";

export const ShopProductItemStyle=makeStyles({
    productbox:{
        width:'30%',
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
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
    },
    title:{
        fontSize:'1rem !important',
    },
     price:{
        fontSize:'1rem !important',
    },
      '@media (min-width: 601px) and (max-width: 960px)':{
        productitem:{
            margin:6,
        },
        info:{
            marginTop:2,
            fontSize:8,
        },
          title:{
            fontSize:'0.8rem !important',
        },
          price:{
            fontSize:'0.8rem !important',
        },
    },
    '@media (max-width: 600px)':{
        productitem:{
            height:'12rem',
            margin:3,
        },
        info:{
            marginTop:2,
            fontSize:2,
        },
        title:{
            fontSize:'0.7rem !important',
        },
         price:{
            fontSize:'0.7rem !important',
        },

    },
})