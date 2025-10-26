import React from "react";
import { useState } from "react";

const AddStockModal = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              <label>
                Stock Name:
                <input type="text" />
              </label>
              <label>
                Stock Description:
                <input type="text" />
              </label>
              <label>
                Stock Price:
                <input type="number" />
              </label>
              <button style={styles.modalButton}>Add</button>
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
  },
  modalButton: {
    padding: "10px 20px",
    backgroundColor: "#09ff00ff",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
  },
};

export default AddStockModal;
