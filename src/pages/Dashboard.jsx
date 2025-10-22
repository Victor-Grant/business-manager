import React from "react";
import { useState } from "react";
import TopBar from "../components/TopBar.jsx";
import ProductsViewCard from "../components/ProductsViewCard.jsx";
import RevenueViewCard from "../components/RevenueViewCard.jsx";
import SalesViewCard from "../components/SalesViewCard.jsx";
import SoldItemsList from "../components/SoldItemsList.jsx";

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div style={styles.container}>
      <TopBar pageTitle={`Dashboard`} setValue={setSearchInput} />
      <div>
        <div style={styles.statsContainer}>
          <ProductsViewCard productAmount={150} />
          <RevenueViewCard totalRevenue={"$1,250"} />
          <SalesViewCard totalSales={75} />
        </div>
        <div style={styles.itemsContainer}>
          <SoldItemsList />
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
  statsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 25,
    marginTop: 20,
    justifyContent: "center",
  },
  itemsContainer: {
    padding: 20,
  },
};

export default Dashboard;
