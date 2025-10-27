const openOrdersDatabase = () => {
  return new Promise((resolve, reject) => {
    const result = window.indexedDB.open("Orders", 1);
    result.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("OrderStore")) {
        db.createObjectStore("OrderStore", {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };
    result.onsuccess = (event) => resolve(event.target.result);
    result.onerror = (event) => reject(event.target.error);
  });
};

const addOrders = async (data) => {
  const db = await openOrdersDatabase();
  const transaction = db.transaction("OrderStore", "readwrite");
  const store = transaction.objectStore("OrderStore");
  return new Promise((resolve, reject) => {
    const request = store.add(data);
    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
};

const getAllOrders = async () => {
  const db = await openOrdersDatabase();
  const transaction = db.transaction("OrderStore", "readonly");
  const store = transaction.objectStore("OrderStore");
  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
};

const updateOrders = async (id, updatedData) => {
  const db = await openOrdersDatabase();
  const transaction = db.transaction("OrderStore", "readwrite");
  const store = transaction.objectStore("OrderStore");
  return new Promise((resolve, reject) => {
    const request = store.put({ ...updatedData, id });
    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
};

const removeOrders = async (id) => {
  const db = await openOrdersDatabase();
  const transaction = db.transaction("OrderStore", "readwrite");
  const store = transaction.objectStore("OrderStore");
  return new Promise((resolve, reject) => {
    const request = store.delete(id);
    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
};

export {
  openOrdersDatabase,
  addOrders,
  getAllOrders,
  updateOrders,
  removeOrders,
};
