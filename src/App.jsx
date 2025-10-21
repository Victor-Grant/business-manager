import React from "react";

const App = () => {
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}></div>
      <div style={styles.mainContent}></div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    minWidth: "150px",
    backgroundColor: "#f4f4f4",
  },
  mainContent: {
    display: "flex",
    flexDirection: "column",
  },
};

export default App;
