import React from "react";
import { useState } from "react";

const AddStockModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stockName, setStockName] = useState("");
  const [stockDescription, setStockDescription] = useState("");
  const [stockPrice, setStockPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");

  const addStock = () => {
    // Logic to add stock goes here
    setIsOpen(false);
  };
  return (
    <div>
      <button style={styles.modalButton} onClick={() => setIsOpen(true)}>
        Add Stock
      </button>
      {isOpen && (
        <div style={styles.container}>
          <div style={styles.modal}>
            <h2>Add New Stock</h2>
            <div>
              <label style={{ display: "block", marginBottom: 10 }}>
                <p>Stock Name:</p>
                <input
                  type="text"
                  style={styles.input}
                  placeholder="eg. Headset"
                  onChange={(e) => setStockName(e.target.value)}
                  value={stockName}
                />
              </label>
              <label style={{ display: "block", marginBottom: 10 }}>
                <p>Stock Description:</p>
                <input
                  type="text"
                  style={styles.input}
                  placeholder="Short description"
                  onChange={(e) => setStockDescription(e.target.value)}
                  value={stockDescription}
                />
              </label>
              <label style={{ display: "block", marginBottom: 10 }}>
                <p>Stock Price:</p>
                <input
                  type="number"
                  style={styles.input}
                  placeholder="eg. $150"
                  onChange={(e) => setStockPrice(e.target.value)}
                  value={stockPrice}
                />
              </label>
              <label style={{ display: "block", marginBottom: 10 }}>
                <p>Stock Quantity:</p>
                <input
                  type="number"
                  style={styles.input}
                  placeholder="eg. 50"
                  onChange={(e) => setStockQuantity(e.target.value)}
                  value={stockQuantity}
                />
              </label>
              <button style={styles.modalButton} onClick={addStock}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    width: "400px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  modalButton: {
    lineHeight: "normal",
    padding: "10px 20px",
    backgroundColor: "#09ff00ff",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
  },
  input: {
    width: "100%",
    lineHeight: "normal",
    padding: 8,
    borderRadius: 8,
    border: "1px solid #ccc",
  },
};

export default AddStockModal;
