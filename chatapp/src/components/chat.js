import React from "react";
import { Search } from "@mui/icons-material";

const Chat = () => {
    const inputContainerStyle = {
        position: "relative",
        marginLeft: "2%",
        display: "flex",
        flexDirection: "row",
    };

    const inputStyle = {
        borderRadius: "10px",
        backgroundColor: "white",
        border: "none", // Set border to none
        width: '90%', // Increased width to 90%
        height: '80%', // Increased height to 6%
        margin: "5%", // Adjusted margin
        position: "relative",
    };

    const searchIconStyle = {
        position: "absolute",
        marginTop: "1%",
        left: "85%",
        cursor: "pointer",
        transform: "scaleX(-1)",
    };

    return (
        <div style={inputContainerStyle}>
            <h1>Chat</h1>
            <div style={inputStyle}>
                <input type='text' name='search' placeholder="Search" style={{ border: "none" }} />
                <Search style={searchIconStyle} />
            </div>
        </div>
    );
}

export default Chat;
