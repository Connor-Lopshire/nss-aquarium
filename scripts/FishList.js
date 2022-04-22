// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishlist">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishcard">
            <div><img   width= "400" height= "300" class="fish__image image--card" src="${fish.image}" /></div> 
           <div class="fishinfo">
            <div class="fish__name">Name:${fish.name}</div>
            <div class="fish__species">Species:${fish.species}</div>
            <div class="fish__length">length:${fish.size}in</div>
            <div class="fish__location">Origin:${fish.harvested}</div>
            <div class="fish__diet">Prefered Food: ${fish.food}</div>
             </div> 
            </section>
`
    }
    htmlString += `</article>`

    return htmlString
}