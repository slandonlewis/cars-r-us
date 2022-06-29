const database = {
    paints: [
        { id: 1, color: 'Silver', price: 500 },
        { id: 2, color: 'Midnight Blue', price: 750 },
        { id: 3, color: 'Firebrick Red', price: 850 },
        { id: 4, color: 'Spring Green', price: 650 }
    ],
    interiors: [
        { id: 1, material: 'Beige Fabric', price: 2000 },
        { id: 2, material: 'Charcoal Fabric', price: 2200 },
        { id: 3, material: 'White Leather', price: 2800 },
        { id: 4, material: 'Black Leather', price: 3400 }
    ],
    technologies: [
        { id: 1, package: 'Basic', price: 3000 },
        { id: 2, package: 'Navigation', price: 4500 },
        { id: 3, package: 'Visibility', price: 6000 },
        { id: 4, package: 'Ultra', price: 8000 }
    ],
    wheels: [
        { id: 1, size: '17-inch Pair Radial', price: 2000 },
        { id: 2, size: '17-inch Pair Radial Black', price: 2500 },
        { id: 3, size: '18-Inch Pair Spoke Silver', price: 3500 },
        { id: 4, size: '18-Inch Pair Spoke Black', price: 4000 }
    ],
    orderBuilder: {},
    customOrders: [
    { 
        id: 1, 
        paintId: 1,
        interiorId: 2, 
        technologyId: 3, 
        wheelId: 4,
        timestamp: 1614659931693
    }
    ]
}


// functions that export data
export const getPaints = () => {
    return database.paints.map(paint => ({ ...paint }))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({ ...interior }))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({ ...technology }))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({ ...order }))
}


// set state
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}


// adds custom order to customOrders data
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.orderBuilder }

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}