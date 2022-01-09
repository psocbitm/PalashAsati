import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJupyter,
  SiPostman,
  SiHeroku,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux data-toggle="tooltip" data-placement="top" title="Linux"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode data-toggle="tooltip" data-placement="top" title="VsCode"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman data-toggle="tooltip" data-placement="top" title="Postman"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
