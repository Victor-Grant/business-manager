import React from "react";
import { useState, useEffect } from "react";
import { getAllStocksData } from "../StocksDatabase.js";

const SearchModal = () => {
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchObjects, setSearchObjects] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const getSearchObjects = async () => {
      const _searchObjects = await getAllStocksData();
      setOptions(_searchObjects);
      setSearchObjects(_searchObjects);
    };

    console.log("Rendering");

    getSearchObjects();
  }, []);

  const selectItem = (item) => {
    setSelectedItems([...selectedItems, item]);
    setSearchQuery("");
    setOpenSearchModal(false);
    console.log(selectedItems);
  };

  const removeItem = (id) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== id));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setOptions(
      searchObjects.filter((item) => String(item.name).includes(e.target.value))
    );
    if (e.target.value.length > 0) {
      setOpenSearchModal(true);
    } else {
      setOpenSearchModal(false);
    }
  };

  return (
    <div>
      <div>
        {selectedItems.map((item) => (
          <div style={styles.selectedItem} key={item?.id}>
            <div>
              <p>{item?.name}</p>
            </div>
            <input
              type="number"
              placeholder="Quantity"
              value={selectedItems?.quantity}
              style={{ width: "60px" }}
            />
            <button
              style={styles.removeButton}
              onClick={() => removeItem(item?.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => handleSearchChange(e)}
        style={styles.input}
      />
      <div>
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
  },
  removeButton: {
    padding: "5px 10px",
    lineHeight: "normal",
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  },
  list: {
    padding: 2,
    lineHeight: "normal",
    width: "100%",
    border: "1px solid black",
    borderRadius: "none",
  },
};

export default SearchModal;
