import * as React from "react";
import { Link } from "react-router-dom";
import GoogleMapReact from "google-map-react";

import { locations } from "./locationsProps";

import { store, RootState } from "../../store";
import { useSelector } from "react-redux";
import { changeLocation } from "../../store/choices";
import { ChoicesState } from "../../store/choices/dto";

export interface LocationsProps {}

const Locations: React.FunctionComponent<LocationsProps> = () => {
    const choicesState = useSelector<RootState, ChoicesState>((item) => item.choices);

    const [choice, setChoice] = React.useState<Number>(choicesState.location);

    const handleClick = (index) => {
        setChoice(index);
        store.dispatch(changeLocation(index));
    };

    return (
        <div className="flex w-full h-auto p-0 sm:px-20 sm:py-16 animate-fade-in">
            <div className="w-full h-full p-2 bg-yellow-300 shadow sm:p-8 sm:w-144">
                <div className="flex items-center justify-center mb-2">
                    <select
                        className="w-full h-10 p-3 text-xs font-medium text-gray-500 rounded-sm shadow outline-none cursor-pointer"
                        defaultValue="HCM"
                    >
                        <option value="HCM">Ho Chi Minh City</option>
                    </select>
                    <Link to="/solutions">
                        <button className="px-4 py-2 ml-2 font-semibold text-blue-800 rounded shadow outline-none bg-amber-400 focus:outline-none hover:bg-amber-500">
                            Next
                        </button>
                    </Link>
                </div>
                <ul className="overflow-auto bg-white rounded shadow sm:h-144 sm:w-128">
                    {locations.map((item, index) => {
                        let workSpaceClassName = `w-full mb-2 flex sm:flex-row flex-col cursor-pointer   duration-500 shadow-sm ` || "";
                        workSpaceClassName += choice === index ? " bg-amber-300" : " bg-amber-50";
                        return (
                            <li className={workSpaceClassName} key={item.city} onClick={() => handleClick(index)}>
                                <div className="w-full h-48 sm:h-40 sm:w-52">
                                    <img src={item.imgUrl} alt="" className="w-full h-full" />
                                </div>
                                <div className="flex-1 p-2 text-gray-900 ">
                                    <h1 className="text-2xl font-medium ">{item.name}</h1>
                                    <h2 className="text-xl ">{item.city}</h2>
                                    <p className="text-base font-light">{item.tags}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="hidden w-full ml-4 bg-white rounded shadow sm:block">
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
