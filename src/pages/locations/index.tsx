import * as React from "react";
import { Link } from "react-router-dom";
import GoogleMapReact from "google-map-react";

import { locations } from "./locationsProps";

export interface LocationsProps {}

const Locations: React.FunctionComponent<LocationsProps> = () => {
        const [choice, setChoice] = React.useState<Number>(0);

        const handleClick = React.useCallback((index) => {
                setChoice(index);
        }, []);

        return (
                <div className="flex w-full h-auto p-0 sm:px-20 sm:py-16">
                        <div className="w-full h-full p-2 sm:p-8 bg-amber-200 sm:w-144">
                                <div className="flex items-center justify-center mb-2">
                                        <select
                                                className="w-full h-10 p-3 text-xs font-medium text-gray-500 rounded-sm outline-none "
                                                defaultValue="HCM"
                                        >
                                                <option value="HCM">Ho Chi Minh City</option>
                                        </select>
                                        <Link to="/solutions">
                                                <button className="px-4 py-2 ml-2 text-white rounded outline-none bg-amber-400 focus:outline-none">
                                                        Next
                                                </button>
                                        </Link>
                                </div>
                                <ul className="overflow-auto bg-white rounded sm:h-144 sm:w-128">
                                        {locations.map((item, index) => (
                                                <li
                                                        className={`w-full mb-2 flex sm:flex-row flex-col ${
                                                                choice === index ? "border-blue-400 border-4" : ""
                                                        } shadow-lg`}
                                                        key={index}
                                                        onClick={() => handleClick(index)}
                                                >
                                                        <div className="w-full h-48 sm:h-40 sm:w-52">
                                                                <img
                                                                        src={item.imgUrl}
                                                                        alt=""
                                                                        className="w-full h-full"
                                                                />
                                                        </div>
                                                        <div className="p-2 bg-amber-50">
                                                                <h1 className="text-2xl font-medium text-gray-900 bg-amber-50">
                                                                        {item.name}
                                                                </h1>
                                                                <h2 className="text-xl text-gray-900 bg-amber-50">
                                                                        {item.city}
                                                                </h2>
                                                                <p className="text-base font-light text-gray-900 bg-amber-50">
                                                                        {item.tags}
                                                                </p>
                                                        </div>
                                                </li>
                                        ))}
                                </ul>
                        </div>
                        <div className="hidden w-full ml-4 bg-white sm:block">
                                <GoogleMapReact
                                        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY || "" }}
                                        defaultCenter={{ lat: 59.95, lng: 30.33 }}
                                        defaultZoom={11}
                                ></GoogleMapReact>
                        </div>
                </div>
        );
};

export default Locations;
