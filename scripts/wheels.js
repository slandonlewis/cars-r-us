import { getWheels, setWheel } from "./database.js"
const wheels = getWheels()


export const wheelSizes = () => {
    let html = "<select id='wheelOptions'>"
    html += '<option value="0">Select a wheel size</option>'

    // renders all wheel options
    const listItemsArray = wheels.map(
        (wheel) => {
            return `<option name="wheel" value="${wheel.id}"> ${wheel.size}`
        }
    )
    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</select>"
    return html
}

// set wheel when clicked
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheelOptions") {
            setWheel(parseInt(event.target.value))
        }
    }
)