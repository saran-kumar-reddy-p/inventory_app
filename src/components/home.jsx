import { useState } from "react";
import { Container, Row } from "reactstrap";
import AddingNewItem from "./addNewItem";
import ItemCard from "./ItemCard";

const Home = () => {
  const inventData = [
    { id: 1, title: "Mac Book Pro", quantity: 10, description: "Apple brand" },
    { id: 2, title: "Hp Laptop", quantity: 18, description: "Hp brand" },
    { id: 3, title: "one plus", quantity: 40, description: "onePlus" },
  ];
  const [id, setId] = useState(3);
  const [data, setData] = useState(inventData);

  const [addItem, setAddItem] = useState(false);
  const newItem = () => {
    setAddItem(!addItem);
  };
  const deletItem = (id) => {
    const filterData = data.filter((item) => item.id !== id);
    console.log("filter data", filterData);
    setData(filterData);
  };

  console.log("home data:", data);
  return (
    <div>
      {addItem && (
        <AddingNewItem
          newItem={newItem}
          data={data}
          setData={setData}
          id={id}
          setId={setId}
        />
      )}
      <Container>
        <button className="btn btn-info mb-5" onClick={newItem}>
          Add Item
        </button>
        <Row>
          {data.length ? (
            data.map((item) => (
              <ItemCard key={item.id} item={item} deletItem={deletItem} />
            ))
          ) : (
            <h1>No items</h1>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
