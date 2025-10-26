import React from "react";

const OrdersTab = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div style={styles.container}>
      <div style={styles.calenderContainer}>
        <div>
          From <input style={styles.input} type="date" />
        </div>
        <div>
          To{" "}
          <input
            style={styles.input}
            type="date"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div>
        <button style={styles.button}>Print</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottom: "1px solid #ccc",
  },
  calenderContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  button: {
    padding: "15px 40px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: 6,
    fontSize: 18,
    cursor: "pointer",
  },
  input: {
    fontSize: 15,
    lineHeight: "normal",
    padding: 2,
    borderRadius: 8,
    border: "1px solid #ccc",
  },
};

export default OrdersTab;
