function Item({name, quantity, category}){
  return(
    <main>
      <li>
        <hr/>
        <p>{name}</p>
        <p>Quantity:{quantity}</p>
        <p>Category:{category}</p>
      </li>
    </main>
  )
}

export default Item;