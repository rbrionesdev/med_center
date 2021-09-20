import React from "react";
import { Card } from "semantic-ui-react";
import ListLoader from "../components/ListLoader";

export default function Patients() {
  const handleClick = (id) => {
    console.log(id);
  }
  return (
    <div>
      <ListLoader 
        header={"Patients"}
        errorMessage={""}
        url="/api/patients"
        renderData={(p) => (
          <Card onClick={() => handleClick(p.id)}>
            <Card.Content>
              <Card.Header>Name: {p.name}</Card.Header>
            </Card.Content>
          </Card>
        )}
      />
    </div>
  );
}