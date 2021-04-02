import { useQuery } from "@apollo/client"
import React, { useEffect } from "react"
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from "reactstrap"
import { BY_ID } from "../graphql/queries"
import GoogleMapReact from 'google-map-react';
import Loading from "./Loading";
import MyError from "./MyError";

export default function Detail(props) {
	
	const { loading, error, data } = useQuery(BY_ID, { variables: { id: +props.match.params.id } })

	useEffect(() => {
	}, [data])

	if (loading) return <Loading />
	if (error) return <MyError message={"GraphQL error: " + error.message} />

	let cust = data.getCustomerByID
	const AnyReactComponent = ({ text }) => <div>{text}</div>;
	return (
		<Container>
			<Row>
				<Col>
					<Card className="mycard">
						<CardBody>
							<CardTitle tag="h5">
								{cust.first_name} {cust.last_name}
							</CardTitle>
							<CardText>
								<br /><b>Email:</b> {cust.email}
								<br /><b>Gender:</b> {cust.gender}
								<br /><b>Company:</b> {cust.company}
								<br /><b>City:</b> {cust.city}
								<br /><b>Title:</b> {cust.title}
							</CardText>
						</CardBody>
					</Card>
				</Col>
				<Col>
					<div style={{ height: '300px', width: '100%' }}>
						<GoogleMapReact
							bootstrapURLKeys={{ key: "AIzaSyAdLlAeSZFhmBvqklq-RLcKgG6nPWbXfpo" }}
							defaultCenter={{
								lat: -12,
								lng: 77
							}}
							defaultZoom={11}>
							<AnyReactComponent
								lat={-12}
								lng={77}
								text="My Marker"
							/>
						</GoogleMapReact>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
