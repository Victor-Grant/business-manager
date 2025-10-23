import React from "react";

const PersonalSettings = () => {
  return (
    <div style={styles.settingsBox}>
      <fieldset style={styles.fieldset}>
        <legend>Personal Information</legend>
        <div>
          <p>Full Name</p>
          <div style={styles.settingsItem}>John Doe</div>
        </div>
        <div>
          <p>Phone Number</p>
          <div style={styles.settingsItem}>0500000000</div>
        </div>
        <div>
          <p>Email Address</p>
          <div style={styles.settingsItem}>johndoe885@gmail.com</div>
        </div>
        <div style={styles.editContainer}>
          <button style={styles.editButton}>Edit</button>
        </div>
      </fieldset>
    </div>
  );
};

const styles = {
  settingsBox: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    padding: 15,
    borderRadius: 15,
    width: 650,
  },
  settingsItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e8e8e8",
    borderRadius: 5,
    padding: 15,
  },
  fieldset: {
    borderRadius: 10,
    padding: 20,
  },
  editContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  editButton: {
    display: "flex",
    padding: 15,
    borderRadius: 10,
    border: "none",
    backgroundColor: "#1976d2",
    color: "white",
    cursor: "pointer",
    fontSize: 18,
  },
};

export default PersonalSettings;
