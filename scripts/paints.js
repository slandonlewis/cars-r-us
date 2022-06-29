import { getPaints, setPaint } from "./database.js"
const paints = getPaints()


export const paintColors = () => {
    let html = "<select id='paintOptions'>"
    html += '<option value="0">Select a paint color</option>'
    
    // renders all paint options
    const listItemsArray = paints.map(
        (paint) => {
            return `<option name="paint" value="${paint.id}"> ${paint.color}`
        }
        )
        // Join all of the strings in the array into a single string
        html += listItemsArray.join("")
        
    html += "</select>"
    return html
}

// set paint when clicked
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paintOptions") {
            setPaint(parseInt(event.target.value))
        }
    }
)
