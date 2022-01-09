import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
	return (
		<>
			<Particle />
			<section>
				<Container fluid className="home-section" id="home">
					<Container className="home-content">
						<Row>
							<Col md={7} className="home-header">
								<h1
									style={{ paddingBottom: 15 }}
									className="heading"
								>
									Hi There!{" "}
									<span
										className="wave"
										role="img"
										aria-labelledby="wave"
									>
										👋🏻
									</span>
								</h1>

								<h1 className="heading-name">
									I'M
									<strong className="main-name">
										{" "}
										PALASH ASATI
									</strong>
								</h1>
								<h5
									style={{
										padding: "10px 50px",
										textAlign: "left",
									}}
								>
									Incoming SWE intern @WellsFargo '22 | BIT,
									Mesra CSE'23
								</h5>

								<div
									style={{
										padding: "25px 50px",
										textAlign: "left",
									}}
								>
									<Type />
								</div>
							</Col>

							<Col md={5} style={{ padding: 20 }}>
								<img
									src={homeLogo}
									alt="home pic"
									className="img-fluid"
								/>
							</Col>
						</Row>
					</Container>
				</Container>

				<Home2/>
			</section>
		</>
	);
}

export default Home;
