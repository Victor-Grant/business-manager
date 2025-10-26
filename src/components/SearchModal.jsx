import React from "react";
import { useState } from "react";

const SearchModal = () => {
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchObjects, setSearchObjects] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const selectItem = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const removeItem = (id) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== id));
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
      <input type="text" placeholder="Search..." style={styles.input} />
      {/* Additional search functionalities can be added here */}
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
};

export default SearchModal;
