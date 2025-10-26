const openStockDatabase = () => {
  return new Promise((resolve, reject) => {
    const result = window.indexedDB.open("Stocks", 1);
    result.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("StockStore")) {
        db.createObjectStore("store", { keyPath: "id", autoIncrement: true });
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
  store.add(data);
};

const getAllData = async () => {};

const removeData = (id) => {};
