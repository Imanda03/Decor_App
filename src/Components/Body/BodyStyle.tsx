import { makeStyles } from "@mui/styles"
import {color} from '../../theme/Color'

export const BodyStyle=makeStyles({
    container:{
        padding:'3rem',
        overflow:'hidden',
    },
    gridcontainer:{
        height:'20rem',
    },
    left:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
    },
    right:{
        height:'100%',
    },
    info:{
        padding:35,
        borderLeft:'1px solid brown',
    },
    imagecontainer:{
        height:'100%',
        padding:1,
    },
    img:{
        height:'100%',
        width:'100%',
    },
      title:{
            fontSize:'0.65rem',
        }, 
       subtitle:{
        fontSize:'1rem',
       },

    //  Services
     griditem:{
        height:'100%',
    },
    leftimagecontainer:{
        height:'25rem',
        width:'100%',
        padding:3,
    },
    image:{
        height:'75%',
        width:'100%',
        borderRadius: '50% 50% 0 0',
    },
    servicetitle: {
        display: 'flex',
        marginTop:8,
    },
    servicebutton:{
        backgroundColor: `${color.brown[600]} !important`,
        padding: "8px !important",
    },
    servicecontainer:{
        padding:'2rem',
        overflow:'hidden',
    },
    servicegridcontainer:{
        display:'flex',
        flexWrap:'wrap',
    },
    text:{
        paddingLeft:4,
    },

    // Stay
    staybox:{
        height:'60vh',
        position:'relative',
        margin:'2.5rem',
    },
    stayimagecontainer:{
        height:'100%',
    },
    stayimage:{
        height:'100%',
        width:'100%',
    },
    stayinfo:{
        position:'absolute',
        height:'100%',
        width:'100%',
         top:0,
         left:0,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Set the background color with opacity */
    },
    staysubtitle:{
        width:'80%',
        textAlign:'center',
    },
    staysearch:{
        backgroundColor:'white !important',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: '7rem !important' ,
    },
    staybutton:{
        height:'80%',
        borderRadius: '7rem !important' ,
    },
    

     '@media (max-width:600px)':{
        leftimagecontainer:{
            height:'15rem',
            width:'100%',
        },
        servicebutton:{
            padding: "4px !important",
            fontSize:'0.8rem !important',
        },
        text:{
        fontSize:'0.8rem !important' ,   
        },
        staytext:{
            fontSize:'1.5rem !important',  
        },
        staysubtext:{
            fontSize:'0.8rem !important',  
        }
    },
      '@media (max-width:960px)':{
        servicetitle: {
            display: 'flex',
            flexDirection:'column',
            marginTop:2,   
        },
        title:{
            fontSize:'1rem !important',
        }, 
       subtitle:{
        fontSize:'0.75rem !important',
       },

      }
})