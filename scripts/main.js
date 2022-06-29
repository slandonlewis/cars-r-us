/* Import data from all modules */
import { interiorMaterials } from "./interior.js"
import { paintColors } from "./paints.js"
import { wheelSizes } from "./wheels.js"
import { technologyPackages } from "./technologies.js"
import { addCustomOrder } from "./database.js"
import { Orders } from "./orders.js"
// const customOrders = getOrders()

const container = document.querySelector('#container')
/* pass in and render modules data in appropriate spot*/
const renderAllHTML = () => {
    container.innerHTML = `
    <article class="choices">
        <section id='paint-box' class='section-box'>
        <h2>Paints</h2>
        ${paintColors()}
        </section>
    
        <section id='interior-box' class='section-box'>
        <h2>Interior</h2>
        ${interiorMaterials()}
        </section>
    
        <section id='wheel-box' class='section-box'>
        <h2>Wheels</h2>
        ${wheelSizes()}
        </section>
    
        <section id='technologies-box' class='section-box'>
        <h2>Technologies</h2>
        ${technologyPackages()}
        </section>
    </article>
    
    <article>
    <button id="orderButton">Create Custom Order</button>
    </article>
    
    <article class="customOrders">
    <h2>Custom Car Orders</h2>
    ${Orders()}
    </article>
    `
}

renderAllHTML() // initial page load

// event listener for state change
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})

// button event listener
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("orderButton")) {
             addCustomOrder()
        }
    }
)