import Header from "../utilities/header"
import ItemList from "./item-list"
import Item from "./item"

export default function Page() {
  return (
    <main>
      <Header week={3}/>
      <h1>Shopping List</h1>
      <ItemList />
    </main>
  );
}

