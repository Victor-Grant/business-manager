import React from "react";

const SalesViewCard = ({ totalSales }) => {
  return (
    <div style={styles.container}>
      <div style={styles.text}>
        <p>Total Revenue</p>
        <div style={{ display: "flex", gap: 0, flexDirection: "column" }}>
          <p style={{ fontWeight: "bold" }}>{totalSales}</p>
          <p>Sales made today</p>
        </div>
      </div>
      <div style={styles.icon}>
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
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    border: "2px solid #aaa",
    borderRadius: 15,
    width: "30%",
    height: 140,
    justifyContent: "space-between",
  },
  icon: {
    width: "20%",
  },
  text: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 5,
  },
};

export default SalesViewCard;
