// each fish should include the image, the species, its length, 
// what you named the fish, where you harvested it, 
// and what it eats
import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}
// Import the FishList function from the correct module
import { FishList } from './fish/FishList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fishlist")


parentHTMLElement.innerHTML = FishList()

import {travelList} from './locations/travelist.js'


const parentHTMLElement2 = document.querySelector(".placestraveled")


parentHTMLElement2.innerHTML = travelList()