import React from "react";
import TopBar from "../components/TopBar.jsx";
import OrdersBox from "../components/OrdersBox.jsx";
import OrdersTab from "../components/OrdersTab.jsx";
import SalesList from "../components/SalesList.jsx";
import { getAllOrders } from "../OrdersDatabase.js";
import { useState, useEffect } from "react";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllOrders();
      setAllOrders(data);
      let num = 0;
      for (let i = 0; i < data.length; i++) {
        num += data[i].items.length;
      }
      console.log(data[5].items);
      setItemsCount(num);
    };

    fetchData();
  }, []);
  return (
    <div>
      <TopBar pageTitle="Orders" />
      <OrdersTab />
      <div style={{ padding: 20 }}>
        <div style={styles.infoBox}>
          <OrdersBox
            infoTitle="Total Orders"
            infoData={`${allOrders.length} Orders`}
          />
          <OrdersBox infoTitle="Items Sold" infoData={`${itemsCount} items`} />
          <OrdersBox infoTitle="Cancelled Orders" infoData="N/A" />
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
