import Header from "../utilities/header"
import ItemList from "./item-list"
import Item from "./item"

export default function Page() {
  return (
    <main>
      <Header />
      <h1>Shopping List</h1>
      <ItemList />
    </main>
  );
}

