import React from "react";
import { useState, useEffect } from "react";
import SearchModal from "./SearchModal.jsx";
import { addOrders } from "../OrdersDatabase.js";

const OrderModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [items, setItems] = useState();
  const [orderNumbers, setOrderNumbers] = useState([]);
  const [orderNumber, setOrderNumber] = useState();

  const openModal = () => {
    setIsOpen(true);
    createOrderNumber();
  };

  const confirmOrder = () => {
    const newOrder = {
      totalPrice: parseFloat(totalPrice),
      timestamp: Date.now(),
      items,
      orderNumber,
    };
    addOrders({ ...newOrder });
    setIsOpen(false);
    setTotalPrice(0);
  };

  const createOrderNumber = () => {
    let num = Math.random() * 500;
    if (num <= 400) {
      num += 100;
    }

    if (orderNumbers.includes(num)) {
      createOrderNumber();
    }
    setOrderNumber(num.toFixed(0));
  };
  return (
    <div>
      <button onClick={openModal} style={styles.modalButton}>
        New Order
      </button>
      {isOpen && (
        <div style={styles.container}>
          <div style={styles.modal}>
            <div style={styles.modalHeader}>
              <h2>New Order #{orderNumber}</h2>
              <button
                style={styles.closeButton}
                onClick={() => setIsOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 640 640"
                >
                  <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
                </svg>
              </button>
            </div>
            <div style={styles.modalContents}>
              <SearchModal setTotalPrice={setTotalPrice} setItems={setItems} />
              <div>
                <p>
                  Total Price: GH{"₵"} {totalPrice}
                </p>
              </div>
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
  modalHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  closeButton: {
    backgroundColor: "rgba(255, 0, 0, 0.5)",
    borderRadius: "50%",
    color: "white",
    border: "none",
    width: 25,
    height: 25,
    padding: 5,
    cursor: "pointer",
  },
  modalContents: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
};

export default OrderModal;
