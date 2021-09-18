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
        header={"Doctors"}
        errorMessage={""}
        url="/api/patients"
        renderData={(p) => (
          <Card onClick={() => handleClick(p.id)}>
            <h1>{p.name}</h1>
          </Card>
        )}
      />
    </div>
  );
}