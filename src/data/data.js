export const productsData = {
    knives: [
        {
            name: "Chef's knife",
            image: "/src/images/type1.png",
            bladeLength: 19.3,
            handleLength: 13.5,
            width: 4.3,
            tickness: 2,
            weight: 198,
            id: "1",
            set: [3, 5, 8]
        },
        {
            name: "Santoku knife",
            image: "/src/images/type2.png",
            bladeLength: 17.5,
            handleLength: 13.2,
            width: 4.6,
            tickness: 2,
            weight: 200,
            id: "2",
            set: [5, 8]
        },
        {
            name: "Nakiri knife",
            image: "/src/images/type3.png",
            bladeLength: 15.6,
            handleLength: 14.2,
            width: 4.9,
            tickness: 2,
            weight: 211,
            id: "3",
            set: [3, 5, 8]
        },
        {
            name: "Santoku knife S",
            image: "/src/images/type4.png",
            bladeLength: 12,
            handleLength: 11.5,
            width: 2.7,
            tickness: 2,
            weight: 94,
            id: "4",
            set: [5, 8]
        },
        {
            name: "Fruit knife",
            image: "/src/images/type5.png",
            bladeLength: 9.5,
            handleLength: 11.5,
            width: 2.1,
            tickness: 2,
            weight: 79,
            id: "5",
            set: [3, 5, 8]
        },
        {
            name: "Kiritsuke knife",
            image: "/src/images/type6.png",
            bladeLength: 23,
            handleLength: 13.6,
            width: 4.7,
            tickness: 2,
            weight: 228,
            id: "6",
            set: [8]
        },
        {
            name: "Slicing knife",
            image: "/src/images/type7.png",
            bladeLength: 19.2,
            handleLength: 12.8,
            width: 3.1,
            tickness: 2,
            weight: 175,
            id: "7",
            set: [8]
        },
        {
            name: "Utility knife",
            image: "/src/images/type8.png",
            bladeLength: 12.5,
            handleLength: 11.5,
            width: 2.6,
            tickness: 2,
            weight: 86,
            id: "8",
            set: [8]
        }
    ],

    sets: [
        {
            name: "set of 3",
            productsIds: [1, 3, 5],
            image: "/src/images/set-of-3.jpg",
            isChosen: true,
            price: 49.99,
            id: "variant1"      
        },
        {
            name: "set of 5",
            productsIds: [1, 2, 3, 4, 5],
            image: "/src/images/set-of-5.jpg",
            isChosen: false,
            price: 69.99,
            id: "variant2"           
        },
        {
            name: "set of 8",
            productsIds: [1, 2, 3, 4, 5, 6, 7, 8],
            image: "/src/images/set-of-8.jpg",
            isChosen: false,
            price: 89.99,
            id: "variant3"           
        }
    ]
}
    