import { getInteriors, setInterior } from "./database.js"
const interiors = getInteriors()

export const interiorMaterials = () => {
    let html = "<select id='interiorOptions'>"
    html += '<option value="0">Select an interior</option>'

    // renders all interior options
    const listItemsArray = interiors.map(
        (interior) => {
            return `<option name="interior" value="${interior.id}"> ${interior.material}`
        }
    )
    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</select>"
    return html
}

// set interior when clicked
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interiorOptions") {
            setInterior(parseInt(event.target.value))
        }
    }
)