import { gql } from '@apollo/client'

export const TOTAL_BY_CITY = gql`
	query {
		getTotalCustomersByCity {
			city
			customers_total
		}
	}
`
export const BY_CITY = gql`
	query($city: String, $size: Int, $page: Int) {
        getCustomersByCity(city: $city, size: $size, page: $page) {
            id
            first_name
            last_name
            email
            company
        }
    }
`
export const BY_ID = gql`
	query($id: Int) {
		getCustomerByID(id: $id) {
			id
			first_name
			last_name
			email
			gender
			company
			city
			title
			lat
			long    
		}
	}
`
