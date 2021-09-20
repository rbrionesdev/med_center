import React from "react";
import SemanticLoader from "../components/SemanticLoader";
import SemanticLoaderError from "../components/SemanticLoaderError";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import { Card } from "semantic-ui-react";

export default function Appointments() {
  //{data:appointments} desturcing data here and renaming it to appointment
  const { data: appointments, loading, error } = useAxiosOnMount("/api/appointments");

  const renderAppointments = () => {
    const handleClick = (id) => {
      console.log(id);
    }

    if (loading) return <SemanticLoader />;
    if (error)
      return (
        <SemanticLoaderError
          header={"Error occurred getting appointments"}
          error={error}
        />
      );
    if (appointments.length === 0) {
      return <p>no appointments</p>;
    }
    return appointments.map((a) => {
      return (
          <Card key={a.id} onClick={() => handleClick(a.id)}>
          <Card.Content>
            <Card.Header>Patient: {a.patient.name}</Card.Header>
            <Card.Meta>Date: {a.date}</Card.Meta>
            <Card.Description>Dr: {a.doctor.name}</Card.Description>
          </Card.Content>
          </Card>
      );
    });
  };

  return (
    <div>
      <h1>Appointments</h1>
      <Card.Group itemsPerRow={4}>
        {renderAppointments()}
      </Card.Group>
    
      
    </div>
  );
}

