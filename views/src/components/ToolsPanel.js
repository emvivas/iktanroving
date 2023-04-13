import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export const ToolsPanel = () => {
  const navigate = useNavigate();

  return (
    <section className="dashboard" id="roverPanel">
      <Container>
      </Container>
    </section>
  )
}
