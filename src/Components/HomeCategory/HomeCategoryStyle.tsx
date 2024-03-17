import {makeStyles} from '@mui/styles';

export const HomeCategoryStyle=makeStyles({
    container:{
        padding:'2.5rem',
    },
    griditem:{
        height:'100%',
    },
    gridcontainer:{
        height:'45vh',
    },
    imagecontainer:{
        height:'50%',
        width:'100%',
        paddingBottom:'0.18rem',
        position:'relative',
    },
    leftimagecontainer:{
        height:'100%',
        width:'100%',
        position:'relative',
    },
    image:{
        height:'100%',
        width:'100%',
    },
    subtitle: {
        position: 'absolute',
        bottom: 2,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',     
    },
    text:{
        padding:'1px 10px',
        backgroundColor:'white',
        borderRadius: '45px', 
    },
    '@media (max-width: 600px)': { // Example media query for screens less than 600px wide
        // container: {
        //   padding:'0.4rem',
        // },
        gridcontainer: {
          height: '25vh', 
        },
      },
})
