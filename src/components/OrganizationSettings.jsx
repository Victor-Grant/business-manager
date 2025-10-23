import React from "react";

const OrganizationSettings = () => {
  return (
    <div style={styles.settingsBox}>
      <fieldset style={styles.fieldset}>
        <legend>Organization Settings</legend>
        <div>
          <p>Organization Name</p>
          <div style={styles.settingsItem}>Law Gates</div>
        </div>
        <div>
          <p>Organization Type</p>
          <div style={styles.settingsItem}>Retail</div>
        </div>
        <div>
          <p>Organization Address</p>
          <div style={styles.settingsItem}>123 Main St, Cityville, Country</div>
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

export default OrganizationSettings;
