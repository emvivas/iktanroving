import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export const GeneralPanel = () => {
  const navigate = useNavigate();

  return (
    <section className="dashboard" id="generalPanel">
      <Container>
      </Container>
    </section>
  )
}
