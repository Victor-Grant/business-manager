import React from "react";
import { Link, Outlet } from "react-router-dom";
import SearchBar from "./components/SearchBar.jsx";
import { useState } from "react";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div>Manager</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/home">
            <div style={styles.link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                viewBox="0 0 640 640"
              >
                <path d="M128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192C576 156.7 547.3 128 512 128L128 128zM152 192L488 192C501.3 192 512 202.7 512 216C512 229.3 501.3 240 488 240L152 240C138.7 240 128 229.3 128 216C128 202.7 138.7 192 152 192z" />
              </svg>
              <p>Dashboard</p>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/home/stocks"
          >
            <div style={styles.link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                viewBox="0 0 640 640"
              >
                <path d="M560.3 301.2C570.7 313 588.6 315.6 602.1 306.7C616.8 296.9 620.8 277 611 262.3L563 190.3C560.2 186.1 556.4 182.6 551.9 180.1L351.4 68.7C332.1 58 308.6 58 289.2 68.7L88.8 180C83.4 183 79.1 187.4 76.2 192.8L27.7 282.7C15.1 306.1 23.9 335.2 47.3 347.8L80.3 365.5L80.3 418.8C80.3 441.8 92.7 463.1 112.7 474.5L288.7 574.2C308.3 585.3 332.2 585.3 351.8 574.2L527.8 474.5C547.9 463.1 560.2 441.9 560.2 418.8L560.2 301.3zM320.3 291.4L170.2 208L320.3 124.6L470.4 208L320.3 291.4zM278.8 341.6L257.5 387.8L91.7 299L117.1 251.8L278.8 341.6z" />
              </svg>
              <p>Stocks</p>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/home/orders"
          >
            <div style={styles.link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                viewBox="0 0 640 640"
              >
                <path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z" />
              </svg>
              <p>Orders</p>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/home/settings"
          >
            <div style={styles.link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                viewBox="0 0 640 640"
              >
                <path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z" />
              </svg>
              <p>Settings</p>
            </div>
          </Link>
        </div>
      </div>
      <div style={styles.mainContent}>
        <div style={styles.topBar}>
          <SearchBar setValue={setSearchInput} />
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/home/settings"
          >
            <div style={styles.link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                viewBox="0 0 640 640"
              >
                <path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z" />
              </svg>
            </div>
          </Link>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    padding: 20,
    width: "17%",
    minWidth: "150px",
    backgroundColor: "#f4f4f4",
    borderRight: "1px solid #aaa",
  },
  mainContent: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  topBar: {
    width: "100%",
    borderBottom: "1px solid #aaa",
    padding: "3px 20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: "10px",
  },
  link: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
};

export default App;
