import * as React from "react";
import { Link } from "react-router-dom";

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <div className="items-center justify-center w-full mt-4 sm:mt-0 animate-fade-in">
            <h1 className="text-3xl font-semibold tracking-tight text-center sm:text-6xl text-amber-500">The best place for Working</h1>
            <h2 className="text-xl font-medium tracking-tight text-center sm:text-4xl text-amber-500">
                Take advantage of team working by using Co-working Space today!
            </h2>
            <div className="flex flex-col items-center justify-center w-full sm:flex-row-reverse sm:mt-16">
                <div className="mb-8 ml-0 w-80 h-52 sm:mb-0 sm:ml-40 sm:h-96 sm:w-136">
                    <img src="/share/home.svg" alt="" className="w-full h-full" />
                </div>
                <div className="flex flex-col justify-start p-2 rounded-sm shadow w- sm:p-8 bg-amber-400">
                    <h1 className="mb-2 text-2xl font-semibold text-blue-800 sm:mb-4 sm:text-4xl">Get your Space</h1>
                    <h2 className="text-lg font-normal tracking-tighter text-white sm:text-3xl">Book a workspace in your city today!</h2>
                    <h2 className="text-lg font-normal tracking-tighter text-white sm:text-3xl">Just turn up, check in and pay as you go!</h2>
                    <select
                        className="w-full h-10 p-3 my-2 text-xs font-medium text-gray-500 rounded-sm shadow outline-none cursor-pointer sm:my-4"
                        defaultValue="HCM"
                    >
                        <option value="HCM">Ho Chi Minh City</option>
                    </select>
                    <Link to="/locations">
                        <button className="w-full py-2 text-base font-semibold text-center bg-white divide-gray-400 rounded-sm shadow outline-none hover:bg-blue-800 text-amber-400 focus:outline-none">
                            Start
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
