import graphql from 'graphql'
const { buildSchema } = graphql;

const myschema = buildSchema(`
	type TotalCustomersByCity {
		city: String
		customers_total: Int
	}
	type CustomerByCity {
		id: Int
		first_name: String
		last_name: String
		email: String		
		company: String
	}
	type Customer {
		id: Int
		first_name: String
		last_name: String
		email: String
		gender: String
		company: String
		city: String
		title: String
		lat: Float
		long: Float
	}
	type Query {
		getTotalCustomersByCity: [TotalCustomersByCity]
		getCustomersByCity(city:String,size:Int,page:Int): [CustomerByCity]
		getCustomerByID(id:Int): Customer
	}
`)
export default myschema
