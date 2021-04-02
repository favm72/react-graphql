import { useQuery } from "@apollo/client"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Button, Container, Table } from "reactstrap"
import { BY_CITY } from "../graphql/queries"
import Loading from "./Loading"
import MyError from "./MyError"

export default function Customers(props) {
	
	const size = 5
	const history = useHistory()
	const [page, setPage] = useState(1)	
	const { loading, error, data } = useQuery(BY_CITY, 
		{ 
			variables: {
				city: props.match.params.city,
				size: size,
				page: page
			}
		})	

	useEffect(() => {		
	}, [data])

	if (loading) return <Loading />
	if (error) return <MyError message={"GraphQL error: " + error.message} />

	return (
		<Container>			
			<Table responsive hover size="sm">
				<thead>
					<tr>
						<th>ID</th>
						<th>NAME</th>
						<th>LASTNAME</th>
						<th>EMAIL</th>
						<th>COMPANY</th>
						<th>MAP</th>						
					</tr>
				</thead>
				<tbody>
					{data.getCustomersByCity.map(x => {
						return (
							<tr key={x.id}>
								<td>{x.id}</td>
								<td>{x.first_name}</td>
								<td>{x.last_name}</td>
								<td>{x.email}</td>
								<td>{x.company}</td>
								<td><Button onClick={()=>{
									history.push(`/detail/${x.id}`)
								}}>View</Button></td>					
							</tr>
						);
					})}
				</tbody>
			</Table>
			<div className="pagination">
				<div className="btn" onClick={() => setPage(page => page === 1 ? 1 : page - 1)}>&lt;</div>
				<div className="page">{page}</div>
				<div className="btn" onClick={() => setPage(page => page + 1)}>&gt;</div>
			</div>
		</Container>
	);
}
