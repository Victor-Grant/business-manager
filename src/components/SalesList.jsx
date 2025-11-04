import React from "react";
import { soldItems } from "../utils";
import { useState, useEffect } from "react";
import { getAllOrders } from "../OrdersDatabase";

const SalesList = ({ startDate, endDate }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dat = await getAllOrders();
      setData(dat);
    };
    fetchData();
  }, []);
  return (
    <div style={styles.ordersContainer}>
      <div style={styles.titleField}>
        <div>
          <h3 style={{ fontWeight: "normal" }}>All Sales Made</h3>
          <p>Showing Results for Today</p>
        </div>
        <div>
          <button style={styles.button}>Print</button>
        </div>
      </div>
      <div style={styles.items}>
        {data.map((item) => (
          <div style={styles.item} key={item.id}>
            <p>{`${item.items.length} items`}</p>
            <p>{new Date(item.timestamp).toDateString()}</p>
            <div style={styles.itemPrice}>{`GH${"₵"} ${item.totalPrice}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  ordersContainer: {
    borderRadius: 15,
    border: "1px solid #ccc",
  },
  items: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    padding: 15,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#e8e8e8",
  },
  titleField: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid #ccc",
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemPrice: {
    color: "#43a33fff",
    fontWeight: "bold",
    backgroundColor: "#e8f5e9",
    padding: "5px",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80px",
  },
  button: {
    padding: "10px 40px",
    backgroundColor: "#09ff00ff",
    color: "white",
    border: "none",
    borderRadius: 10,
    fontSize: 16,
    cursor: "pointer",
    lineHeight: "normal",
  },
};

export default SalesList;
