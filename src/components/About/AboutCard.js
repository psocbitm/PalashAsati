import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi Everyone, I am{" "}
						<span className="purple">Palash Asati </span>
						from{" "}
						<span className="purple"> Madhya Pradesh.</span>
						<br />I am a pre-final year undergraduate of Computer
						Science and Engineering at the Birla Institute of
						technology, Mesra.
						<br />
						<br />
						Apart from coding, some other activities that I love to
						do!
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Playing badminton, Volleyball, Chess
						</li>
						<li className="about-activity">
							<ImPointRight /> Photography
						</li>
						<li className="about-activity">
							<ImPointRight /> Travelling
						</li>
					</ul>

					
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
