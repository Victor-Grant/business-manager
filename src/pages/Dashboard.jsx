import React from "react";
import { useState, useEffect } from "react";
import { openStockDatabase, getAllStocksData } from "../StocksDatabase.js";
import { openOrdersDatabase, getAllOrders } from "../OrdersDatabase.js";
import TopBar from "../components/TopBar.jsx";
import ProductsViewCard from "../components/ProductsViewCard.jsx";
import RevenueViewCard from "../components/RevenueViewCard.jsx";
import SalesViewCard from "../components/SalesViewCard.jsx";
import SoldItemsList from "../components/SoldItemsList.jsx";

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState("");
  const [salesAmount, setSalesAmount] = useState();
  const [totalProducts, setTotalProducts] = useState();
  const [sales, setSales] = useState();
  useEffect(() => {
    const getDatabase = async () => {
      await openStockDatabase();
      await openOrdersDatabase();
      const allOrders = await getAllOrders();
      const allStocks = await getAllStocksData();
      setTotalProducts(allStocks.length);
      const today = [];
      for (let i = 0; i < allOrders.length; i++) {
        if (allOrders[i].timestamp - getHourMark() <= 86400000) {
          today.push({ ...allOrders[i] });
        }
      }
      let _salesAmount = 0;
      let _sales = today.length;

      for (let i = 0; i < today.length; i++) {
        _salesAmount += parseInt(today[i].totalPrice);
        console.log(today[i]);
      }
      setSalesAmount(_salesAmount);
      setSales(_sales);
    };
    getDatabase();
  }, []);

  const getHourMark = () => {
    const todayDate = new Date(Date.now());
    const year = todayDate.getFullYear();
    const month = todayDate.getMonth();
    const day = todayDate.getDate();
    const todayTimestamp = new Date(year, month, day, 0, 0, 0, 0);
    return todayTimestamp;
  };
  return (
    <div style={styles.container}>
      <TopBar pageTitle={`Dashboard`} setValue={setSearchInput} />
      <div>
        <div style={styles.statsContainer}>
          <ProductsViewCard productAmount={totalProducts} />
          <RevenueViewCard totalRevenue={`GH${"₵"} ${salesAmount}`} />
          <SalesViewCard totalSales={sales} />
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
