import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Bucuresti", "Craiova", "Oradea", "Galati"];
  //items = [];

  const handlerClick = (e: MouseEvent) => console.log(e.clientY);
  const selectedIndex = 0;

  //if (items.length === 0) return <p>No Items Found</p>;
  //const message = items.length === 0 ? <p>No Items Found</p> : null;

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Items Found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={handlerClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
