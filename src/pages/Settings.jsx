import React from "react";
import TopBar from "../components/TopBar.jsx";
import OrganizationSettings from "../components/OrganizationSettings.jsx";
import PersonalSettings from "../components/PersonalSettings.jsx";

const Settings = () => {
  return (
    <div style={styles.container}>
      <TopBar pageTitle="Settings" />
      <div>
        <OrganizationSettings />
        <PersonalSettings />
        <div style={styles.passwordContainer}>
          <button style={styles.passwordButton}>Change Password</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  passwordContainer: {
    padding: 20,
  },
  passwordButton: {
    padding: 20,
    borderRadius: 10,
    border: "none",
    backgroundColor: "#d32f2f",
    color: "white",
    cursor: "pointer",
  },
};

export default Settings;
