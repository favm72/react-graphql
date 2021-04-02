import React, { useEffect } from "react";
import { Button, Card, CardBody, CardFooter, CardText, CardTitle, Container } from "reactstrap"
import { useHistory } from "react-router-dom"
import { useQuery } from '@apollo/client'
import { TOTAL_BY_CITY } from "../graphql/queries"
import Loading from "../components/Loading"
import MyError from "./MyError";

export default function Dashboard() {
	
	const history = useHistory()
	const { loading, error, data } = useQuery(TOTAL_BY_CITY)
	
	useEffect(() => {		
	}, [data])

	if (loading) return <Loading />
	if (error) return <MyError message={"GraphQL error: " + error.message} />

	return (		
		<Container className="cities">			
			{data.getTotalCustomersByCity.map((x, index) => {
				return (
					<Card key={index}>
						<CardBody>
							<CardTitle tag="h4">{x.city}</CardTitle>							
							<CardText>Customer count: {x.customers_total}</CardText>							
						</CardBody>
						<CardFooter>
							<Button onClick={()=>{								
								history.push(`/city/${x.city}`)
							}}>View</Button>
						</CardFooter>
					</Card>					
				);
			})}			
		</Container>
	);
}
