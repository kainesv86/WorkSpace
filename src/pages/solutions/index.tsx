import * as React from "react";
import { Link } from "react-router-dom";
import { solutionsService } from "./solutionsProps";

import { store, RootState } from "../../store";
import { ChoicesState } from "../../store/choices/dto";
import { useSelector } from "react-redux";
import { changeSolution } from "../../store/choices";

export interface SolutionsProps {}

const Solutions: React.FunctionComponent<SolutionsProps> = () => {
    const choicesState = useSelector<RootState, ChoicesState>((item) => item.choices);

    const [choice, setChoice] = React.useState<Number>(choicesState.solution);
    const handleClick = React.useCallback(
        (index) => {
            setChoice(index);
            store.dispatch(changeSolution(index));
        },
        [setChoice]
    );

    return (
        <div className="items-center justify-center w-full px-0 mt-8 sm:px-20 animate-fade-in">
            <h1 className="text-3xl font-semibold tracking-tight text-center sm:text-6xl text-amber-500">Working solutions</h1>
            <h2 className="text-xl font-medium tracking-tight text-center sm:text-4xl text-amber-500">For companies of all sizes, fit your needs</h2>
            <div className="justify-center w-full px-8 mt-8 sm:flex">
                <Link to="/order">
                    <button className="w-full px-4 py-2 font-semibold text-blue-800 rounded shadow outline-none sm:w-48 bg-amber-400 focus:outline-none hover:bg-amber-500">
                        Next
                    </button>
                </Link>
            </div>
            <ul className="flex flex-col items-center justify-center w-full mt-0 sm:mt-8 sm:flex-row">
                {solutionsService.map((item, index) => (
                    <li
                        className={`w-full mt-6 sm:mt-0 border-4  hover:border-blue-400 shadow cursor-pointer ${
                            index === choice ? "border-blue-700" : "border-amber-400"
                        } sm:mr-0 sm:w-100 ${index !== solutionsService.length - 1 ? "sm:mr-16" : ""}`}
                        key={index}
                        onClick={() => handleClick(index)}
                    >
                        <div className="w-full h-64">
                            <img src={item.imgUrl} alt="" className="w-full h-full" />
                        </div>
                        <div className="w-full h-auto p-4">
                            <h1 className="mb-2 text-4xl font-bold tracking-tighter text-gray-800">{item.name}</h1>
                            <p className="mb-2 font-medium text-gray-700">{item.describe}</p>
                            <p className="font-medium text-gray-700">{item.capacity}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Solutions;
