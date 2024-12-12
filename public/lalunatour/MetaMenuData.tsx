interface TourInfo {
    title: string;
    subTitle: string;
    depart: string;
    finish: string;
    content: string[];
    include: string[];
    exclude: string[];
    id: string;
    img: string;
}


export const metaMenu: TourInfo[] = [
    {
        title: "BA NA HILLS - GOLDEN BRIDGE",
        subTitle: '"A must check in attraction in the area - FULL DAY TOUR"',
        depart: "Depart: 7:30 - 8:00 from Hoi An",
        finish: "Finish: 17:30 - 18:00 at Hoi An",
        content: [
            "⇨ 07:30 am - 08:00 am: Our car and a tour guide pick you up at the hotel lobby. Reach Ba Na Hills via Cable Car.",
            "⇨ Spend your time on the most modern Cable Car in Southeast Asia, visit Dream Stream Cable Car Station and see the panorama of Quang Nam - DaNang on high.",
            "⇨ After finishing the first cable car, you will visit The Golden Bridge - which has the most exotic structure and also the world’s most prominent pedestrian bridges highlighted by the British Guard newspaper, France wine cellar, Le Jardin D’amourn (consists of 9 gardens), Linh Ung pagoda.",
            "⇨ Continue the 2nd Cable Car to visit the French Village - enjoy Street Music, watch Art’s statue, Campanile, Nine Floor Goddless Shrine, Tombstone Temple, Watch Carnival Performance Show, Square Du Dome... Roller Coaste Car (free ride)...",
            "⇨ Lunch at Restaurant (buffet)",
            "⇨ Take the Lava Train from Sun Kingdom to many new attractions for check-in such as Helios waterfall, Time Gate, and The Moon Kingdom...Join in Fantasy Park by Walking in Fairy Forest, discovering Dinosaur Park, playing 5D wild west,m enjoying 4D death race ride, watch 3D mega 360 degrees, ride on Journey into the underground, enter Jurassic Park, challenge Freefall Tower and participate in an adventure in Horror House and over 90 free games.",
            "⇨ 15:00 Return to the Cable Car for leaving Ba Na Hills.",
            "⇨ 16:45 - 17:45: Our car brings you back to the hotel. Tour ends."            
        ],
        include: [
            "✔ Transportation & English - speaking tour guide",
            "✔ Cable cars, entrance fees in the Fantasy Park & Alpine Coaster",
            "✔ Golden Bridge, Funicular, Le Jardin D’amour",
            "✔ Lunch with buffet",
            "✔ A bottle of water"
        ],
        exclude: [
            "✘ Wax statue Museum",
            "✘ Personal expenses and Services not mentioned above.",
            "✘ France Wine Cellar entrance & services."
        ],
        id: "ba-na",
        img: "tour1.jpg"
    },
    {
        title: "MY SON HOLYLAND",
        subTitle: '"Luxury Morning Tour"',
        depart: "Depart: 7:30 from Hoi An",
        finish: "Finish: 14:00 at Hoi An",
        content: [
            "⇨ 07:30 - 08:00: Our guide pick you up at the hotel and depart to My Son Sanctuary - The World Cultural Heritage.",
            "⇨ 09:30: Arrive at My Son and we’ll have 2 hours to discover the site by walking throughout the landscape, learning histories with our local English speaking tour guide, enjoying the Champa’s traditional performance.",
            "⇨ 11:45: Get back to the car and move to a local house to learn how to make ricepaper, you will enjoy your own hand-making produce later on.",
            "⇨ 12:30: Back to the car and have lunch at another local house, relax with cold herbal tea, nice foods and fresh air.",
            "⇨ 13:30: Take a boat trip to Hoi An with nice and cool breeze on boarding, beautiful river scenery on the biggest river in the Central of Viet Nam named as Thu Bon River",
            "⇨ 14:00: Arrive in Hoi An, Tour ends.",   
        ],
        include: [
            "✔ A two ways hotel pick up and drop off (100km round trip in distance)",
            "✔ The 150.000 vnd entrance fees and Electric car transfer fee.",
            "✔ Light lunch",
            "✔ Ricepaper making",
            "✔ English-speaking guide",
            "✔ A bottle of water",
            "✔ Cool towel"
        ],
        exclude: [
            "✘ Personal expense services not mentioned above",
            "✘ Drinks",
            "✘ Tips & gratuities for guides and drivers"
        ],
        id: "my-son",
        img: "tour2.jpg"
    }
]

