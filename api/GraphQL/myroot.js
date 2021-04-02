import CustomerBL from "../Logic/customerBL.js";

const myroot = { 
	getCustomersByCity: (data) => CustomerBL.filterByCity(data.city, data.size, data.page),
    getCustomerByID: (data) => CustomerBL.getByID(data.id),
    getTotalCustomersByCity: () => CustomerBL.totalByCity()
};
export default myroot
