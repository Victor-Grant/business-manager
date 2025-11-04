import React from "react";
import { useState, useEffect } from "react";
import { getAllOrders } from "../OrdersDatabase";

const SoldItemsList = () => {
  const [soldItems, setSoldItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const dat = await getAllOrders();
      const items = [];
      for (let i = 0; i < dat.length; i++) {
        for (let j = 0; j < dat[i].items.length; j++) {
          items.push({ ...dat[i].items[j], timestamp: dat[i].timestamp });
        }
      }
      setSoldItems(items);
    };
    fetchData();
  }, []);
  return (
    <div style={styles.ordersContainer}>
      <div style={styles.titleField}>
        <div>
          <h3 style={{ fontWeight: "normal" }}>All Items Sold</h3>
          <p>Showing Results for Today</p>
        </div>
        <div>
          <button style={styles.button}>Print</button>
        </div>
      </div>
      <div style={styles.items}>
        {soldItems.map((item) => (
          <div style={styles.item} key={item.id}>
            <p>{item.name}</p>
            <p>{new Date(item.timestamp).toDateString()}</p>
            <div style={styles.itemPrice}>{`GH${"₵"} ${item.price}`}</div>
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

export default SoldItemsList;
