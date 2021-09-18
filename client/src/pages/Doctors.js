import React from "react";
import { Card } from "semantic-ui-react";
import ListLoader from "../components/ListLoader";

export default function Doctors() {
  const handleClick = (id) => {
    console.log(id);
  }
  return (
    <div>
      <ListLoader 
        header={"Doctors"}
        errorMessage={""}
        url="/api/doctors"
        renderData={(d) => (
          <Card onClick={() => handleClick(d.id)}>
            <h1>{d.name}</h1>
            <p>{d.phone}</p>
          </Card>
        )}
      />
    </div>
  );
}