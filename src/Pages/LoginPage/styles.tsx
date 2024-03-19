import { makeStyles } from '@mui/styles';

export const styles = makeStyles({
    main: {
        backgroundImage: "url('https://images.pexels.com/photos/6812375/pexels-photo-6812375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
        minHeight: "100vh",
    },
    secondContainer: {
        padding: "30px",
        zIndex: "1",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarContainer: {
        margin: "10px auto",
    },
    FormContainer: {
        width: '100%', // Ensure the form takes full width
        marginTop: '20px',
        marginBottom: '20px',
    },
    paper: {
        marginTop: "60px",
        padding: "40px",
        borderRadius: '10px', // Rounded corners
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Soft shadow effect
        background: "grey",
    },
    link: {
        textDecoration: 'none',
        color: '#333', // Dark grey text color
    },
    btn:{
        backgroundColor: "black"
    }
});
