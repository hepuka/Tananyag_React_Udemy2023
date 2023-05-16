import Card from "./components/Card.component";

export const getDataToModal = (selected) => {
  return (
    <>
      <div className="title">
        <h1>Name: {selected.name}</h1>
      </div>
      <div className="body">
        {selected.age && <p>Age: {selected.age}</p>}
        {selected.price && <p>Price: {selected.price}</p>}
        {selected.packaging && <p>Packaging: {selected.packaging}</p>}
      </div>
    </>
  );
};
