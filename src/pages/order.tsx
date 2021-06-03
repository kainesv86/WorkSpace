import * as React from "react";

import { Link } from "react-router-dom";

import { locations } from "./locations/locationsProps";
import { solutionsService } from "./solutions/solutionsProps";

import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ChoicesState } from "../store/choices/dto";
import { UserState } from "../store/user/dto";

export interface OrderProps {}

const Order: React.FunctionComponent<OrderProps> = () => {
        const choicesState = useSelector<RootState, ChoicesState>((item) => item.choices);
        const UserState = useSelector<RootState, UserState>((item) => item.user);

        return (
                <div className="flex items-center justify-center w-full h-auto py-8 sm:py-16 animate-fade-in">
                        <div className="flex-col hidden mr-16 shadow sm:flex w-128">
                                <div className="w-full h-auto mb-2 bg-white border-4 rounded border-amber-400">
                                        <img
                                                src={solutionsService[choicesState.solution].imgUrl}
                                                alt=""
                                                className="w-full h-auto"
                                        />
                                        <div className="w-full h-auto p-4">
                                                <h1 className="mb-2 text-4xl font-bold text-gray-800">
                                                        {solutionsService[choicesState.solution].name}
                                                </h1>
                                                <p className="mb-2 text-xl font-medium text-gray-700">
                                                        {solutionsService[choicesState.solution].describe}
                                                </p>
                                                <p className="text-xl font-medium text-gray-700">
                                                        {solutionsService[choicesState.solution].capacity}
                                                </p>
                                        </div>
                                </div>
                                <div className="flex w-full h-40 rounded shadow">
                                        <div className="w-56 h-full">
                                                <img
                                                        src={locations[choicesState.location].imgUrl}
                                                        alt=""
                                                        className="w-full h-full"
                                                />
                                        </div>
                                        <div className="flex flex-col justify-between w-full h-full p-2 bg-amber-50">
                                                <div>
                                                        <h1 className="text-2xl font-medium text-gray-900">
                                                                {locations[choicesState.location].name}
                                                        </h1>
                                                        <h2 className="text-xl text-gray-900">
                                                                {locations[choicesState.location].city}
                                                        </h2>
                                                </div>
                                                <p className="text-base font-light text-gray-900">
                                                        {locations[choicesState.location].tags}
                                                </p>
                                        </div>
                                </div>
                        </div>
                        <div className="flex flex-col">
                                <h1 className="mb-4 text-2xl font-bold text-amber-500">
                                        Final step to get close your space
                                </h1>
                                <div className="w-full h-56 mb-4">
                                        <img className="w-full h-full" src="/share/order.svg" alt="" />
                                </div>
                                <div className="px-4 py-8 rounded shadow bg-amber-300">
                                        <p className="mb-4 text-base font-bold text-white">
                                                Enter you email that we can contact with you
                                        </p>
                                        <form>
                                                <label htmlFor="email" className="text-sm font-bold text-white">
                                                        Email
                                                </label>
                                                <input
                                                        type="text"
                                                        name="email"
                                                        id="email"
                                                        className="flex w-full h-10 px-4 mb-4 bg-white rounded shadow outline-none"
                                                        defaultValue={UserState.email}
                                                />
                                                <Link to="order/done">
                                                        <button className="w-full py-2 mb-4 text-base font-bold text-center text-white border-2 border-white rounded shadow outline-none hover:border-blue-100 bg-amber-300 focus:outline-none">
                                                                Get in touch
                                                        </button>
                                                </Link>
                                                <Link to="order/done">
                                                        <button className="w-full py-2 text-base font-bold text-center text-blue-400 border-2 border-blue-400 rounded shadow outline-none hover:text-white hover:border-white bg-amber-300 focus:outline-none">
                                                                Book a tour
                                                        </button>
                                                </Link>
                                        </form>
                                </div>
                        </div>
                </div>
        );
};

export default Order;
