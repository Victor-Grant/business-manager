import React from "react";

const OrdersBox = ({ infoTitle, infoData }) => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <p>{infoTitle}</p>
        <p>{infoData}</p>
      </div>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width={50}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 400,
    border: "1px solid #ccc",
    justifyContent: "space-between",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
  },
};

export default OrdersBox;
