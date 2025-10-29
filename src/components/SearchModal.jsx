import React from "react";
import { useState, useEffect } from "react";
import { getAllStocksData } from "../StocksDatabase.js";

const SearchModal = ({ setTotalPrice }) => {
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchObjects, setSearchObjects] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [options, setOptions] = useState([]);
  const [quantity, setQuantity] = useState("1");

  useEffect(() => {
    const getSearchObjects = async () => {
      const _searchObjects = await getAllStocksData();
      setOptions(_searchObjects);
      setSearchObjects(_searchObjects);
    };

    getSearchObjects();
  }, []);

  const selectItem = (item) => {
    const sItems = [...selectedItems, { ...item, quantity: 1 }];
    setSelectedItems(sItems);
    setSearchQuery("");
    setOpenSearchModal(false);
    setTotalPrice(calculateTotalPrice(sItems));
  };

  const calculateTotalPrice = (arr) => {
    let price = 0;
    for (let i = 0; i < arr.length; i++) {
      price += arr[i].price * Number(arr[i].quantity);
    }
    return price;
  };

  const removeItem = (id) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== id));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    const opt = searchObjects.filter((item) =>
      String(item.name).toLowerCase().includes(e.target.value.toLowerCase())
    );
    setOptions(opt);
    if (e.target.value.length > 0) {
      setOpenSearchModal(true);
    } else {
      setOpenSearchModal(false);
    }
  };

  const changeQuantity = (e, index) => {
    const arr = selectedItems;
    arr[index].quantity = e.target.value;
    setQuantity(e.target.value);
    setSelectedItems(arr);
    setTotalPrice(calculateTotalPrice(arr));
  };

  return (
    <div>
      <div style={styles.selectedItemsContainer}>
        {selectedItems.map((item, index) => (
          <div style={styles.selectedItem} key={item?.id}>
            <div style={{ padding: 5 }}>
              <p style={{ fontSize: "12px" }}>
                {item?.name.length > 30
                  ? item?.name.slice(0, 30) + "..."
                  : item?.name}
              </p>
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", height: "100%" }}
            >
              <div style={styles.price}>
                <p>GHc{item.price}</p>
              </div>
              <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                style={styles.quantity}
                onChange={(e) => changeQuantity(e, index)}
              />
              <button
                style={styles.removeButton}
                onClick={() => removeItem(item?.id)}
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e)}
          style={styles.input}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {openSearchModal &&
            options.map((data) => (
              <button
                onClick={() => selectItem(data)}
                key={data.id}
                style={styles.list}
              >
                {data?.name}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  input: {
    width: "100%",
    lineHeight: "normal",
    padding: 8,
    borderRadius: 8,
    border: "1px solid #ccc",
  },
  selectedItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "30px",
    border: "1px solid black",
    borderRadius: 5,
  },
  removeButton: {
    padding: "5px 15px",
    lineHeight: "normal",
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    borderRadius: "0 5px 5px 0",
    cursor: "pointer",
    borderLeft: "1px solid black",
  },
  list: {
    padding: 2,
    lineHeight: "normal",
    width: "96%",
    border: "1px solid black",
    borderRadius: "none",
  },
  price: {
    borderLeft: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2px",
  },
  quantity: {
    all: "unset",
    width: "40px",
    border: "none",
    textAlign: "center",
    borderLeft: "1px solid black",
  },
  selectedItemsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    padding: 5,
  },
};

export default SearchModal;
