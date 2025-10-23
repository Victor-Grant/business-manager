import React from "react";
import { stockItems } from "../utils";

const StockList = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textHeading}>
        <h3>Stocks</h3>
        <p>Showing All Available Stocks</p>
      </div>
      <div>
        <table style={{ width: "100%" }}>
          <thead>
            <tr style={styles.dataRow}>
              <th style={styles.dataFieldName}>Name</th>
              <th style={styles.dataFieldPrice}>Price</th>
              <th style={styles.dataFieldAmount}>Quantity</th>
              <th style={styles.dataFieldButton}>
                <div style={{ height: "20px" }}>
                  <p>Order</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {stockItems.map((item) => (
              <tr style={styles.dataRow}>
                <td style={styles.dataFieldName}>{item.name}</td>
                <td style={styles.dataFieldPrice}>{item.price}</td>
                <td style={styles.dataFieldAmount}>{item.quantity}</td>
                <td style={styles.dataFieldButton}>
                  <button style={styles.button}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      width="16"
                      height="16"
                    >
                      <path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z" />
                    </svg>
                    <p>+</p>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
    flexDirection: "column",
  },
  dataFieldName: {
    padding: "5px 20px",
    textAlign: "left",
    width: "50%",
  },
  dataFieldPrice: {
    padding: "5px 20px",
    textAlign: "left",
    width: "20%",
  },
  dataFieldAmount: {
    padding: "5px 20px",
    textAlign: "left",
    width: "15%",
  },
  dataFieldButton: {
    padding: "5px 20px",
    textAlign: "left",
    width: "15%",
  },
  dataRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTop: "1px solid #ccc",
    alignItems: "center",
  },
  button: {
    padding: "0px 20px",
    borderRadius: 12,
    border: "1px solid #ccc",
    backgroundColor: "#f0f0f0",
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 0,
  },
};

export default StockList;
