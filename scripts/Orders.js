import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const allProducts = getProducts()
const allEmployees = getEmployees()
const allOrders = getOrders()


// Function whose responsibility is to find the product for an order
const findProduct = (order) => {

    for (const product of allProducts) {
        if (product.id === order.productId) {
            return product
        }
    }

    return null
}

// Function whose responsibility is to find the employee for an order
const findEmployee = (order) => {

    for (const employee of allEmployees) {
        if (employee.id === order.employeeId) {
            return employee
        }
    }

    return null
}

export const Orders = () => {
    let html = ""
    html += "<ul>"

    for (const order of allOrders) {
        const orderEmployee = findEmployee(order)
        const orderProduct = findProduct(order)

        html += `<li data-type="order" data-orderid="${order.id}" data-opid="${orderProduct.id}" data-oeid="${orderEmployee.id}">${orderProduct.name} was sold by ${orderEmployee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}

