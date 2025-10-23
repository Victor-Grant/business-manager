import React from "react";
import TopBar from "../components/TopBar.jsx";
import InfoBox from "../components/InfoBox.jsx";

const Stocks = () => {
  return (
    <div>
      <TopBar pageTitle="Stocks" />
      <div>
        <div style={styles.infoBox}>
          <InfoBox infoTitle="Total Stocks" infoData="320 Items" />
          <InfoBox infoTitle="All Products" infoData="20 Items" />
        </div>
        <hr style={{ width: "100%" }} />
      </div>
    </div>
  );
};

const styles = {
  infoBox: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    padding: 20,
  },
};

export default Stocks;
