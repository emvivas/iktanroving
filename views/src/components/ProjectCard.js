import React from 'react';
import { Col } from "react-bootstrap";
import "./Project.css";


export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} style={{ height: '20rem' }} alt="IKTAN Roving's gallery element"/>
        <div className="proj-txtx"> 
          <label><h4>{title}</h4></label>
          <label><span>{description}</span></label>
        </div>
      </div>
    </Col>
  )
}
