import { Fragment } from "react"
import { Jumbotron } from "reactstrap"

export default function Main(props) {
	return (
		<Fragment>
			<Jumbotron>
				<div className="container">
					<div className="row row-header">
						<div className="col-12 col-sm-6">
							<h1>REACT GRAPHQL CLIENT</h1>
							<p>Consuming a Customer Database</p>
						</div>
					</div>
				</div>
			</Jumbotron>
		</Fragment>
	)
}