interface SolutionsServiceProps {
        imgUrl: string;
        name: string;
        describe: string;
        capacity: string;
}

export const solutionsService: SolutionsServiceProps[] = [
        {
                imgUrl: "/share/soloDesk.svg",
                name: "Solo Desk",
                describe: "Your own desk in a shared office",
                capacity: "1 Person",
        },
        {
                imgUrl: "/share/standardOffice.svg",
                name: "Standard Office",
                describe: "Private, lockable space",
                capacity: "1 - 20 Persons",
        },
        {
                imgUrl: "/share/officeSuite.svg",
                name: "Office Suite",
                describe: "Space with private amenities",
                capacity: "20 - 100 Persons",
        },
];
