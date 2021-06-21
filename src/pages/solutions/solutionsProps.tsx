interface SolutionsServiceProps {
    imgUrl: string;
    name: string;
    describe: string;
    capacity: string;
}

export const solutionsService: SolutionsServiceProps[] = [
    {
        imgUrl: "/share/solodesk.svg",
        name: "Solo Desk",
        describe: "Your own desk in a shared office",
        capacity: "1 Person",
    },
    {
        imgUrl: "/share/standardoffice.svg",
        name: "Standard Office",
        describe: "Private, lockable space",
        capacity: "1 - 20 Persons",
    },
    {
        imgUrl: "/share/officesuite.svg",
        name: "Office Suite",
        describe: "Space with private amenities",
        capacity: "20 - 100 Persons",
    },
];
