import React from "react";
import TopBar from "../components/TopBar.jsx";
import OrdersBox from "../components/OrdersBox.jsx";
import OrdersTab from "../components/OrdersTab.jsx";
import SalesList from "../components/SalesList.jsx";

const Orders = () => {
  return (
    <div>
      <TopBar pageTitle="Orders" />
      <OrdersTab />
      <div style={{ padding: 20 }}>
        <div style={styles.infoBox}>
          <OrdersBox infoTitle="Total Orders" infoData="150 Orders" />
          <OrdersBox infoTitle="Completed Orders" infoData="120 Orders" />
          <OrdersBox infoTitle="Cancelled Orders" infoData="5 Orders" />
        </div>
        <div>
          <SalesList startDate={""} endDate={""} />
        </div>
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

export default Orders;
