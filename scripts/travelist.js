import { getFish } from "./database.js";

export const travelList = () => {
    const fishes = getFish()
    let htmlString = ''
    for (const fish of fishes) {
        htmlString += `<div class="location">${fish.harvested} </div>`
        
    }
    
    return htmlString
}