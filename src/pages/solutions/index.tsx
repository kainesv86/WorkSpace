import * as React from "react";
import { Link } from "react-router-dom";

interface SolutionsServiceProps {
        imgUrl: string;
        name: string;
        describe: string;
        capacity: string;
}

const solutionsService: SolutionsServiceProps[] = [
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
                name: "Solo Desk",
                describe: "Your own desk in a shared office",
                capacity: "20 - 100 Persons",
        },
];

export interface SolutionsProps {}

const Solutions: React.FunctionComponent<SolutionsProps> = () => {
        const [choice, setChoice] = React.useState<Number>(0);
        const handleClick = React.useCallback(
                (index) => {
                        setChoice(index);
                },
                [setChoice]
        );

        return (
                <div className="items-center justify-center w-full px-0 mt-8 sm:px-20">
                        <h1 className="text-3xl font-bold tracking-tight text-center sm:text-6xl text-amber-500">
                                Working solutions
                        </h1>
                        <h2 className="text-xl font-medium tracking-tight text-center sm:text-4xl text-amber-500">
                                For companies of all sizes, fit your needs
                        </h2>
                        <div className="justify-center w-full px-8 mt-8 sm:flex">
                                <Link to="/solutions">
                                        <button className="w-full px-4 py-2 text-white rounded outline-none sm:w-48 bg-amber-400 focus:outline-none">
                                                Next
                                        </button>
                                </Link>
                        </div>
                        <ul className="flex flex-col items-center justify-center w-full mt-0 sm:mt-8 sm:flex-row">
                                {solutionsService.map((item, index) => (
                                        <li
                                                className={`w-full mt-6 sm:mt-0 border-4 ${
                                                        index === choice ? "border-blue-400" : "border-amber-400"
                                                } sm:mr-0 sm:w-100 ${
                                                        index !== solutionsService.length - 1 ? "sm:mr-16" : ""
                                                }`}
                                                key={index}
                                                onClick={() => handleClick(index)}
                                        >
                                                <div className="w-full h-64">
                                                        <img src={item.imgUrl} alt="" className="w-full h-full" />
                                                </div>
                                                <div className="w-full h-auto p-4">
                                                        <h1 className="mb-2 text-4xl font-bold tracking-tighter text-gray-800">
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
