import React from "react";

const OrdersTab = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div style={styles.container}>
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
  input: {
    fontSize: 15,
    lineHeight: "normal",
    padding: 2,
    borderRadius: 8,
    border: "1px solid #ccc",
  },
};

export default OrdersTab;
