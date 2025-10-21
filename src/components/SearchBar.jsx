import React from "react";

const SearchBar = ({ setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="Search products..."
      />
      <button style={styles.button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          viewBox="0 0 640 640"
        >
          <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
        </svg>
      </button>
    </div>
  );
};

const styles = {
  input: {
    height: "100%",
    borderRadius: "10px 0 0 10px",
    border: "1px solid #ccc",
    padding: "0px 10px",
    fontSize: 16,
    outline: "none",
    borderRight: "none",
  },
  container: {
    height: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    // border: "1px solid #000",
    padding: 0,
  },
  button: {
    height: "100%",
    width: 40,
    display: "flex",
    borderRadius: "0 10px 10px 0",
    border: "1px solid #ccc",
    cursor: "pointer",
  },
};

export default SearchBar;
