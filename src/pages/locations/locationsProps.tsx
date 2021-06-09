interface LocationsInfoProps {
    name: string;
    city: string;
    tags: string;
    imgUrl: string;
    photos: Array<string>;
}

export const locations: LocationsInfoProps[] = [
    {
        name: "Green Space",
        city: "Ho Chi Minh City",
        tags: "Event space • Wellness room • Parking • 4+",
        imgUrl: "/photo/1stfloor/main.png",
        photos: [
            "/photo/1stfloor/main.png",
            "/photo/1stfloor/1.png",
            "/photo/1stfloor/2.png",
            "/photo/1stfloor/3.png",
            "/photo/1stfloor/4.png",
            "/photo/1stfloor/5.png",
            "/photo/1stfloor/6.png",
            "/photo/1stfloor/7.png",
            "/photo/1stfloor/8.png",
            "/photo/1stfloor/9.png",
            "/photo/1stfloor/10.png",
            "/photo/1stfloor/11.png",
            "/photo/1stfloor/12.png",
            "/photo/1stfloor/13.png",
            "/photo/1stfloor/14.png",
        ],
    },

    {
        name: "WorkSpace Tower 1",
        city: "Ho Chi Minh City 1",
        tags: "Event space • Wellness room • Parking • 4+",
        imgUrl: "/images/workspace1.jpg",
        photos: ["d", "d"],
    },

    {
        name: "WorkSpace Tower 2",
        city: "Ho Chi Minh City 2",
        tags: "Event space • Wellness room • Parking • 4+",
        imgUrl: "/images/workspace1.jpg",
        photos: ["d", "d"],
    },

    {
        name: "WorkSpace Tower 3",
        city: "Ho Chi Minh City 3",
        tags: "Event space • Wellness room • Parking • 4+",
        imgUrl: "/images/workspace1.jpg",
        photos: ["d", "d"],
    },
    {
        name: "WorkSpace Tower 4",
        city: "Ho Chi Minh City 4",
        tags: "Event space • Wellness room • Parking • 4+",
        imgUrl: "/images/workspace1.jpg",
        photos: ["d", "d"],
    },
];
