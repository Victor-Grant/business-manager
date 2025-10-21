import React from "react";
import { useState } from "react";
import TopBar from "../components/TopBar.jsx";

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div style={styles.container}>
      <TopBar pageTitle={`Dashboard`} setValue={setSearchInput} />
      <div></div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
};

export default Dashboard;
