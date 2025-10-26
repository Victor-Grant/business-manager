import React from "react";
import TopBar from "../components/TopBar.jsx";
import InfoBox from "../components/InfoBox.jsx";
import StockList from "../components/StockList.jsx";

const Stocks = () => {
  return (
    <div>
      <TopBar pageTitle="Stocks" />
      <div>
        <div style={styles.infoBox}>
          <InfoBox infoTitle="Total Stocks" infoData="320 Items" />
          <InfoBox infoTitle="All Products" infoData="20 Items" />
          <InfoBox infoTitle="Low Stocks" infoData="5 Items" />
        </div>
        <hr style={{ width: "100%" }} />
        <div style={{ padding: 20 }}>
          <StockList />
        </div>
      </div>
    </div>
  );
};

const styles = {
  infoBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 20,
    padding: 20,
  },
};

export default Stocks;
