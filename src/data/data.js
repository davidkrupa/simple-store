export const productsData = {
    knives: [
        {
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
            image: "/src/images/type3.png",
            bladeLength: 200,
            handleLength: 13.5,
            width: 4.3,
            tickness: 2,
            weight: 198,
            id: "2",
            set: [5, 8]
        },
        {
            image: "/src/images/type3.png",
            bladeLength: 300,
            handleLength: 13.5,
            width: 4.3,
            tickness: 2,
            weight: 198,
            id: "3",
            set: [3, 5, 8]
        },
        {
            image: "/src/images/type1.png",
            bladeLength: 400,
            handleLength: 13.5,
            width: 4.3,
            tickness: 2,
            weight: 198,
            id: "4",
            set: [5, 8]
        },
        {
            image: "/src/images/type1.png",
            bladeLength: 500,
            handleLength: 13.5,
            width: 4.3,
            tickness: 2,
            weight: 198,
            id: "5",
            set: [3, 5, 8]
        },
        {
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
    