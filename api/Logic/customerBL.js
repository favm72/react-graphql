import customers from '../DataAccess/customersDA.js'

export default class CustomerBL {
    static filterByCity(city, size, page) {
        return customers.filter(x => x.city == city).slice((page - 1) * size, page * size)
    }
    static getByID(id) {
        return customers.find(x => x.id == id)
    }
    static totalByCity() {
        let totals = customers.reduce((group, item) => {
            if (group[item.city])
                group[item.city] += 1
            else
                group[item.city] = 1
            return group
        }, {})      
        return Object.keys(totals).map(key => ({city: key, customers_total: totals[key]}))
    }   
}