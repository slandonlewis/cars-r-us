import { getTechnologies, setTechnology } from "./database.js"
const technologies = getTechnologies()

// set technology when clicked
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "technologyOptions") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const technologyPackages = () => {
    let html = "<select id='technologyOptions'>"
    html += '<option value="0">Select a package</option>'

    // renders all technology options
    const listItemsArray = technologies.map(
        (technology) => {
            return `<option name="technology" value="${technology.id}"> ${technology.package}`
        }
    )
    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</select>"
    return html
}
