const database = {
    fish: [
        {   species: "Heterotis niloticus",
            name: "Jerry",
            food: "shrimp",
            size: 10,
            harvested: "Australlia",
            image: "https://www.fluvalaquatics.com/ca/wp-content/uploads/2019/11/Arowana.jpg"
        },
        {
            species: "Carassius auratus",
            name: "Bart",
            food: "crustaceans",
            size: 3,
            harvested: "Norway",
            image: "https://fluvalaquatics.com/us/wp-content/uploads/2019/11/Goldfish.jpg"
        },
        {
            species: "Astronotus ocellatus",
            name: "Larry",
            food: "algae",
            size: 2,
            harvested: "China",
            image: "https://fluvalaquatics.com/us/wp-content/uploads/2019/11/Oscar.jpg"
        },
        {
            species: "Pseudoplatystoma tigrinum",
            name: "Dale",
            food: "small fish",
            size: 15,
            harvested: "India",
            image: "https://www.fluvalaquatics.com/ca/wp-content/uploads/2019/11/Tiger-shovelnose-catfish.jpg"
        },
        {
            species: "Phractocephalus hemioliopterus",
            name: "Derek",
            food: "kelp",
            size: 11,
            harvested: "Fiji",
            image: "https://www.fluvalaquatics.com/ca/wp-content/uploads/2019/11/Redtail-catfish.jpg"
        },
        {
            species: "Chitala ornata",
            name: "Joel",
            food: "crabs",
            size: 8,
            harvested: "Ireland",
            image: "https://www.fluvalaquatics.com/ca/wp-content/uploads/2019/11/Clown-knifefish.jpg"
        }
    
    ]
}
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}