import { getOrders, getInteriors, getPaints, getWheels, getTechnologies } from "./database.js";

const interiors = getInteriors()
const paints = getPaints()
const wheels = getWheels()
const technologies = getTechnologies()

const buildOrderListItem = (order) => {
    // functions that find interiors, paints, wheels, and technologies
        const foundInteriors = interiors.find(
            (interior) => {
                return interior.id === order.interiorId
            }
        )
    
        const foundPaints = paints.find(
            (paint) => {
                return paint.id === order.paintId
            }
        )
    
        const foundWheels = wheels.find(
            (wheel) => {
                return wheel.id === order.wheelId
            }
        )

        const foundTechnologies = technologies.find(
            (technology) => {
                return technology.id === order.technologyId
                // these are the same
                // if (technology.id === order.technologyId) {
                //     return technology
                // }
            }
        )

        const totalCost = foundInteriors.price + foundPaints.price + foundWheels.price + foundTechnologies.price
    
        const costString = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    
        return `<li class="renderedOrder">
            ${foundPaints.color} car with ${foundWheels.size} wheels, ${foundInteriors.material} interior,
            and the ${foundTechnologies.package} package for a total cost of $${totalCost}
        </li>`
    }
    
    export const Orders = () => {
        const orders = getOrders()
    
        let html = "<ul>"
    
        const listItems = orders.map(buildOrderListItem)
        // these are the same
        // const listItems = orders.map((order) => buildOrderListItem(order))
        
    
        html += listItems.join("")
        html += "</ul>"
    
        return html
    }