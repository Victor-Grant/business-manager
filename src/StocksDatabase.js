const openStockDatabase = () => {
  return new Promise((resolve, reject) => {
    const result = window.indexedDB.open("Stocks", 1);
    result.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("StockStore")) {
        db.createObjectStore("StockStore", {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };
    result.onsuccess = (event) => resolve(event.target.result);
    result.onerror = (event) => reject(event.target.error);
  });
};

const addStocksData = async (data) => {
  const db = await openStockDatabase();
  const transaction = db.transaction("StockStore", "readwrite");
  const store = transaction.objectStore("StockStore");
  return new Promise((resolve, reject) => {
    const request = store.add(data);
    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
};

const getAllStocksData = async () => {
  const db = await openStockDatabase();
  const transaction = db.transaction("StockStore", "readonly");
  const store = transaction.objectStore("StockStore");
  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
};

const updateStocksData = async (id, updatedData) => {
  const db = await openStockDatabase();
  const transaction = db.transaction("StockStore", "readwrite");
  const store = transaction.objectStore("StockStore");
  return new Promise((resolve, reject) => {
    const request = store.put({ ...updatedData, id });
    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
};

const removeStocksData = async (id) => {
  const db = await openStockDatabase();
  const transaction = db.transaction("StockStore", "readwrite");
  const store = transaction.objectStore("StockStore");
  return new Promise((resolve, reject) => {
    const request = store.delete(id);
    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
};

export {
  openStockDatabase,
  addStocksData,
  getAllStocksData,
  updateStocksData,
  removeStocksData,
};
