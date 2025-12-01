import { getProducts } from "./database.js"

document.addEventListener(
    "click",
    (click) => {
        const clicked = click.target

        if (clicked.dataset.type === "product") {
            window.alert(`
                ${clicked.dataset.productname}
                $${clicked.dataset.productprice}`)
        }
    }
)

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-type="product" data-productid="${product.id}" data-productname="${product.name}" data-productprice="${product.price}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

