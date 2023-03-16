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
            name: "Santoku knife",
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
            name: "Chef's knife",
            image: "/src/images/type1.png",
            bladeLength: 600,
            handleLength: 13.5,
            width: 4.3,
            tickness: 2,
            weight: 198,
            id: "6",
            set: [8]
        },
        {
            name: "Chef's knife",
            image: "/src/images/type1.png",
            bladeLength: 700,
            handleLength: 13.5,
            width: 4.3,
            tickness: 2,
            weight: 198,
            id: "7",
            set: [8]
        },
        {
            name: "Chef's knife",
            image: "/src/images/type1.png",
            bladeLength: 800,
            handleLength: 13.5,
            width: 4.3,
            tickness: 2,
            weight: 198,
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
    