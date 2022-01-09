import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiPytorch, SiTensorflow, SiFirebase } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus data-toggle="tooltip" data-placement="top" title="C++"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 data-toggle="tooltip" data-placement="top" title="Javascript"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs data-toggle="tooltip" data-placement="top" title="NodeJS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact data-toggle="tooltip" data-placement="top" title="React"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb data-toggle="tooltip" data-placement="top" title="MongoDB"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython data-toggle="tooltip" data-placement="top" title="Python"/>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit data-toggle="tooltip" data-placement="top" title="Git"/>
      </Col>
      
    </Row>
  );
}

export default Techstack;
