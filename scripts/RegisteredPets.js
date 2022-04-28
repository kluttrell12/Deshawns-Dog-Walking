import { getPets } from "./database.js"
//import { Walkers } from "./Walkers.js"

const pets = getPets()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li>${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

