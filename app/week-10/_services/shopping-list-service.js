import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  const items = []
  const q = query(
  collection(db, "users", userId, "items")
  );
  const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    items.push(doc.data());
  });
  return items
}

export const addItem = async (userId, item) => {
  await addDoc(collection(db, "users", userId, "items", "item1")), {
    itemId: item
  }
}