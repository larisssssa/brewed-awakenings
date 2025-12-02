import { getEmployees, getOrders } from "./database.js"

document.addEventListener(
    "click",
    (click) => {
        const clicked = click.target

        if (clicked.dataset.type === "employee") {
            const orders = getOrders()
            const employeeOrders = orders.filter(order => order.employeeId === parseInt(clicked.dataset.employeeid))
            window.alert(`${clicked.dataset.employeename} sold ${employeeOrders.length} product(s).`)
        }
    }
)



const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee" data-employeeid="${employee.id}" data-employeename="${employee.name}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

