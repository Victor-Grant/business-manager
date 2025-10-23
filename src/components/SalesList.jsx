import React from "react";
import { soldItems } from "../utils";

const SalesList = ({ startDate, endDate }) => {
  return (
    <div style={styles.ordersContainer}>
      <div style={styles.titleField}>
        <h3 style={{ fontWeight: "normal" }}>All Items Sold</h3>
        <p>Showing Results for Today</p>
      </div>
      <div style={styles.items}>
        {soldItems.map((item) => (
          <div style={styles.item} key={item.id}>
            <p>{item.name}</p>
            <p>{new Date(item.timestamp).toDateString()}</p>
            <div style={styles.itemPrice}>{item.price}</div>
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
    flexDirection: "column",
    borderBottom: "1px solid #ccc",
    padding: 15,
  },
  itemPrice: {
    color: "#4caf50",
    fontWeight: "bold",
    backgroundColor: "#e8f5e9",
    padding: "5px",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80px",
  },
};

export default SalesList;
