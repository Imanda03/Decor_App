import { makeStyles } from "@mui/styles";

export const styles = makeStyles({
    imageContainer: {
        width: "95vw",
        height: "80vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0", // Light gray background color
        overflow: 'hidden'
    },
    next: {
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        position: "absolute",
        background: "#fff",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "1.2rem",
        zIndex: 2,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Box shadow for depth
    },
    prev: {
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        position: "absolute",
        background: "#fff",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "1.2rem",
        zIndex: 2,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Box shadow for depth
    },
    img: {
        position: "absolute",
        maxWidth: "90vw",
        borderRadius: "10px", // Rounded corners for images
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)", // Box shadow for depth
    },
    imgInfo: {
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        // backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: "10px",
        // borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        maxWidth: "90%",
        textAlign: "center",
        zIndex: "1"
    },
    imageTitle: {
        position: "absolute",
        bottom: "80px",
        left: "50%",
        transform: "translateX(-50%)",
        // backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: "10px",
        // borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        maxWidth: "90%",
        textAlign: "center",
        zIndex: "1",
    }
});
