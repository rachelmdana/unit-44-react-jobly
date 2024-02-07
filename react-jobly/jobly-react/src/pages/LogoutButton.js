import React from "react";

const LogoutButton = ({ handleLogout }) => {
    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;