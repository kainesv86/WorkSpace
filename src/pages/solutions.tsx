import * as React from "react";

interface SolutionsServiceProps {
        imgUrl: string;
        name: string;
        describe: string;
        capacity: string;
}

const solutionsService: SolutionsServiceProps[] = [
        {
                imgUrl: "/share/solodesk.svg",
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
                name: "Solo Desk",
                describe: "Your own desk in a shared office",
                capacity: "20 - 100 Persons",
        },
];

export interface SolutionsProps {}

const Solutions: React.FunctionComponent<SolutionsProps> = () => {
        return (
                <div className="items-center justify-center w-full mt-8">
                        <h1 className="text-3xl font-bold tracking-tight text-center sm:text-6xl text-amber-500">
                                Working solutions
                        </h1>
                        <h2 className="text-xl font-medium tracking-tight text-center sm:text-4xl text-amber-500">
                                For companies of all sizes, fit your needs
                        </h2>
                        <ul className="flex flex-col items-center justify-center w-full sm:flex-row-reverse sm:mt-16">
                                {solutionsService.map((item, index) => (
                                        <li className="w-full mt-6 border-4 border-amber-400" key={index}>
                                                <div className="w-full h-64">
                                                        <img src={item.imgUrl} alt="" className="w-full h-full" />
                                                </div>
                                                <div className="w-full h-auto p-4">
                                                        <h1 className="mb-2 text-4xl font-bold text-gray-800">
                                                                {item.name}
                                                        </h1>
                                                        <p className="mb-2 font-medium text-gray-700">
                                                                {item.describe}
                                                        </p>
                                                        <p className="font-medium text-gray-700">{item.capacity}</p>
                                                </div>
                                        </li>
                                ))}
                        </ul>
                </div>
        );
};

export default Solutions;
