import React from "react";

const StockList = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textHeading}>
        <h3>Stocks</h3>
        <p>Showing All Available Stocks</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 15,
    border: "1px solid #ccc",
    padding: "10px 0",
  },
  textHeading: {
    display: "flex",
    padding: "0 20px",
    borderBottom: "1px solid #ccc",
    flexDirection: "column",
  },
};

export default StockList;
