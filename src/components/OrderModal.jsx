import React from "react";
import { useState } from "react";

const OrderModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const confirmOrder = () => {
    // Logic to confirm order goes here

    setIsOpen(false);
  };
  return (
    <div>
      <button onClick={() => setIsOpen(true)} style={styles.modalButton}>
        New Order
      </button>
      {isOpen && (
        <div style={styles.container}>
          <div style={styles.modal}>
            <h2>New Order</h2>
            <div>
              <button onClick={confirmOrder} style={styles.modalButton}>
                Confirm Order
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
};

export default OrderModal;
