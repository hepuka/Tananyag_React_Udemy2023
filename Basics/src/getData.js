import Card from "./components/Card.component";

export const getData = (db, Component) => {
  return db.map((item) => {
    return (
      <Card key={item.id}>
        <Component
          name={item.name}
          age={item.age}
          packaging={item.packaging}
          price={item.price}
        />
      </Card>
    );
  });
};
