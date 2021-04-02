import customerBL from "./customerBL";

describe('Testing Totals', () => {
	const totals = customerBL.totalByCity()	

	describe.each([1,7,13])("random item", (x) => {
		test('Totals must be 20', () => {					
			expect(totals[x].customers_total === 20).toBeTruthy();
		});
	})
	
	test('Totals Sum must be 1000', () => {	
		let sum = totals.reduce((s,x)=>{
			s += x.customers_total
			return s
		}, 0)			
		expect(sum === 1000).toBeTruthy();
	});
});


describe('Testing Customers by City', () => {
	
	test('pagination size 5', () => {		
		const customers = customerBL.filterByCity("Conyersville, AZ", 5, 2)			
		expect(customers.length === 5).toBeTruthy();
	});

	test('pagination size 7', () => {		
		const customers = customerBL.filterByCity("Warner, NH", 7, 1)			
		expect(customers.length === 7).toBeTruthy();
	});
	
});

describe('Testing Customer by ID', () => {
			
	test('customer id 2 name', () => {	
		const customer = customerBL.getByID(2)					
		expect(customer.first_name).toBe("Margaret");
	});	

	test('customer id 13 last name', () => {	
		const customer = customerBL.getByID(13)					
		expect(customer.last_name).toBe("West");
	});	
	
});
